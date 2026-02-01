import ProductCard from "./components/ProductCard";
import "./App.css";

function App() {
  const products = [
    {
      id: 1,
      name: "Iphone 17 ProMax",
      price: "40.000.000",
      img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-17-pro-max_3.jpg",
    },
    {
      id: 2,
      name: "Iphone 16 ProMax",
      price: "30.000.000",
      img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro-max.png",
    },
    {
      id: 3,
      name: "Iphone 15 ProMax",
      price: "25.000.000",
      img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max_5.png",
    },
  ];

  return (
    <div className="container">
      <h1 className="title">Iphone</h1>

      <div className="product-grid">
        {products.map((item) => (
          <ProductCard
            key={item.id}
            image={item.img}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
