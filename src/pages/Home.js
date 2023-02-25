import React, { useContext } from "react";

import Hero from "../components/Hero";
import Product from "../components/Product";
import { ProductContext } from "../contexts/ProductContext";

const Home = () => {
  const { products, loading } = useContext(ProductContext);

  const filteredProducts = products.filter((item) => {
    console.log(products);
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });

  return (
    <div>
      <Hero />
      <section className="py-16">
        <div className="container mx-auto">
          {loading ? (
            <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-blue-500 border-r-transparent"></div>
          ) : (
            <div className="mx-auto grid max-w-sm grid-cols-1 gap-[30px] md:mx-0 md:max-w-none md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
              {filteredProducts.map((product) => {
                return <Product product={product} key={product.id} />;
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
