'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import ThemeSwitch from 'app/components/theme-switch';
import Image from 'next/image'
import github from 'public/github-logo.svg'
import linkedin from 'public/linkedin.svg'

const socials = [
  { src: linkedin, href: 'https://www.linkedin.com/in/JohnRobinSapan/', alt: "Link to John's LinkedIn" },
  { src: github, href: 'https://www.github.com/JohnRobinSapan', alt: "Link to John's Github" },
]

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

// COMPLETED: Add theme switcher and social media links/icons
export function Navbar() {
  const pathname = usePathname();

  return (
    <div className='tracking-tight flex-none w-full backdrop-blur border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-gray-100/60 dark:bg-black/60'>
      <nav className="flex flex-row items-center relative md:px-8 px-2 py-2 md:relative max-w-screen-2xl mx-auto" id="nav">
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
        <div className="flex flex-row-reverse items-center w-full select-none">
          <div className='pl-6 max-sm:pr-2 flex'>
            <ThemeSwitch />
          </div>
          <div className="flex items-center border-r border-neutral-300 dark:border-neutral-800 max-[430px]:hidden">
            {socials.map((social, index) => (
              <Link
                key={index}
                href={social.href}
                className='first:ml-4 mr-6'>
                <Image
                  src={social.src}
                  height={20}
                  alt={social.alt}
                  className='dark:invert'
                />
              </Link>
            ))}
          </div>
        </div>
      </nav >
    </div >
  );
}
