import Link from "next/link";



export default function SideNav(navItems: Object) {
    return (
        <aside className="-ml-[8px] mb-16 tracking-tight flex-none">
            <div className="lg:sticky lg:top-24 flex flex-col h-[60vh]">
                <div className="flex flex-1 h-full flex-col px-3 py-4 md:px-2 justify-center">
                    {Object.entries(navItems).map(([path, { href }]) => {
                        return (
                            <Link
                                key={href}
                                data-to-scrollspy-id={href}
                                href={`#${href}`}
                                className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2">
                                {path}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </aside>
    );
}
