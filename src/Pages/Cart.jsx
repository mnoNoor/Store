import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useCartStore } from "@/Store/Store";

export default function Cart() {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);
  const newTotal = cart.reduce((sum, p) => sum + p.price * p.quantity, 0);

  return (
    <div>
      <Header />
      <main className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-6">Your Shopping Cart</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white p-4 rounded-lg shadow-md flex items-center"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-contain mr-4"
                />
                <div className="flex-1">
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                  <p className="text-gray-800 font-bold">
                    Price: ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  onClick={() => removeFromCart(item)}
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="sticky bottom-0 w-full bg-white p-4 border-t shadow-lg">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    className="bg-gray-800 text-white px-6 py-3 rounded hover:bg-gray-900 w-full sm:w-auto"
                    onClick={clearCart}
                  >
                    Clear Cart
                  </button>
                  <button
                    className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 w-full sm:w-auto"
                    onClick={clearCart}
                  >
                    Confirm Order
                  </button>
                </div>
                <h2 className="text-lg md:text-xl font-semibold text-center md:text-right">
                  Total: ${newTotal.toFixed(2)}
                </h2>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
