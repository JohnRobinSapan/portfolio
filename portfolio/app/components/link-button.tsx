import Link from "next/link";


export default function LinkButton({ href, children }) {
    return (
        <Link href={href}
            className="mr-4 shadow bg-purple-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded hover:bg-purple-400">
            {children}
        </Link>
    );
}