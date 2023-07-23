import React from "react";
import ProductCard from "./Components/ProductCard";
import Header from "./Components/Header";

const Products = () => {
  const products = [
    {
      id: "ededefefrferfrfferferferf",
      productName: "iPhone 12",
      description: "This is my phone 1",
      imageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4jLSRD52is7UYuzqaINxnzo9rOwz_NaoPIg&usqp=CAU",
      price: 30000,
    },
    {
      id: "frfhirfjirfjrijffrijfirjf",
      productName: "iPhone 13",
      description: "This is my phone 2",
      imageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4jLSRD52is7UYuzqaINxnzo9rOwz_NaoPIg&usqp=CAU",
      price: 40000,
    },
    {
      id: "frfirjfirfjirfjrfijrfhuhsdu",
      productName: "iPhone 14",
      description: "This is my phone 3",
      imageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4jLSRD52is7UYuzqaINxnzo9rOwz_NaoPIg&usqp=CAU",
      price: 50000,
    },
  ];

  return (
    <div>
      {/* adding the header */}
      <Header />

      <div className="flex items-center justify-center gap-10 m-10">
        {products.length === 0 ? (
          <h1 className="text-xl font-bold">No products</h1>
        ) : (
          products.map((product) => {
            return <ProductCard key={product?.id} product={product} />;
          })
        )}
      </div>
    </div>
  );
};

export default Products;
