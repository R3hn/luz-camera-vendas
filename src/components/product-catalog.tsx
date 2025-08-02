'use client';

import { useState } from 'react';
import type { Product } from '@/lib/products';
import { getCategories, getProducts } from '@/lib/products';
import { ProductCard } from './product-card';
import { Button } from '@/components/ui/button';

export function ProductCatalog() {
  const allProducts = getProducts();
  const categories = getCategories();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(allProducts);
  const [activeCategory, setActiveCategory] = useState<string>('Todos');

  const handleFilter = (category: string) => {
    setActiveCategory(category);
    setFilteredProducts(getProducts(category));
  };

  return (
    <div className="container mx-auto px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col items-center text-center mb-8">
        <h1 className="font-headline text-3xl md:text-4xl font-bold mb-2">Nosso Catálogo</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Explore nossa seleção de equipamentos de alta qualidade para fotógrafos e videomakers.
        </p>
      </div>

      <div className="flex justify-center flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? 'default' : 'outline'}
            onClick={() => handleFilter(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-muted-foreground text-lg">Nenhum produto encontrado para esta categoria.</p>
        </div>
      )}
    </div>
  );
}
