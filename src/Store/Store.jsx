import { create } from "zustand";

export const useCartStore = create((set) => ({
  cart: [],
  total: 0,
  updateTotal: () =>
    set((state) => ({
      total: state.cart.reduce((sum, p) => sum + p.price * p.quantity, 0),
    })),

  addToCart: (product) => {
    set((state) => {
      const existingProduct = state.cart.find((item) => item.id === product.id);
      if (existingProduct) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return { cart: [...state.cart, { ...product, quantity: 1 }] };
    });
  },
  removeFromCart: (product) => {
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== product.id),
    }));
  },
  clearCart: () => {
    set({ cart: [] });
  },
  newTotal: () => {
    total: state.cart.map((p) => total + p.price);
  },
}));
