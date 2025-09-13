import { Injectable } from '@angular/core';
import { Product, ChatMessage, ChatSummary } from './models';

@Injectable({ providedIn: 'root' })
export class MockDataService {
  products: Product[] = [
    {
      id: '1',
      title: 'Crossbody Bag',
      brand: 'DONA',
      priceEGP: 989,
      rating: 4.3,
      ratingCount: 128,
      image:
        'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1200&auto=format&fit=crop',
      badges: ['Best Price', 'Cross Bag'],
      colors: ['#9f7aea', '#fbbf24', '#f87171'],
      stock: 12,
      description: 'Adjustable shoulder strap, magnetic flap, classic buckle.',
    },

    {
      id: '2',
      title: 'Asymmetric Shopper',
      brand: 'AZLAR',
      priceEGP: 1099,
      rating: 4.6,
      ratingCount: 64,
      image:
        'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop',
      badges: ['Trending'],
      description:
        'Spacious shopper bag with asymmetric handles and matte finish.',
    },

    {
      id: '3',
      title: 'Coated Shoulder Bag',
      brand: 'ROAMY',
      priceEGP: 899,
      rating: 4.1,
      ratingCount: 44,
      image:
        'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1200&auto=format&fit=crop',
      description: 'Classic coated leather shoulder bag with metallic accents.',
    },

    {
      id: '4',
      title: 'High-Neck Oversize Sweater',
      brand: 'MOJT',
      priceEGP: 650,
      rating: 4.7,
      ratingCount: 212,
      image:
        'https://images.unsplash.com/photo-1738651875564-06c0017fea55?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      badges: ['Winter Essential'],
      description: 'Cozy oversize sweater with ribbed cuffs and high neck.',
    },

    {
      id: '5',
      title: 'Pool Shoes',
      brand: 'DINA',
      priceEGP: 450,
      rating: 4.2,
      ratingCount: 97,
      image:
        'https://plus.unsplash.com/premium_photo-1721385340416-4a77f37787df?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      badges: ['Summer'],
      description: 'Lightweight slip-on pool shoes with quick-dry sole.',
    },

    {
      id: '6',
      title: 'Belted Trench Coat',
      brand: 'ROMWE',
      priceEGP: 1499,
      rating: 4.8,
      ratingCount: 181,
      image:
        'https://images.unsplash.com/photo-1589363360147-4f2d51541551?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=crop',
      badges: ['Classic'],
      description:
        'Timeless beige trench coat with belt and double-breasted front.',
    },

    {
      id: '7',
      title: 'Leather Loafers',
      brand: 'KIVAN',
      priceEGP: 1200,
      rating: 4.5,
      ratingCount: 89,
      image:
        'https://plus.unsplash.com/premium_photo-1664790560167-5160505f1596?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=crop',
      badges: ['New Arrival'],
      description: 'Polished leather loafers with cushioned insole.',
    },

    {
      id: '8',
      title: 'Round Sunglasses',
      brand: 'VISTRA',
      priceEGP: 399,
      rating: 4.0,
      ratingCount: 56,
      image:
        'https://plus.unsplash.com/premium_photo-1755752692284-b2d8164901f4?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      badges: ['Best Price'],
      description: 'Retro-style round sunglasses with UV protection.',
    },

    {
      id: '9',
      title: 'Minimalist Wristwatch',
      brand: 'TIMECO',
      priceEGP: 750,
      rating: 4.6,
      ratingCount: 144,
      image:
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop',
      badges: ['Gift Idea'],
      description: 'Slim stainless steel case, leather strap, minimalist dial.',
    },

    {
      id: '10',
      title: 'Pink Dress',
      brand: 'BASIC COUTURE',
      priceEGP: 1100,
      rating: 4.4,
      ratingCount: 73,
      image:
        'https://plus.unsplash.com/premium_photo-1676236306466-25ba882070b3?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Ds',
      badges: ['Summer Collection'],
      description: 'Flowy midi dress with spaghetti straps and subtle pleats.',
    },

    {
      id: '11',
      title: 'Leather Backpack',
      brand: 'URBANO',
      priceEGP: 1350,
      rating: 4.5,
      ratingCount: 61,
      image:
        'https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg',
      badges: ['Everyday'],
      description: 'Durable leather backpack with multiple compartments.',
    },

    {
      id: '12',
      title: 'Chunky Sneakers',
      brand: 'NXTGEN',
      priceEGP: 999,
      rating: 4.2,
      ratingCount: 120,
      image:
        'https://plus.unsplash.com/premium_photo-1755034654684-284d5cdb193b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      badges: ['Trending'],
      description: 'Chunky white sneakers with breathable mesh and thick sole.',
    },
  ];

  chats: ChatSummary[] = [
    {
      id: 'c1',
      name: 'CAROL',
      last: 'Sure! just send me your measurements',
      unread: 2,
    },
    { id: 'c2', name: 'ORDERLY FASHION', last: 'Hello! We will contact you…' },
    { id: 'c3', name: 'CEATHES', last: 'Your order is confirmed.' },
  ];

  thread(id: string): ChatMessage[] {
    return [
      {
        id: 'm1',
        fromMe: false,
        text: 'Hi! can I have this charm with my mom’s name?',
        time: '09:18',
      },
      {
        id: 'm2',
        fromMe: true,
        text: 'Sure—send your mom’s name in a message and we’ll contact you when it’s ready.',
        time: '09:20',
      },
      { id: 'm3', fromMe: false, text: 'Thank you!', time: '09:22' },
    ];
  }

  product(id: string) {
    return this.products.find((p) => p.id === id)!;
  }
}
