'use client';
import Image from 'next/image';
import useCartStore from '@/store/useCartStore';
import { useCartRef } from '@/hooks/useCartRef';

export default function Basket() {
    const { items } = useCartStore();
    const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
    const cartRef = useCartRef();
    const hasHydrated = useCartStore((s) => s._hasHydrated);

    return (
        <div ref={cartRef} className="relative">
            <Image
                className="size-100"
                src="/shopping-basket.png"
                alt="shopping-basket"
                loading="eager"
                width={400}
                height={400}
            />

            <span
                className="absolute translate-x-1/2 top-[65.5%] right-1/2 translate-0.5 bg-red-600 text-white
                           text-lg rounded-full size-12 flex items-center
                           justify-center font-medium p-2"
            >
                {hasHydrated ? (
                    totalItems
                ) : (
                    <div className="size-full rounded-full animate-pulse bg-gray-200 opacity-70" />
                )}
            </span>
        </div>
    );
}
