'use client'
import Link from 'next/link';
import Image from 'next/image';
import ScrollSpy from "react-ui-scrollspy";
import SideNav from './components/sidenav';
import Timeline from './components/timeline';
import Skill from './components/skill';
import ContactForm from './components/contact-form'
import { aboutMe, skills, experiences, certifications, interests } from './db/place-holder';
import logo from './logo.jpg'
import sheridan from 'public/images/home/sheridan_background.webp'

const sideNavItems = {
  'Summary': { href: 'summary' },
  'Experience & Education': { href: 'experience-education' },
  'Skills': { href: 'skills' },
  'Certifications': { href: 'certifications' },
  // 'Languages & Frameworks': { href: 'languages-frameworks' },
  'Interests': { href: 'interests' },
  'Contact': { href: 'contact' }
};


export default function Page() {
  return (
    <section >


      <div className='flex flex-row'>
        <SideNav {...sideNavItems} />

        <div className="prose prose-neutral dark:prose-invert flex-1 max-w-none">
          <ScrollSpy useBoxMethod={false} scrollThrottle={100} >

            <div id='summary' className='flex flex-col justify-center'>
              <div className='flex flex-1  flex-row items-center'>
                <div className='flex flex-1 justify-center'>
                  <Image
                    src={logo}
                    width={400}
                    height={400}
                    className="hidden md:block "
                    alt={'Picture of ' + aboutMe.name}
                  />
                </div>
                <div className='flex-1'>
                  <h1 className="text-6xl">{aboutMe.name}</h1>
                  <h2 className='text-2xl'>{aboutMe.title}</h2>
                  <Link href='#contact'
                    className="px-3 py-2 border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 mb-8">
                    Contact
                  </Link>
                </div>
              </div>
              <div className='flex flex-col flex-1 items-center'>
                <h2>
                  About Me
                </h2>
                <p className="prose-default">
                  {aboutMe.desc}
                </p>
              </div>
            </div>

            <div id='experience-education'>
              <div className='flex xl:flex-row md:flex-col'>
                <div className='flex-initial w-[33.33vw] items-center'>
                  <h1>
                    Experience & Education
                  </h1>
                  <Image
                    src={sheridan}
                    width={400}
                    height={400}
                    className="hidden md:block rounded-lg object-cover w-full h-auto"
                    alt="Picture of Sheridan College"
                  />
                </div>
                <div className='flex-1'>
                  {experiences.map((experience, index) => {
                    return (
                      <div key={index}>
                        <Timeline {...experience} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div id='skills' >
              <div>
                <h1>Skills</h1>
                {skills.map((skill, index) => {
                  return (
                    <div key={index}>
                      <Skill  {...skill} />
                    </div>
                  );
                })}
              </div>
            </div>

            <div id='certifications' >
              <div>
                {certifications.map((cert, index) => {
                  return (
                    <li key={index}>
                      {cert}
                    </li>
                  );
                })}
              </div>
            </div>

            <div id='interests' >
              <div>
                {interests.map((interest, index) => {
                  return (
                    <li key={index}>
                      {interest}
                    </li>
                  );
                })}

              </div>
            </div>

            <div id='contact'>
              <div className='w-full max-w-2xl mx-auto'>
                <h1>Contact {aboutMe.name}</h1>
                <ContactForm />
              </div>
            </div>
          </ScrollSpy>
        </div>
      </div>
    </section >
  );
}
