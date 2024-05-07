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
      remove: (id) =>
        set((state) => {
          const existingItem = state.cartItems.find(
            (item) => item.item_id === id
          );

          if (!existingItem) return;

          return {
            cartItems: state.cartItems.filter((item) => item.item_id !== id),
            total:
              state.total - existingItem.quantity * existingItem.item_price,
          };
        }),
      increase: (id) =>
        set((state) => {
          const index = state.cartItems.findIndex(
            (item) => item.item_id === id
          );

          if (index === -1) return;

          state.cartItems[index].quantity += 1;
          state.total += Number(state.cartItems[index].item_price);

          return {
            cartItems: state.cartItems,
            total: state.total,
          };
        }),
      decrease: (id) =>
        set((state) => {
          const index = state.cartItems.findIndex(
            (item) => item.item_id === id
          );

          if (index === -1) return;

          state.cartItems[index].quantity -= 1;
          state.total -= Number(state.cartItems[index].item_price);

          if (state.cartItems[index].quantity === 0) {
            state.cartItems.splice(index, 1);
          }

          return {
            cartItems: state.cartItems,
            total: state.total,
          };
        }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
