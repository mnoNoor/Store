import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AddButton from "@/components/layout/AddToButton";
import badge from "../data/badge.json";

export default function CategoriesPage() {
  const { category } = useParams();
  const [categoryItems, setCategoryItems] = useState([]);
  const [badgeColor, setBadgeColor] = useState("");

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const currentcategory = data.products.filter(
          (p) => p.category === category
        );
        setCategoryItems(currentcategory);
      });
  }, [category]);

  useEffect(() => {
    if (category) {
      const badgeInfo = badge.find((c) => c.name === category);
      setBadgeColor(badgeInfo ? badgeInfo.color : "#000");
    }
  }, [category]);

  if (!category) return null;
  return (
    <>
      <Header />
      <h1
        className="flex justify-center mt-5 text-3xl font-bold items-center"
        style={{ color: badgeColor }}
      >
        {category}
      </h1>
      <div className="p-6 bg-white border rounded-lg shadow-lg mt-6">
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mr-5">
          {categoryItems.map((item) => (
            <li
              key={item.id}
              className="flex flex-col justify-between text-center bg-white shadow-md rounded-lg p-3 hover:shadow-lg transition border border-gray-400"
            >
              <Link to={`/product/${item.id}`}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 mx-auto mb-2 object-cover rounded-md"
                />
                <p className="font-semibold text-sm leading-snug hover:underline hover:cursor-pointer">
                  {item.name}
                </p>
              </Link>
              <span className="text-gray-600 text-sm block mt-1">
                ${item.price}
              </span>
              <div className="mt-2">
                <AddButton product={item} text="Add to Cart" />
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
}
