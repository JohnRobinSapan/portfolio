import Link from "next/link";

export default function SideNav(navItems: Object) {
    return (
        <aside className="fixed hidden lg:flex tracking-tight h-full">
            <div className="absolute top-1/3 left-0 whitespace-nowrap">
                {Object.entries(navItems).map(([path, { href }]) => {
                    return (
                        <Link
                            key={href}
                            data-to-scrollspy-id={href}
                            href={`#${href}`}
                            className="nav-link ring-1 ring-black/5 shadow-lg transition-all rounded-2xl hover:text-neutral-200 flex  my-1 py-1 px-2">
                            {path}
                        </Link>
                    );
                })}
            </div>
        </aside>
    );
}
