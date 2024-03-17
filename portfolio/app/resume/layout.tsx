import { Navbar } from 'app/components/nav';

  
export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <main>
                {children}
            </main>
        </div>
    );
}