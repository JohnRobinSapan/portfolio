'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import ThemeSwitch from 'app/components/theme-switch';
import Image from 'next/image'
import github from 'public/github-logo.svg'
import linkedin from 'public/linkedin.svg'

const navItems = {
  '/': {
    name: 'Home',
  },
  '/work': {
    name: 'Work',
  },
  '/resume': {
    name: 'Resume',
  },
  // '/blog': {
  //   name: 'blog',
  // },
  // '/guestbook': {
  //   name: 'guestbook',
  // },
};

// TODO: Add theme switcher and social media links/icons
export function Navbar() {
  const pathname = usePathname();

  return (
    <div className='tracking-tight flex-none w-full -mx-2 -mt-2 backdrop-blur border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-gray-100/60 dark:bg-black/60'>
      <nav
        className="flex flex-row items-center relative px-2 py-2 md:relative"
        id="nav">
        <div className="flex flex-row space-x-2">
          {Object.entries(navItems).map(([path, { name }]) => {
            return (
              <Link
                key={path}
                href={path}
                className={clsx("transition-all nav-link rounded-2xl hover:text-neutral-200 flex align-middle text-center relative py-1 px-2", // Remove ml
                  {
                    'active-scroll-spy': pathname === path,
                  })}>
                {name}
              </Link>
            );
          })}
        </div>
        <div className="flex flex-row-reverse items-center w-full ">
          <div className='pl-6 pr-2 flex'>
            <ThemeSwitch />
          </div>
          <div className="flex items-center border-r border-neutral-300 dark:border-neutral-800 max-[430px]:hidden">
            <Link
              href='https://www.linkedin.com/in/JohnRobinSapan/'
              className='ml-4 mr-6'>
              <Image
                src={linkedin}
                height={20}
                alt='Link to John LinkedIn'
                className='dark:invert'
              />
            </Link>
            <Link
              href='https://www.github.com/JohnRobinSapan'
              className='mr-6'>
              <Image
                src={github}
                height={20}
                alt="Link to John's Github"
                className='dark:invert'
              />
            </Link>
          </div>
        </div>
      </nav >
    </div >
  );
}
