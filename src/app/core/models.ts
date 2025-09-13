export interface Product {
  id: string;
  title: string;
  brand: string;
  priceEGP: number;
  rating: number;
  ratingCount: number;
  image: string;
  badges?: string[];
  stock?: number;
  colors?: string[];
  description?: string;
}
export interface ChatSummary { id: string; name: string; last: string; unread?: number; }
export interface ChatMessage { id: string; fromMe: boolean; text: string; time: string; }
