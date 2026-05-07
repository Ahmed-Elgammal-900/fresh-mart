'use client';
import { createContext, useRef } from 'react';

export const CartRefContext = createContext<
    React.RefObject<HTMLDivElement | null>
>({
    current: null,
});

export function CartRefProvider({ children }: { children: React.ReactNode }) {
    const cartRef = useRef<HTMLDivElement | null>(null);

    return (
        <CartRefContext.Provider value={cartRef}>
            {children}
        </CartRefContext.Provider>
    );
}
