import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set) => ({
      cartItems: [],
      addToCart: (product) =>
        set((state) => {
          const existingItem = state.cartItems.find(
            (item) => item.id === product.id
          );

          if (!existingItem) {
            return {
              cartItems: [...state.cartItems, { ...product, quantity: 1 }],
            };
          }

          if (existingItem) {
            return {
              cartItems: state.cartItems.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          }
        }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
