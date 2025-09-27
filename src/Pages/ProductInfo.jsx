import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import AddButton from "@/components/layout/AddToButton";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import badge from "../data/badge.json";

export default function ProductInfo() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [badgeColor, setBadgeColor] = useState("");

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const currentProduct = data.products.find((p) => String(p.id) === id);
        setProduct(currentProduct || null);
      })
      .catch(() => {
        setProduct(null);
      });
  }, [id]);

  useEffect(() => {
    if (product) {
      const Badgeinfo = badge.find((c) => c.name === product.category);
      setBadgeColor(Badgeinfo ? Badgeinfo.color : "#000");
    }
  }, [product]);

  if (!product) return <p>Loading...</p>;

  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg h-auto min-h-[500px]">
          <div className="order-1 md:order-2 flex justify-center items-center p-4">
            <div className="relative w-full max-w-md h-80 lg:h-96">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain rounded-lg shadow-md"
              />
            </div>
          </div>

          <div className="order-2 md:order-1 flex flex-col justify-center space-y-6 p-4">
            <div>
              <h1 className="text-gray-900 font-bold text-3xl lg:text-4xl mb-3">
                {product.name}
              </h1>

              <Badge
                variant="secondary"
                style={{ backgroundColor: badgeColor }}
                className="px-3 py-1 text-white text-sm font-semibold rounded-full"
              >
                {product.category}
              </Badge>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed">
              {product.description}
            </p>

            <div className="flex items-center">
              <span className="text-2xl font-bold text-gray-800">
                ${product.price}
              </span>
            </div>

            <div className="flex mt-4">
              <AddButton
                className="h-10 w-4/6"
                text="Buy One"
                product={product}
              ></AddButton>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
