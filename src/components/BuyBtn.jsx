import "./BuyBtn.css";

const BuyBtn = ({ name, newPrice }) => {
  return (
    <button
      onClick={() => {
        alert(`Has comprado ${name} en $${newPrice}`);
      }}
    >
      Comprar
    </button>
  );
};

export default BuyBtn;
