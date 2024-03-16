import Link from "next/link";


export default function LinkButton({ href, children, className, target, rel }: { href: string, children: React.ReactNode, className?, target?, rel?}) {
    return (
        <Link href={href}
            target={target}
            rel={rel}
            className={`my-2 shadow bg-purple-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded hover:bg-purple-400 ${className}`}>
            {children}
        </Link>
    );
}