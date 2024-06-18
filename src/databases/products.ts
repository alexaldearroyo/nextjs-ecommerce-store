// src/databases/products.ts

import { sql } from '../utils/connect';

export async function getProducts() {
  return await sql`
    SELECT id, name, type, description, price, shader_path AS "shaderPath" FROM products
  `;
}

export async function getProductById(id) {
  const [product] = await sql`
    SELECT id, name, type, description, price, shader_path AS "shaderPath" FROM products WHERE id = ${id}
  `;
  return product;
}