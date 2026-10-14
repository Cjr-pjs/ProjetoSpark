import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { CartItem, Product, FlavorVariant } from '@/types/product';

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  appliedCoupon: string | null;
  discountPercentage: number;
  lastAddedItem: CartItem | null;
  
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  addItem: (product: Product, flavor: FlavorVariant, quantity?: number) => void;
  removeItem: (productId: string, flavorId: string) => void;
  updateQuantity: (productId: string, flavorId: string, delta: number) => void;
  clearCart: () => void;
  applyCoupon: (code: string) => { success: boolean; message: string };
  removeCoupon: () => void;
  
  // Computed helpers
  getTotalItems: () => number;
  getSubtotal: () => number;
  getDiscountAmount: () => number;
  getTotal: () => number;
  getFreeShippingProgress: () => { current: number; target: number; percentage: number; remaining: number };
}

const FREE_SHIPPING_THRESHOLD = 99.0;

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [
        // Pre-populate with 1 stylish default item for immediate feedback
        {
          productId: 'spark-core-can',
          flavorId: 'voltage-lime',
          name: 'SPARK Energy Drink 473ml',
          flavorName: 'Limão Voltage',
          flavorColor1: '#39FF14',
          flavorColor2: '#0D2B05',
          price: 11.90,
          quantity: 2,
          category: 'energy',
          volume: '473ml',
        }
      ],
      isOpen: false,
      appliedCoupon: null,
      discountPercentage: 0,
      lastAddedItem: null,

      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),

      addItem: (product, flavor, quantity = 1) => {
        set((state) => {
          const existingIndex = state.items.findIndex(
            (item) => item.productId === product.id && item.flavorId === flavor.id
          );

          let updatedItems: CartItem[];
          const newItem: CartItem = {
            productId: product.id,
            flavorId: flavor.id,
            name: product.name,
            flavorName: flavor.name,
            flavorColor1: flavor.color1,
            flavorColor2: flavor.color2,
            price: product.price,
            quantity: quantity,
            category: product.category,
            volume: flavor.volume,
            image: flavor.image || product.image,
          };

          if (existingIndex > -1) {
            updatedItems = [...state.items];
            updatedItems[existingIndex] = {
              ...updatedItems[existingIndex],
              quantity: updatedItems[existingIndex].quantity + quantity,
            };
          } else {
            updatedItems = [...state.items, newItem];
          }

          return {
            items: updatedItems,
            isOpen: true, // Automatically open drawer when item added
            lastAddedItem: newItem,
          };
        });
      },

      removeItem: (productId, flavorId) => {
        set((state) => ({
          items: state.items.filter(
            (item) => !(item.productId === productId && item.flavorId === flavorId)
          ),
        }));
      },

      updateQuantity: (productId, flavorId, delta) => {
        set((state) => {
          const updatedItems = state.items
            .map((item) => {
              if (item.productId === productId && item.flavorId === flavorId) {
                const newQuantity = item.quantity + delta;
                return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
              }
              return item;
            })
            .filter((item): item is CartItem => item !== null);

          return { items: updatedItems };
        });
      },

      clearCart: () => {
        set({ items: [], appliedCoupon: null, discountPercentage: 0 });
      },

      applyCoupon: (code) => {
        const cleanCode = code.trim().toUpperCase();
        if (cleanCode === 'SPARK10' || cleanCode === 'VOLTAGE' || cleanCode === 'NEON10') {
          set({ appliedCoupon: cleanCode, discountPercentage: 10 });
          return { success: true, message: 'Cupom de 10% de desconto aplicado com sucesso!' };
        }
        if (cleanCode === 'SPARK20' || cleanCode === 'ENERGY20') {
          set({ appliedCoupon: cleanCode, discountPercentage: 20 });
          return { success: true, message: 'Cupom VIP de 20% de desconto aplicado!' };
        }
        return { success: false, message: 'Cupom inválido ou expirado. Tente SPARK10' };
      },

      removeCoupon: () => {
        set({ appliedCoupon: null, discountPercentage: 0 });
      },

      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },

      getSubtotal: () => {
        return get().items.reduce((total, item) => total + item.price * item.quantity, 0);
      },

      getDiscountAmount: () => {
        const subtotal = get().getSubtotal();
        const percentage = get().discountPercentage;
        return (subtotal * percentage) / 100;
      },

      getTotal: () => {
        const subtotal = get().getSubtotal();
        const discount = get().getDiscountAmount();
        return Math.max(0, subtotal - discount);
      },

      getFreeShippingProgress: () => {
        const subtotal = get().getSubtotal();
        const target = FREE_SHIPPING_THRESHOLD;
        const percentage = Math.min(100, (subtotal / target) * 100);
        const remaining = Math.max(0, target - subtotal);
        return {
          current: subtotal,
          target,
          percentage,
          remaining,
        };
      },
    }),
    {
      name: 'spark-cart-storage-v1',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        items: state.items,
        appliedCoupon: state.appliedCoupon,
        discountPercentage: state.discountPercentage,
      }),
    }
  )
);

