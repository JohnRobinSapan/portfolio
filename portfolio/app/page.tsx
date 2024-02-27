'use client'
import SideNav from './components/sidenav';
import ScrollSpy from "react-ui-scrollspy";
import Image from 'next/image';
import type { Metadata } from 'next';


const navItems = {
  'Summary': { href: 'summary' },
  'Experience': { href: 'experience' },
  'Education': { href: 'education' },
  'Skills': { href: 'skills' },
  'Certifications': { href: 'certifications' },
  'Languages & Frameworks': { href: 'languages-frameworks' },
  'Interests': { href: 'interests' }
};




export default function Page() {


  return (
    <section >
      <div className='flex flex-row items-center '>
        <div className='flex-1'>
          <Image
            src="/opengraph-image.jpg "
            width={400}
            height={400}
            className="hidden md:block"
            alt="Picture of John Robin Sapan"
          />
        </div>
        <div className='prosedark:prose-invert flex-1'>
          <h1 className="text-6xl">John Robin Sapan</h1>
          <h2 className='text-2xl'>Software Engineer</h2>
        </div>
      </div>
      <div className='flex flex-row'>
        <SideNav {...navItems} />
        <div className="prose prose-neutral dark:prose-invert">
          <ScrollSpy useBoxMethod={false} scrollThrottle={100} >
            <div id='summary'>
              <span>
                <h2>
                  About Me
                </h2>
                I am a skilled developer in C#, Java, SQL, ASP.NET, HTML5, CSS, and JavaScript,
                with expertise in software design patterns. Proficient in deploying
                applications on web servers, utilizing version control, and
                developing/consuming REST APIs. Adept at troubleshooting hardware
                and software issues, passionate about continuous learning, and effective
                in collaborative cross-functional teams.
              </span>
            </div>
            <div id='experience' >
              <span>
                TD Canada Trust, Mississauga— Operations Officer
                March 2022 - March 2023
                Performed specialized tasks relating to credit maintenance while
                operating within the business’ credit risk appetite and regulatory
                framework.
                ● Participated in team meetings, providing feedback on performance
                management.
                ● Communicated effectively and exercised due diligence with business
                partners from retail and sales channels, external solicitors, and other
                financial institutions.
                Ricoh Canada, Mississauga— Co-op Application Developer
                January 2019 - January 2020
                Worked primarily in Salesforce development, developing cloud services to
                automate business processes and integrate external applications.
                ● Deployed microservices on Microsoft’s .NET platform to replace licensed
                services for document generation.
                ● Participated in daily stand-ups and weekly reviews and demonstrations.
              </span>
            </div>

            <div id='education' >
              <span>
                Sheridan College, Brampton — Software Engineering
                January 2017 - June 2020
                Completed the 3-year program - GPA 3.47/4.0
              </span>
            </div>

            <div id='skills' >
              <span>
                DevOps (Docker, Git)
                Web Services & API (REST API)
                MVC frameworks (ASP.NET)
                Full stack development
                Database design and development
              </span>
            </div>

            <div id='certifications' >
              <span>AZ-900 - Microsoft Certified:
                Azure Fundamentals
                Develop an ASP.NET Core web
                app that consumes an API
              </span>
            </div>

            <div id='languages-frameworks' >
              <span>C#
                Java
                Javascript (React, Angular, Vue.js)
                Python
                HTML5 & CSS
                SQL & NoSQL
              </span>
            </div>

            <div id='interests' >
              <span>Enthusiastic about staying
                current with and adopting the
                latest technologies, languages,
                and frameworks in computer and
                information technology.
              </span>
            </div>
          </ScrollSpy>
        </div>
      </div>
    </section >
  );
}
