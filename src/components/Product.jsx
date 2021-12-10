import "./product.scss";

function Product({ name, price, discount, image }) {
  return (
    <li className="element ">
      <img src={image} alt={name} className="element__img " />
      <h2 className="element__name"> {name}</h2>
      <p
        className="element__standarPrice element__noStandarPrice"
        style={{ textDecoration: discount ? "line-through" : "none" }}
      >
        {price}€
      </p>
      <p
        className="element__discount element__noDiscount"
        style={{ color: "red" }}
      >
        {discount}
      </p>
      <p className="element__moreColours"> más colores</p>
      <button className="element__button">Añadir</button>
    </li>
  );
}

export { Product };
