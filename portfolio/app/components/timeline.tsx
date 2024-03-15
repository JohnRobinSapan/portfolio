interface TimelineItem {
  date: string
  company: string
  position: string
  experience: string[]
}



export default function Timeline(timelineItem: TimelineItem) {
  const { date, company, position, experience } = timelineItem;

  return (
    <div className='md:flex flex-row'>
      <div className='flex-none w-80 md:text-center hidden md:block'>
        <h3>
          {date}
        </h3>
      </div>
      <div className='flex-1'>
        <div className='max-w-prose'>
          <h3>
            {company}
          </h3>
          <h3 className='md:hidden'>
            {date}
          </h3>
          <h4>
            {position}
          </h4>
          <ul>
            {experience.map((item) => {
              return (
                <li key={item}>
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}