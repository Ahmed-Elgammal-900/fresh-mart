export default function ProductsShowSkeleton() {
    return (
        <div className="grid relative grid-cols-3 gap-x-30 gap-y-20">
            {Array.from({ length: 9 }).map((_, index) => (
                <div
                    className="size-40 select-none relative transition-transform rounded-lg p-5 border flex flex-col items-center hover:cursor-grab active:cursor-grabbing bg-amber-600"
                    key={index}
                >
                    <div className="w-full h-full bg-gray-200 opacity-70 animate-pulse rounded-lg" />
                </div>
            ))}
        </div>
    );
}
