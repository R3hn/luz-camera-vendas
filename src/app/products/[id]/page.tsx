import { getProductById } from '@/lib/products';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

type ProductPageProps = {
  params: {
    id: string;
  };
};

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductById(params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-background">
      <div className="container mx-auto max-w-5xl px-4 py-8 md:px-6 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="sticky top-24">
            <div className="relative aspect-square w-full overflow-hidden rounded-lg shadow-lg border">
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                className="object-cover"
                data-ai-hint={product.dataAiHint}
              />
            </div>
          </div>

          <div className="flex flex-col">
            <p className="text-sm font-bold tracking-wider text-muted-foreground mb-2">{product.category.toUpperCase()}</p>
            <h1 className="font-headline text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
            
            <p className="text-3xl font-bold text-primary mb-6">
              {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}
            </p>

            <p className="text-lg text-foreground/80 max-w-none mb-8 leading-relaxed">
              {product.longDescription}
            </p>

            <div className="flex items-center gap-4">
              <Button size="lg" disabled={!product.inStock} className="flex-1 sm:flex-none">
                <ShoppingCart className="mr-2 h-5 w-5" />
                {product.inStock ? 'Adicionar ao carrinho' : 'Indisponível'}
              </Button>
              <Badge variant={product.inStock ? 'default' : 'secondary'} className="py-2 px-4 text-sm">
                {product.inStock ? 'Em Estoque' : 'Esgotado'}
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
