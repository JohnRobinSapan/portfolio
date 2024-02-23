


export default function SideNav(navItems: Object) {
    return (
        <aside className="-ml-[8px] mb-16 tracking-tight mt-36">
            <div className="lg:sticky lg:top-20">
                <div className="flex h-full flex-col px-3 py-4 md:px-2">
                    {Object.entries(navItems).map(([path, { href }]) => {
                        return (
                            <div
                                key={href}
                                className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 ">
                                {path}
                            </div>
                        );
                    })}
                </div>
            </div>
        </aside>
    );
}
