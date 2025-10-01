import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AddButton from "@/components/layout/AddToButton";

export default function ProductsList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data.products || []))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="p-6 bg-white border rounded-lg shadow-lg mt-6">
      <h2 className="text-xl font-bold mb-4">Products List</h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mr-5 items-stretch">
        {products.map((product) => (
          <li
            key={product.id}
            className="flex flex-col justify-between text-center bg-white shadow-md rounded-lg p-3 hover:shadow-lg transition border border-gray-400"
          >
            <Link to={`/product/${product.id}`} className="flex-1">
              <img
                src={product.image}
                alt={product.name}
                className="w-24 h-24 mx-auto mb-2 object-cover rounded-md"
              />
              <p className="font-semibold text-sm leading-snug hover:underline hover:cursor-pointer">
                {product.name}
              </p>
            </Link>
            <div>
              <span className="text-gray-600 text-sm block mt-1">
                ${product.price}
              </span>
              <div className="mt-2">
                <AddButton product={product} text="Add to Cart" />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
