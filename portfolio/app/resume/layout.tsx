
export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className='h-screen'>
            <main className="flex-auto min-w-0 mt-12">
                {children}
            </main>
        </div>
    );
}