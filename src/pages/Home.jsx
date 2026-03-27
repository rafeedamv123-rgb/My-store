import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { fetchProducts } from "../services/api";
import "../css/Home.css";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Customer from "../components/Customer";
function Home() {
  const [products, setProducts] = useState([]);
  async function loadProducts() {
    try {
      const data = await fetchProducts();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div className="home">
      <Hero />
      <Features />
      <section className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
      <Customer />
    </div>
  );
}
export default Home;
