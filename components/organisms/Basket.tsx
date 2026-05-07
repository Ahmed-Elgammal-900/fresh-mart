'use client';
import Image from 'next/image';
import ShoppingBasket from '../../public/shopping basket.png';
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
                src={ShoppingBasket}
                alt="shopping-basket"
                loading="eager"
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
