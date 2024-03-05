type Skill = {
    type: string
    list: string[]
};

export default function Skills(skill: Skill) {
    const { type, list } = skill;
    return (
        <div>
            <h2>
                {type}
            </h2>
            <ul>
                {list.map((item, index) => {
                    return (
                        <li key={item}>
                            {item}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}