import type { Product } from '@/lib/definition';

export type CartItem = {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
};

export interface CartStore {
    items: CartItem[];
    isOpen: boolean;
    isModalOpen: boolean;
    _hasHydrated: boolean;
    addItem: (item: Product) => void;
    removeItem: (id: string) => void;
    updateQty: (id: string, qty: number) => void;
    clearCart: () => void;
    toggleCart: () => void;
    toggleModal: () => void;
    setHasHydrated: (value: boolean) => void;
}
