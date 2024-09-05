import { create } from 'zustand';

const useProductStore = create((set) => ({
    // Initial state
    products: [],
    cart: [],
    total: null,

    // Actions
    setProducts: (productData) => set({ products: productData, isLoaded: true }),

    setNewProducts: (productData) => set({ products: [...productData] }),

    addToCart: (product) =>
        set((state) => {
            // Check if the product is already in the cart
            const existingProduct = state.cart.find((item) => item.id === product.id);
            if (existingProduct) {
                // If the product is already in the cart, increment its quantity
                return {
                    cart: state.cart.map((item) =>
                        item.id === product.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                };
            } else {
                // If the product is not in the cart, add it with quantity 1
                return { cart: [...state.cart, { ...product, quantity: 1 }] };
            }
        }),

    removeFromCart: (productId) =>
        set((state) => ({
            cart: state.cart.filter((item) => item.id !== productId),
        })),

    updateCartQuantity: (productId, quantity) =>
        set((state) => ({
            cart: state.cart.map((item) =>
                item.id === productId ? { ...item, quantity } : item
            ),
        })),

    clearCart: () => set({ cart: [] }),
}));

export default useProductStore;
