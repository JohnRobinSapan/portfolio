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
  'Skills & Certifications': { href: 'skills' },
  // 'Certifications': { href: 'certifications' },
  // 'Interests': { href: 'interests' },
  'Contact': { href: 'contact' }
};


export default function Page() {
  return (
    <section >
      <div className='flex flex-row'>
        <SideNav {...sideNavItems} />

        <div className="prose prose-neutral dark:prose-invert flex-1 max-w-none ">
          <ScrollSpy useBoxMethod={false} scrollThrottle={100} >

            {/* TODO: Add pictures of myself
              Add art/pictures/graphics
              Add resume download/view
            */}
            <div id='summary'>
              <div className='flex flex-1 flex-row items-center'>
                <div className='flex flex-1 justify-center max-md:hidden'>
                  <Image
                    src={logo}
                    width={400}
                    height={400}
                    alt={'Picture of ' + aboutMe.name}
                  />
                </div>
                <div className='flex-1'>
                  <h1 className="md:text-6xl">{aboutMe.name}</h1>
                  <h2 className='text-2xl'>{aboutMe.title}</h2>
                  <Link href='#contact'
                    className="shadow bg-purple-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded hover:bg-purple-400">
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
              <hr className="hr" />
            </div>

            {/* TODO: 
            Add graphics
              - Vertical line
              - Fix image
            */}
            <div id='experience-education' >
              <div className='md:flex xl:flex-row md:flex-col'>
                <div>
                  <h1>
                    Experience & Education
                  </h1>
                  <Image
                    src={sheridan}
                    width={400}
                    height={400}
                    className="hidden md:block rounded-lg object-cover w-[33.33vw] h-auto "
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
              <hr className="hr" />
            </div>

            {/* TODO: Finish skills 
              Add art/pictures/graphics

            */}
            <div id='skills'>
              <div className="md:flex mt-auto mb-5">
                <div className='mx-auto'>
                  <h1>Skills</h1>
                  {skills.map((skill, index) => {
                    return (
                      <div key={index}>
                        <Skill  {...skill} />
                      </div>
                    );
                  })}
                </div>
                <div className='mx-auto'>
                  <h1>Certifications</h1>
                  {certifications.map((cert, index) => {
                    return (
                      <div key={index}>
                        <Skill  {...cert} />
                      </div>
                    );
                  })}
                </div>
              </div>
              <hr className="hr" />
            </div>

            {/* TODO: Finish certifications 
                Add art/pictures/graphics

            <div id='certifications' >

              <hr className="hr" />
            </div>
            */}

            {/* TODO: Finish interests 
                Add art/pictures/graphics

            <div id='interests' >
              <div className='my-auto'>
                {interests.map((interest, index) => {
                  return (
                    <li key={index}>
                      {interest}
                    </li>
                  );
                })}

              </div>
              <hr className="hr" />
            </div>
            */}

            {/* TODO: Finish contacts
              Add art/pictures/graphics
              Add GitHub and LinkedIn component
              Prevent bots
                - Captcha
            */}
            <div id='contact'>
              <div className='w-full max-w-2xl mx-auto'>
                <h1 className='max-sm:text-3xl'>Contact {aboutMe.name}</h1>
                <ContactForm />
              </div>
            </div>
          </ScrollSpy>
        </div>
      </div>
    </section >
  );
}
