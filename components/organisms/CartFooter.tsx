import useCartStore from '@/store/useCartStore';

export default function CartFooter() {
    const { items, clearCart, toggleModal } = useCartStore();
    const total = items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );
    return (
        <div className="p-4 border-t space-y-3">
            <div className="flex justify-between text-sm text-gray-600">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-medium text-base">
                <span className="text-gray-800">Total</span>
                <span className="text-green-600">${total.toFixed(2)}</span>
            </div>

            <button
                onClick={toggleModal}
                className="w-full bg-green-600 hover:bg-green-700
                               text-white py-3 rounded-xl font-medium
                               transition-colors hover:cursor-pointer"
            >
                Checkout
            </button>

            <button
                onClick={clearCart}
                className="w-full text-sm  text-red-400 hover:text-red-600
                         transition-colors hover:cursor-pointer"
            >
                Clear cart
            </button>
        </div>
    );
}
