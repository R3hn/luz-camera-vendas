import Link from 'next/link';
import { Camera, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function AppHeader() {
  return (
    <header className="border-b bg-card/80 backdrop-blur-sm sticky top-0 z-40">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Camera className="h-6 w-6 text-primary" />
          <span className="font-headline text-xl font-bold text-primary">
            Luz, Câmera & Vendas
          </span>
        </Link>
        <nav className="flex items-center gap-2">
          <Button variant="ghost" size="icon" aria-label="Carrinho de compras">
            <ShoppingCart className="h-5 w-5" />
          </Button>
        </nav>
      </div>
    </header>
  );
}
