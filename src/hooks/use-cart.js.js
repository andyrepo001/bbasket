import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set) => ({
      cartItems: [],
      total: 0,
      addToCart: (product) =>
        set((state) => {
          const existingItem = state.cartItems.find(
            (item) => item.item_id === product.item_id
          );

          if (!existingItem) {
            return {
              cartItems: [...state.cartItems, { ...product, quantity: 1 }],
              total: (state.total += Number(product.item_price)),
            };
          }

          if (existingItem) {
            return {
              cartItems: state.cartItems.map((item) =>
                item.item_id === product.item_id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
              total: (state.total += Number(product.item_price)),
            };
          }
        }),
      remove: (id) => set((state) => {}),
      increase: (id) => set((state) => {}),
      decrease: (id) => set((state) => {}),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
