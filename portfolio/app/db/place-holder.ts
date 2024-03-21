const aboutMe = {
    name: 'John Robin Sapan',
    title: 'Software Engineer',
    email: process.env.SMTP_EMAIL,
    phone: '1 (437)-989-8315',
    desc: `I am a skilled developer in C#, Java, SQL, ASP.NET, HTML5, CSS, and JavaScript,
with expertise in software design patterns. Proficient in deploying
applications on web servers, utilizing version control, and
developing/consuming REST APIs. Adept at troubleshooting hardware
and software issues, passionate about continuous learning, and effective
in collaborative cross-functional teams.`};

const skills = [
    {
        type: 'Programming Languages',
        list: [
            'C# (Experienced)',
            'JavaScript (Experienced)',
            'Python (Intermediate)',
        ]
    },
    {
        type: 'Frontend Development',
        list: [
            'React, Redux',
            'HTML5, CSS3, Tailwind CSS',
        ]
    },
    {
        type: 'Backend Development',
        list: [
            'Node.js, Express, ASP .NET Core',
            'REST API',
            'Database design and development',
        ]
    },
    {
        type: 'DevOps and Cloud Services',
        list: [
            'Docker, Kubernetes',
            'Azure, GitHub Actions',
        ]
    },
    {
        type: 'Tools and Platforms',
        list: [
            'Git, GitHub',
            'Trello, VSCode',
        ]
    },
    {
        type: 'Soft Skills',
        list: [
            'Effective Communication',
            'Teamwork and Collaboration',
            'Problem - solving'
        ]
    }
];


const experiences = [
    {
        date: { start: 'March 2022', end: 'March 2023' },
        company: 'TD Canada Trust, Mississauga',
        position: 'Operations Officer',
        experience: [
            `Performed specialized tasks relating to credit maintenance while
      operating within the business’ credit risk appetite and regulatory
      framework.`,
            `Participated in team meetings, providing feedback on performance
      management.
      `,
            `Communicated effectively and exercised due diligence with business
      partners from retail and sales channels, external solicitors, and other
      financial institutions`
        ]
    },
    {
        date: { start: 'January 2019', end: 'January 2020' },
        company: 'Ricoh Canada, Mississauga',
        position: 'Co-op Application Developer  ',
        experience: [
            `Worked primarily in Salesforce development, developing cloud services to automate business processes and integrate external applications.`,
            `Deployed microservices on Microsoft’s .NET platform to replace licensed services for document generation.`,
            `Participated in daily stand-ups and weekly reviews and demonstrations.`
        ]
    },
    {
        date: { start: 'January 2017', end: 'June 2020' },
        company: 'Sheridan College, Brampton',
        position: 'Computer Systems Technician - Software Engineering',
        experience: [
            `Completed the 3-year program - GPA 3.47/4.0`
        ]
    }];

const certifications = [
    {
        type: 'Microsoft Certifications',
        list: [
            'AZ-900 - Microsoft Certified: Azure Fundamentals',
            'Develop an ASP.NET Core web app that consumes an API',
        ],
    },
];

const interests = [
    `Enthusiastic about staying
    current with and adopting the
    latest technologies, languages,
    and frameworks in computer and
    information technology.
    `];
export { aboutMe, skills, experiences, certifications, interests };
