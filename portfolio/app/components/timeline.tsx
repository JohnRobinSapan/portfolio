interface TimelineItem {
  date: string;
  company: string;
  position: string;
  experience: string[];
}



export default function Timeline({ TimelineItem }) {

  return (
    <div className='flex flex-row'>
      <div className='flex-1 text-center'>
        <h3>
          {TimelineItem.date}
        </h3>
      </div>
      <div className='flex-1'>
        <div className='max-w-prose'>
          <h3>
            {TimelineItem.company}
          </h3>
          <h4>
            {TimelineItem.position}
          </h4>
          <ul>
            {TimelineItem.experience.map((item) => {
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