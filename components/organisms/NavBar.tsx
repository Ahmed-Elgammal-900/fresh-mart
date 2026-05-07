'use client';
import { ShoppingCart } from 'lucide-react';
import useCartStore from '@/store/useCartStore';

export default function Navbar() {
    const { _hasHydrated: hasHydrated, items, toggleCart } = useCartStore();
    const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
    return (
        <nav className="flex items-center justify-between px-6 py-4 bg-white border-b">
            <h1 className="font-medium text-green-600 text-xl">
                🛒 Fresh Mart
            </h1>

            <button
                onClick={toggleCart}
                className="relative p-2 hidden xl:block hover:bg-green-600 hover:text-white text-green-600 hover:cursor-pointer rounded-lg"
            >
                <ShoppingCart size={24} />

                {hasHydrated ? (
                    totalItems > 0 && (
                        <span
                            className="absolute -top-1 -right-1 bg-green-600 text-white
                           text-xs rounded-full w-5 h-5 flex items-center
                           justify-center font-medium"
                        >
                            {totalItems}
                        </span>
                    )
                ) : (
                    <span
                        className="absolute -top-1 -right-1 bg-green-600 text-white
                           text-xs rounded-full w-5 h-5 flex items-center
                           justify-center font-medium p-1"
                    >
                        <div className="size-full rounded-full animate-pulse bg-gray-200 opacity-70" />
                    </span>
                )}
            </button>
        </nav>
    );
}
