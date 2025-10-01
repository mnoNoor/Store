import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddButton from "@/components/layout/AddToButton";

export default function BestSales() {
  const [bestSales, setBestSales] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products || []);
        setBestSales(data.bestSales || []);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const bestSellingProducts = products.filter((product) =>
    bestSales.some((sale) => sale.productId === product.id)
  );

  return (
    <div className="p-6 bg-white border rounded-lg shadow-lg mt-6">
      <h2 className="text-xl font-bold mb-4">Best Sales</h2>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-6 mr-5">
        {bestSellingProducts.map((product) => (
          <li
            key={product.id}
            className="flex flex-col justify-between text-center bg-white shadow-md rounded-lg p-3 hover:shadow-lg transition border border-gray-400"
          >
            <Link to={`/product/${product.id}`}>
              <img
                src={product.image}
                alt={product.name}
                className="w-20 h-20 mx-auto mb-2 object-cover rounded-md"
              />
              <p className="font-semibold text-xs leading-tight hover:underline hover:cursor-pointer line-clamp-2">
                {product.name}
              </p>
            </Link>
            <span className="text-gray-600 text-xs block mt-1">
              ${product.price}
            </span>
            <AddButton
              text="Buy One Now"
              product={product}
              className="text-xs py-1 px-2 mt-1"
            >
              Buy Now
            </AddButton>
          </li>
        ))}
      </ul>
    </div>
  );
}
