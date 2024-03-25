interface TimelineItem {
  date: { start: string, end: string }
  company: string
  position: string
  experience: string[]
}

export default function Timeline(timelineItem: TimelineItem) {
  const { date, company, position, experience } = timelineItem;

  return (
    <div className='relative group'>
      <svg viewBox="0 0 9 9" className="hidden absolute right-full mr-6 top-3 text-slate-600 dark:text-slate-200 md:mr-12 w-[calc(0.5rem+1px)] h-[calc(0.5rem+1px)] overflow-visible sm:block"><circle cx="4.5" cy="4.5" r="4.5" stroke="currentColor" className="fill-white dark:fill-slate-900" strokeWidth="2"></circle></svg>
      <div className='relative text-black dark:text-white'>
        <h2 className="text-xl">
          {company}
        </h2>
        <h3 className="lg:hidden text-lg">
          {date.start} - {date.end}
        </h3>
        <h3 className="text-lg">
          {position}
        </h3>
        <ul className='list-none p-0 '>
          {experience.map((item) => {
            return (
              <li key={item} className="mt-2 mb-4 p-0 whitespace-wrap">
                {item}
              </li>
            );
          })}
        </ul>
        <div className='hidden lg:block'>
          <p className="absolute not-prose top-0 right-full mr-[calc(6.5rem+1px)] whitespace-nowrap text-center">
            {date.start}<br />
            {date.end}
          </p>
        </div>
      </div>
    </div>
  );
}