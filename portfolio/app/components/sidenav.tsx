import Link from "next/link";



export default function SideNav(navItems: Object) {
    return (
        <aside className="fixed -ml-52 mb-16 tracking-tight flex-none">
            <div className="flex flex-col h-[60vh]">
                <div className="flex flex-1 h-full flex-col justify-center">
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
