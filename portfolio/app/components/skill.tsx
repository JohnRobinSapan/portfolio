import chevron from 'public/chevron-down.svg'
import Image from 'next/image';

type Skill = {
    type: string
    list: string[]
};


export default function Skills(skill: Skill) {
    const { type, list } = skill;
    return (
        <ul className='list-none border-l border-neutral-100 dark:border-neutral-800 my-0'>
            <li className='my-0 pt-5 px-0'>
                <div className='inline-block -m-1.5 -ml-3 pr-3'>
                    <Image
                        src={chevron}
                        width={24}
                        height={24}
                        alt=''
                    />
                </div>
                {type}
            </li>
            <ul className='list-none border-l border-neutral-100 dark:border-neutral-700 my-0'>
                {list.map((item, index) => {
                    return (
                        <li className='my-0' key={item}>
                            {item}
                        </li>
                    );
                })}
            </ul>
        </ul>
    );
}