import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/lib/products';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`} className="group">
      <Card className="flex h-full flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <CardHeader className="p-0">
          <div className="relative aspect-video w-full">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={product.dataAiHint}
            />
          </div>
        </CardHeader>
        <CardContent className="flex flex-1 flex-col p-4">
          <CardTitle className="font-headline text-lg mb-2">{product.name}</CardTitle>
          <CardDescription className="text-sm">{product.description}</CardDescription>
        </CardContent>
        <CardFooter className="flex items-center justify-between p-4 pt-0">
          <p className="text-lg font-bold text-primary">
            {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}
          </p>
          <Badge variant={product.inStock ? 'default' : 'secondary'}>
            {product.inStock ? 'Em Estoque' : 'Esgotado'}
          </Badge>
        </CardFooter>
      </Card>
    </Link>
  );
}
