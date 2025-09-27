import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export function Help() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100 py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Help Center
            </h1>
            <p className="text-lg text-gray-600 bg-white p-4 rounded-lg border border-gray-300">
              If you don't find your answer here, feel free to contact us at:
              <br></br>
              <span className="text-blue-400">support@mystore.com</span>
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg border border-gray-300 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                How do I browse products?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                You can browse all products from the home page, or use the
                categories menu to filter products by type. Click on any product
                to see full details.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-gray-300 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                How do I add a product to the cart?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Click the "Add to Cart" button next to any product. A
                confirmation message will appear showing the product was added
                successfully.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-gray-300 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                How do I view my shopping cart?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Click the cart icon at the top of the page to view your cart
                contents. You can modify quantities or remove products from
                there.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-gray-300 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Can I purchase products directly?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                This is a demonstration website. You can add products to cart
                and experience the shopping process, but no actual purchases can
                be completed.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-gray-300 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                What are the product categories available?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We have Electronics, Clothes, Makeup, Games, Books, and
                Accessories. Use the categories menu to explore products by
                type.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-gray-300 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                How do I find product details?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Click on any product image or name to go to the product details
                page where you can see full description, price, and
                specifications.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
