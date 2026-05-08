import postgres from 'postgres';
import { Product } from './definition';

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
    throw new Error('DATABASE_URL is not set');
}

const sql = postgres(databaseUrl, { ssl: 'require' });

export async function fetchProducts(): Promise<Product[]> {
    try {
        const products = await sql<Product[]>`SELECT * FROM products`;
        return products;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch products');
    }
}
