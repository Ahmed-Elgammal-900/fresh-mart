import { Laptop } from "lucide-react";

export default function NotAllowedScreen() {
    return (
        <div className="block xl:hidden w-full">
            <div className="max-w-2xl h-53 bg-white flex flex-col justify-center items-center rounded-2xl m-auto">
                <div className="size-15 mb-3 flex justify-center items-center bg-green-700 rounded-full">
                    <Laptop className="size-9" />
                </div>
                <p className="text-green-900 font-semibold">
                    App works only on large screen
                </p>
            </div>
        </div>
    );
}
