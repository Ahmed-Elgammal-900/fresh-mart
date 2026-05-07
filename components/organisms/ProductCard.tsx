'use client';
import { useCartRef } from '@/hooks/useCartRef';
import { useCartSound } from '@/hooks/useCartSound';
import { useDragToCart } from '@/hooks/useDrag';
import type { Product } from '@/lib/definition';
import useCartStore from '@/store/useCartStore';
import Image from 'next/image';

export default function ProductCard({ id, name, price, image }: Product) {
    const cartRef = useCartRef();
    const { play } = useCartSound();

    const { addItem: addToCart } = useCartStore();

    const { onMouseDown, onTouchStart } = useDragToCart(cartRef, (product) => {
        addToCart(product);
        play();
    });
    return (
        <div
            className="size-40 select-none relative transition-transform rounded-lg p-5 border flex flex-col items-center hover:cursor-grab active:cursor-grabbing bg-amber-600"
            onMouseDown={(e) => onMouseDown(e, { id, name, price, image })}
            onTouchStart={(e) => onTouchStart(e, { id, name, price, image })}
            draggable="false"
        >
            <div className="flex flex-col items-center gap-y-1">
                <div className="relative w-24 h-24 shrink-0">
                    <Image
                        alt={`${name}-image`}
                        src={image}
                        fill
                        loading="eager"
                        className="object-contain"
                        sizes="96px"
                    />
                </div>
                <p>${Number(price).toFixed(2)}</p>
            </div>
        </div>
    );
}
