import Header from "@/components/layout/Header";
import Intro from "@/components/layout/intro";
import BestSales from "@/components/features/BestSales";
import Footer from "@/components/layout/Footer";
import ProductsList from "@/components/features/ProductsList";

export default function Dashboard() {
  return (
    <div>
      <Header />
      <main className="p-6 bg-gray-100 min-h-screen">
        <Intro />
        <BestSales />
        <ProductsList />
      </main>
      <Footer />
    </div>
  );
}
