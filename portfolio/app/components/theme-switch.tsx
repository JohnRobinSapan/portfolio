"use client"

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import moon from 'public/moon.svg'
import sun from 'public/sun.svg'
import computer from 'public/computer.svg'
import { Listbox } from '@headlessui/react'

const images = [
  { src: moon, alt: 'Dark', className: 'hidden dark:inline' },
  { src: sun, alt: 'Light', className: 'dark:hidden' },
  { src: computer, alt: 'System', className: 'dark:invert' },
];

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { theme, resolvedTheme, setTheme } = useTheme()
  let selected = theme != 'system' ? 'headlessui-active' : 'invert';

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])


  if (!mounted) {
    return (
      <>
        {images.slice(0, -1).map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            height={24}
            className={`${image.className} ${selected}`}
          />
        ))}
      </>
    )
  }
  const currentImage = images.find(image => image.alt.toLowerCase() === resolvedTheme) || images[0];

  return (
    <Listbox value={theme} onChange={e => setTheme(e)}>
      <Listbox.Label className='sr-only' htmlFor='headlessui-listbox-button'>Theme</Listbox.Label>
      <Listbox.Button className='h-6' id='headlessui-listbox-button'>
        <Image
          src={currentImage.src}
          alt={currentImage.alt}
          height={24}
          className={`${currentImage.className} ${selected}`}
        />
      </Listbox.Button>
      <Listbox.Options className={'absolute right-1 top-11 mt-2 w-36 origin-top-right divide-y divide-neutral-300 dark:divide-neutral-800 rounded-lg bg-gray-100 shadow-lg ring-1 ring-black/5 dark:bg-black'}>
        {images.map((image, index) => (
          <Listbox.Option
            key={index}
            value={image.alt.toLowerCase()}
            className='hover:bg-neutral-200 dark:hover:bg-neutral-800 first:rounded-t-lg last:rounded-b-lg'>
            <span className='flex py-1 px-2 ui-selected:headlessui-active'>
              <Image
                src={image.src}
                alt={image.alt}
                height={24}
                className='mr-2 dark:invert'
              />
              {image.alt}
            </span>
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  )
}