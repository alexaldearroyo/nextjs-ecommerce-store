'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '../../types/Product';
import ShaderImage1 from '../../components/ShaderImage1';
import ShaderImage2 from '../../components/ShaderImage2';
import ShaderImage3 from '../../components/ShaderImage3';
import ShaderImage4 from '../../components/ShaderImage4';

type ProductLinkProps = {
  product: Product;
};

const ProductLink: React.FC<ProductLinkProps> = ({ product }) => {
  return (
    <Link
      href={`/product/${product.id.toString()}`}
      key={product.id}
      data-test-id={`product-${product.id}`}
      className="product-card"
    >
      <div style={{ cursor: 'pointer' }}>
        {product.shaderPath ? (
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
        ) : (
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={300}
            className="rounded-lg mb-4"
          />
        )}
        <h2>{product.name}</h2>
      </div>
    </Link>
  );
};

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Error fetching products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Loading products...</p>
      </div>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="container mx-auto p-6 pt-0">
      <div className="product-list">
        {products.length === 0 ? (
          <p>No products found.</p>
        ) : (
          products.map((product) => (
            <ProductLink product={product} key={product.id} />
          ))
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
