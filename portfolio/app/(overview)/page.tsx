import Image from 'next/image';
import SideNav from 'app/components/sidenav';
import Sections from '@/app/components/sections';
import Timeline from 'app/components/timeline';
import Skill from 'app/components/skill';
import ContactForm from 'app/components/contact-form'
import LinkButton from 'app/components/link-button'
import {
  aboutMe,
  skills,
  experiences,
  certifications,
  // interests,
} from 'app/db/place-holder';
import logo from 'public/logo.jpg'


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
    <section>
      <div className='flex flex-row'>
        <SideNav {...sideNavItems} />


        {/* TODO: Add pictures of myself
              Add art/pictures/graphics
              COMPLETED: Add resume download/view
              Add loading animation/transition
            */}
        <div className="prose dark:prose-invert flex-1 lg:ml-56 max-w-none">
          <Sections>
            <div id='summary'>
              <div className='flex flex-1 flex-row items-center'>
                <div className='flex flex-1 justify-center max-md:hidden'>
                  <Image
                    priority
                    src={logo}
                    width={400}
                    height={400}
                    alt={'Picture of ' + aboutMe.name}
                    className="rounded-full shadow-2xl"
                  />
                </div>
                <div className='flex-1'>
                  <h1 className="md:text-6xl">{aboutMe.name}</h1>
                  <h2 className='text-2xl'>{aboutMe.title}</h2>
                  <div className='flex'>
                    <LinkButton href='/resume' className='mr-4'>
                      View Resume
                    </LinkButton>
                    <LinkButton href='#contact'>
                      Contact
                    </LinkButton>

                  </div>
                </div>
              </div>
              <div className='flex flex-col flex-1 items-center'>
                <div className="rounded-3xl shadow-lg ring ring-black/5 text-center">
                  <h2>About Me</h2>
                  <p className="prose dark:prose-invert">{aboutMe.desc}</p>
                </div>
              </div>
              <hr className="hr" />
            </div>


            {/* TODO: Add graphics
              - Vertical line
              - Fix image
            */}
            <div id='experience-education' >
              <div className='mt-auto'>
                <h1 className="text-center">
                  Experience & Education
                </h1>
                <div className='bg-education bg bg-fixed bg-no-repeat bg-center rounded-3xl max-sm:-mx-2'>
                  <div className='backdrop-blur-sm bg-white/60 dark:bg-black/60 rounded-3xl py-2'>
                    <div className='relative sm:ml-[calc(2rem+1px)] md:ml-[calc(3.5rem+1px)] lg:ml-[max(calc(14.5rem+1px),calc(100%-48rem))]'>
                      <div className='max-sm:mx-2'>
                        <div className="hidden absolute top-3 bottom-0 right-full mr-7 md:mr-[3.25rem] w-px bg-slate-800 dark:bg-slate-200 sm:block "></div>
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
                <h1 className='max-sm:text-3xl text-center'>Contact {aboutMe.name}</h1>
                <ContactForm />
              </div>
            </div>
          </Sections>
        </div>
      </div>
    </section>
  );
}
