import "./App.css";
import Product from "./components/Product";
import ProductContainer from "./components/ProductContainer";
import json from "./products.json";

function App() {
  return (
    <>
      <ProductContainer>
        {json.map((e, i) => {
          return (
            <Product
              key={`product_${i}`}
              oldPrice={e.price}
              discount={e.discount}
              newPrice={e.price - (e.price * e.discount) / 100}
              name={e.name}
              url={e.url}
            />
          );
        })}
      </ProductContainer>
    </>
  );
}

export default App;
