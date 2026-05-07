import postgres from 'postgres';
import { Product } from './definition';

const sql = postgres(process.env.DATABASE_URL!, { ssl: 'require' });

export async function fetchProducts(): Promise<Product[]> {
    try {
        const products = await sql<Product[]>`SELECT * FROM products`;
        return products;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch products');
    }
}
