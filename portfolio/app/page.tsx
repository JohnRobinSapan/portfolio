'use client'
import { useEffect, useState } from 'react';
import SideNav from './components/sidenav';


const navItems = {
  'Summary': { href: '#summary' },
  'Experience': { href: '#experience' },
  'Education': { href: '#education' },
  'Skills': { href: '#skills' },
  'Certifications': { href: '#certifications' },
  'Languages & Frameworks': { href: '#languages-frameworks' },
  'Interests': { href: '#interests' }
};




export default function Page() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = '';
      Object.entries(navItems).map(([path, { href }]) => {
        const section = document.querySelector(href) as HTMLElement;
        const scrollPosition = window.scrollY + window.innerHeight / 2;
        if (section?.offsetTop <= scrollPosition && section?.offsetTop + section.offsetHeight > scrollPosition) {
          currentSection = href;
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='flex flex-row '>
      <SideNav {...navItems} />
      <section>
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">John Robin Sapan</h1>
        <div className=''>
          <p id='summary' className="prose prose-neutral dark:prose-invert">
            Skilled developer in C#, Java, SQL, ASP.NET, HTML5, CSS, and JavaScript,
            with expertise in software design patterns. Proficient in deploying
            applications on web servers, utilizing version control, and
            developing/consuming REST APIs. Adept at troubleshooting hardware
            and software issues, passionate about continuous learning, and effective
            in collaborative cross-functional teams.
          </p>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <p id='experience' >
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
          </p>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <p id='education' >Sheridan College, Brampton — Software Engineering
            January 2017 - June 2020
            Completed the 3-year program - GPA 3.47/4.0</p>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <p id='skills' >DevOps (Docker, Git)
            Web Services & API (REST API)
            MVC frameworks (ASP.NET)
            Full stack development
            Database design and development</p>

          <p id='certifications' >AZ-900 - Microsoft Certified:
            Azure Fundamentals
            Develop an ASP.NET Core web
            app that consumes an API</p>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <p id='languages-frameworks' >C#
            Java
            Javascript (React, Angular, Vue.js)
            Python
            HTML5 & CSS
            SQL & NoSQL</p>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <p id='interests' >Enthusiastic about staying
            current with and adopting the
            latest technologies, languages,
            and frameworks in computer and
            information technology.</p>
        </div>

      </section>
    </div >

  );
}
