export type Product = {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  category: 'Câmeras' | 'Lentes' | 'Acessórios' | 'Iluminação';
  imageUrl: string;
  inStock: boolean;
  dataAiHint: string;
};

export const products: Product[] = [
  {
    id: '1',
    name: 'Câmera Mirrorless Alpha',
    description: 'Câmera de última geração com sensor full-frame.',
    longDescription: 'A Câmera Mirrorless Alpha redefine a fotografia com seu sensor full-frame de 42.4MP, gravação de vídeo 4K e um sistema de autofoco híbrido rápido. Ideal para profissionais e entusiastas que buscam a mais alta qualidade de imagem.',
    price: 9899.90,
    category: 'Câmeras',
    imageUrl: 'https://placehold.co/600x400',
    inStock: true,
    dataAiHint: 'mirrorless camera',
  },
  {
    id: '2',
    name: 'Lente Prime 50mm f/1.8',
    description: 'Lente clara e versátil, perfeita para retratos.',
    longDescription: 'Com uma abertura máxima de f/1.8, esta lente prime de 50mm é perfeita para retratos e fotografia em baixa luz, oferecendo um belo efeito bokeh e nitidez excepcional. Um item essencial na bolsa de qualquer fotógrafo.',
    price: 1250.00,
    category: 'Lentes',
    imageUrl: 'https://placehold.co/600x400',
    inStock: true,
    dataAiHint: 'camera lens',
  },
  {
    id: '3',
    name: 'Tripé de Viagem Profissional',
    description: 'Leve, compacto e estável para qualquer terreno.',
    longDescription: 'Este tripé de fibra de carbono é a combinação perfeita de portabilidade e estabilidade. Pesa apenas 1.2kg e suporta até 8kg de equipamento. Perfeito para fotógrafos de paisagem e viajantes.',
    price: 899.99,
    category: 'Acessórios',
    imageUrl: 'https://placehold.co/600x400',
    inStock: false,
    dataAiHint: 'camera tripod',
  },
  {
    id: '4',
    name: 'Painel de LED Bi-Color',
    description: 'Iluminação contínua com ajuste de temperatura.',
    longDescription: 'Controle total sobre sua iluminação com este painel de LED bi-color. Ajuste a temperatura de cor de 3200K a 5600K e a intensidade de 0 a 100%. Ideal para vídeos, entrevistas e fotografia de produto.',
    price: 650.50,
    category: 'Iluminação',
    imageUrl: 'https://placehold.co/600x400',
    inStock: true,
    dataAiHint: 'led panel',
  },
  {
    id: '5',
    name: 'Câmera DSLR EOS Master',
    description: 'Robustez e confiança para fotografia de ação.',
    longDescription: 'A DSLR EOS Master é construída para durar e capturar momentos decisivos. Com 20.2MP, disparo contínuo de 10fps e um sistema de AF de 65 pontos, é a escolha dos profissionais para esportes e vida selvagem.',
    price: 8500.00,
    category: 'Câmeras',
    imageUrl: 'https://placehold.co/600x400',
    inStock: true,
    dataAiHint: 'dslr camera',
  },
  {
    id: '6',
    name: 'Lente Zoom 24-70mm f/2.8',
    description: 'A lente zoom padrão para profissionais.',
    longDescription: 'Cobrindo uma faixa versátil de grande angular a telefoto curta, a 24-70mm f/2.8 é a lente de trabalho de muitos fotógrafos. Sua abertura constante de f/2.8 oferece excelente desempenho em diversas condições de iluminação.',
    price: 7800.00,
    category: 'Lentes',
    imageUrl: 'https://placehold.co/600x400',
    inStock: true,
    dataAiHint: 'zoom lens',
  },
  {
    id: '7',
    name: 'Mochila para Câmera Pro',
    description: 'Proteja e organize seu equipamento em movimento.',
    longDescription: 'Esta mochila foi projetada para fotógrafos que viajam. Com compartimentos personalizáveis, acesso rápido ao equipamento, capa de chuva integrada e espaço para um laptop de 15 polegadas, é a companheira de viagem ideal.',
    price: 750.00,
    category: 'Acessórios',
    imageUrl: 'https://placehold.co/600x400',
    inStock: true,
    dataAiHint: 'camera bag',
  },
  {
    id: '8',
    name: 'Softbox Octagonal com Grid',
    description: 'Luz suave e controlada para estúdio.',
    longDescription: 'Crie uma iluminação suave e envolvente com este softbox octagonal de 95cm. O grid incluído oferece maior controle sobre a dispersão da luz, perfeito para retratos e moda em estúdio.',
    price: 499.90,
    category: 'Iluminação',
    imageUrl: 'https://placehold.co/600x400',
    inStock: false,
    dataAiHint: 'studio softbox',
  },
];

export const getProducts = (category?: string): Product[] => {
  if (category && category !== 'Todos') {
    return products.filter((p) => p.category === category);
  }
  return products;
};

export const getProductById = (id: string): Product | undefined => {
  return products.find((p) => p.id === id);
};

export const getCategories = (): string[] => {
  return ['Todos', ...Array.from(new Set(products.map((p) => p.category)))];
};
