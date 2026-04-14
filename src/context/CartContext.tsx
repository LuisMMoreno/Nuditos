'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface CartItem {
  id: string;
  name: string;
  description: string;
  price: number;
  size: string;
  color: string;
  outfit: string;
  customName?: string;
  quantity: number;
  emoji: string;
  image?: string;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'id'>) => void;
  updateQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  shipping: number;
  total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const STORAGE_KEY = 'nuditos-cart';

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Cargar desde localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setItems(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Error loading cart:', e);
    }
    setIsLoaded(true);
  }, []);

  // Guardar en localStorage
  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.error('Error saving cart:', e);
    }
  }, [items, isLoaded]);

  const addItem = (item: Omit<CartItem, 'id'>) => {
    setItems(prev => {
      const existingIndex = prev.findIndex(
        i => i.name === item.name &&
             i.outfit === item.outfit &&
             i.customName === item.customName
      );

      if (existingIndex >= 0) {
        return prev.map((i, idx) =>
          idx === existingIndex
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        );
      }

      return [...prev, { ...item, id: crypto.randomUUID() }];
    });
  };

  const updateQuantity = (id: string, quantity: number) => {
    setItems(prev =>
      quantity <= 0
        ? prev.filter(i => i.id !== id)
        : prev.map(i => i.id === id ? { ...i, quantity } : i)
    );
  };

  const removeItem = (id: string) => {
    setItems(prev => prev.filter(i => i.id !== id));
  };

  const clearCart = () => setItems([]);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 50 ? 0 : 5;
  const total = subtotal + shipping;

  return (
    <CartContext.Provider value={{
      items,
      addItem,
      updateQuantity,
      removeItem,
      clearCart,
      totalItems,
      subtotal,
      shipping,
      total,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
