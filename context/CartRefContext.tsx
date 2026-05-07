'use client';
import { createContext, useRef, type RefObject, type ReactNode } from 'react';

export const CartRefContext = createContext<RefObject<HTMLDivElement | null>>({
    current: null,
});

export function CartRefProvider({ children }: { children: ReactNode }) {
    const cartRef = useRef<HTMLDivElement | null>(null);

    return (
        <CartRefContext.Provider value={cartRef}>
            {children}
        </CartRefContext.Provider>
    );
}
