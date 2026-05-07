import { fetchProducts } from '@/lib/data';
import ProductCard from './ProductCard';

export default async function ProductsShow() {
    const products = await fetchProducts();
    return (
        <div className="grid relative grid-cols-3 gap-x-30 gap-y-20">
            {products.map(({ id, name, price, image }) => (
                <ProductCard key={id} {...{ id, name, price, image }} />
            ))}
        </div>
    );
}
