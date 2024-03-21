
export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <main className="flex-auto min-w-0 mt-12 min-h-screen">
                {children}
            </main>
        </div>
    );
}