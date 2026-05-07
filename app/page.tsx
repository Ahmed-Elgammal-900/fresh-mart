import NotAllowedScreen from '@/components/molecules/NotAllowedScreen';

export default function Home() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center">
            <main className="flex flex-1 w-full max-w-full justify-between px-7 py-32 md:px-16 items-center">
                <div className="hidden xl:flex flex-1 w-full max-w-full justify-between items-center"></div>
                <NotAllowedScreen />
            </main>
        </div>
    );
}
