import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16 relative overflow-hidden">
            <p className="font-mono text-[96px] font-medium text-green-200 leading-none tracking-[-4px] select-none">
                404
            </p>

            <div className="mb-5 mt-2">
                <ShoppingCart
                    size={80}
                    strokeWidth={1}
                    className="text-green-500"
                />
            </div>

            <h1 className=" text-[28px] font-semibold  mb-2 text-center">
                Page not found
            </h1>
            <p className=" text-base leading-relaxed text-center max-w-sm mb-6">
                Looks like this aisle doesn&apos;t exist. The page may have moved or
                never been stocked.
            </p>

            <Link
                href="/"
                className="h-10 px-6 flex items-center bg-green-700 text-white rounded-lg font-mono text-[13px] hover:bg-green-900 transition-colors"
            >
                Back to Fresh Mart
            </Link>

            <p className="mt-5 font-mono text-[11px] text-center">
                404 · fresh mart · the page you requested could not be found
            </p>
        </div>
    );
}
