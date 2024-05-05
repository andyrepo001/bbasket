import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useCart = create()(
  persist(
    (set) => ({
      items: [],
      addItem: (product) =>
        set((state) => {
          state.items.map((item) =>
            item.id == product.id
              ? { items: [...state.items, { ...item, quantity: quantity + 1 }] }
              : { items: [...state.items, { ...product, quantity: 1 }] }
          );
          //   return { items: [...state.items, { ...product, quantity: 1 }] };
        }),
      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.product.id !== id),
        })),
      clearCart: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
