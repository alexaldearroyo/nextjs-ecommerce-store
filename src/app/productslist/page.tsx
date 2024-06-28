import Link from 'next/link';
import Header from '../../components/Header';
import ShaderImage1 from '../../components/ShaderImage1';
import ShaderImage2 from '../../components/ShaderImage2';
import ShaderImage3 from '../../components/ShaderImage3';
import ShaderImage4 from '../../components/ShaderImage4';
import { getProducts } from '../../databases/products';
import { Product } from '../../types/Product';
import React from 'react';
import Image from 'next/image';

export default async function ProductsPage() {
  const products: Product[] = await getProducts();

  return (
    <div>
      <div className="container mx-auto p-6">
        <Header />
        <div className="product-list">
          {products.map((product) => {
            console.log(product.shaderPath); // Agrega esta línea para verificar el valor de shaderPath
            return (
              <Link
                href={`/products/${product.id}`}
                key={product.id}
                data-test-id={`product-${product.id}`}
              >
                <div className="product-card">
                  {product.shaderPath && (
                    <div className="rounded-lg overflow-hidden">
                      {product.shaderPath === 'ShaderImage1' && (
                        <ShaderImage1 width={300} height={300} />
                      )}
                      {product.shaderPath === 'ShaderImage2' && (
                        <ShaderImage2 width={300} height={300} />
                      )}
                      {product.shaderPath === 'ShaderImage3' && (
                        <ShaderImage3 width={300} height={300} />
                      )}
                      {product.shaderPath === 'ShaderImage4' && (
                        <ShaderImage4 width={300} height={300} />
                      )}
                    </div>
                  )}
                  {/* {!product.shaderPath && (
                    <Image
                      src={`/images/product${product.id}.jpg`}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="rounded-lg mb-4"
                    />
                  )} */}
                  <h2>{product.name}</h2>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}