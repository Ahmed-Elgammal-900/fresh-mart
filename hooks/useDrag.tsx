'use client';

import { Product } from '@/lib/definition';
import { RefObject, useCallback, useEffect, useRef } from 'react';

export function useDragToCart(
    cartRef: RefObject<HTMLDivElement | null>,
    onDrop: (item: Product) => void
) {
    const cleanupRef = useRef<(() => void) | null>(null);

    useEffect(() => {
        return () => cleanupRef.current?.();
    }, []);

    const startDrag = useCallback(
        (
            origin: HTMLElement,
            clientX: number,
            clientY: number,
            product: Product
        ) => {
            cleanupRef.current?.();
            const rect = origin.getBoundingClientRect();

            const ghost = origin.cloneNode(true) as HTMLElement;
            Object.assign(ghost.style, {
                position: 'fixed',
                left: `${rect.left}px`,
                top: `${rect.top}px`,
                width: `${rect.width}px`,
                height: `${rect.height}px`,
                pointerEvents: 'none',
                zIndex: '9999',
                transition: 'none',
            });

            document.body.appendChild(ghost);
            origin.style.opacity = '0';

            const offsetX = clientX - rect.left;
            const offsetY = clientY - rect.top;

            const moveGhost = (x: number, y: number) => {
                ghost.style.left = `${x - offsetX}px`;
                ghost.style.top = `${y - offsetY}px`;
            };

            const cleanup = () => {
                ghost.parentNode?.removeChild(ghost);
                origin.style.opacity = '1';
                window.removeEventListener('mousemove', onMouseMove);
                window.removeEventListener('mouseup', onMouseUp);
                window.removeEventListener('touchmove', onTouchMove);
                window.removeEventListener('touchend', onTouchEnd);
                window.removeEventListener('touchcancel', onTouchEnd);
                cleanupRef.current = null;
            };

            const drop = (x: number, y: number) => {
                const cart = cartRef.current;
                if (cart) {
                    const r = cart.getBoundingClientRect();
                    const isInside =
                        x >= r.left &&
                        x <= r.right &&
                        y >= r.top &&
                        y <= r.bottom;
                    if (isInside) onDrop(product);
                }
                cleanup();
            };

            const onMouseMove = (e: MouseEvent) =>
                moveGhost(e.clientX, e.clientY);
            const onMouseUp = (e: MouseEvent) => drop(e.clientX, e.clientY);

            const onTouchMove = (e: TouchEvent) => {
                e.preventDefault();
                const t = e.touches[0];
                moveGhost(t.clientX, t.clientY);
            };

            const onTouchEnd = (e: TouchEvent) => {
                const t = e.changedTouches[0];
                drop(t.clientX, t.clientY);
            };

            cleanupRef.current = cleanup;

            window.addEventListener('mousemove', onMouseMove);
            window.addEventListener('mouseup', onMouseUp);

            window.addEventListener('touchmove', onTouchMove, {
                passive: false,
            });
            window.addEventListener('touchend', onTouchEnd);
            window.addEventListener('touchcancel', onTouchEnd);
        },
        [cartRef, onDrop]
    );

    const onMouseDown = useCallback(
        (e: React.MouseEvent, product: Product) => {
            e.preventDefault();
            startDrag(
                e.currentTarget as HTMLElement,
                e.clientX,
                e.clientY,
                product
            );
        },
        [startDrag]
    );

    const onTouchStart = useCallback(
        (e: React.TouchEvent, product: Product) => {
            const t = e.touches[0];
            startDrag(
                e.currentTarget as HTMLElement,
                t.clientX,
                t.clientY,
                product
            );
        },
        [startDrag]
    );

    return { onMouseDown, onTouchStart };
}
