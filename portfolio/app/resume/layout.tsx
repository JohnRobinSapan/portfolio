import { Navbar } from 'app/components/nav';

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <div className='2xl:fixed mb-2'>
                <Navbar />
            </div>
            <main>
                {children}
            </main>
        </div>
    );
}