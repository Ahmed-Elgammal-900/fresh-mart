import NotAllowedScreen from '@/components/molecules/NotAllowedScreen';
import ProductsShowSkeleton from '@/components/molecules/ProductsShowSkeleton';
import Basket from '@/components/organisms/Basket';
import ProductsShow from '@/components/organisms/ProductsShow';
import { CartRefProvider } from '@/context/CartRefContext';
import { Suspense } from 'react';

export default function Home() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center">
            <main className="flex flex-1 w-full max-w-full justify-between px-7 py-32 md:px-16 items-center">
                <div className="hidden xl:flex flex-1 w-full max-w-full justify-between items-center">
                    <CartRefProvider>
                        <Suspense fallback={<ProductsShowSkeleton />}>
                            <ProductsShow />
                        </Suspense>
                        <Basket />
                    </CartRefProvider>
                </div>
                <NotAllowedScreen />
            </main>
        </div>
    );
}
