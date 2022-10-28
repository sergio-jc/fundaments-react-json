import "./ProductContainer.css";

const ProductContainer = ({ children }) => {
  return (
    <section className="products__section">
      <h1 className="products__title">Nuestros productos</h1>
      <div className="products__container">{children}</div>
    </section>
  );
};

export default ProductContainer;
