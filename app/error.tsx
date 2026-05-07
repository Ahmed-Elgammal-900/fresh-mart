'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import { AlertCircle } from 'lucide-react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16 relative overflow-hidden">
            <p className="font-mono text-[96px] font-medium text-green-200 leading-none tracking-[-4px] select-none">
                500
            </p>

            <div className="size-18 rounded-full mt-8 bg-green-50 border border-green-300 flex items-center justify-center mb-5">
                <AlertCircle
                    size={32}
                    strokeWidth={1.5}
                    className="text-green-500"
                />
            </div>

            <h1 className="text-[28px] font-semibold mb-2 text-center">
                Something went wrong
            </h1>
            <p className="text-base leading-relaxed text-center max-w-sm mb-7">
                The server hit an unexpected snag. It&apos;s on us — not you. We&apos;ve
                been notified and are looking into it.
            </p>

            <div className="flex gap-3">
                <button
                    onClick={reset}
                    className="h-10 px-5 bg-green-700 rounded-lg font-mono text-sm hover:bg-green-800 transition-colors"
                >
                    Try again
                </button>
                <Link
                    href="/"
                    className="h-10 px-5 flex items-center text-green-300 border border-green-300 rounded-lg font-mono text-sm hover:bg-green-50 hover:text-green-700 transition-colors"
                >
                    Go home
                </Link>
            </div>

            {error.digest && (
                <p className="mt-6 font-mono text-[11px] text-green-100 text-center">
                    error_id: {error.digest} · fresh mart
                </p>
            )}
        </div>
    );
}
