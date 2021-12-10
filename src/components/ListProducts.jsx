import { Product } from "./Product";
import "./listproducts.scss";

function ListProducts({ products, boleeanClassName }) {
  return (
    <ul className={boleeanClassName}>
      {products ? (
        products.map((product) => (
          <Product
            key={product.id}
            name={product.name}
            price={product.price}
            discount={product.discounted}
            image={product.image}
          />
        ))
      ) : (
        <p> No está disponible </p>
      )}
    </ul>
  );
}

export { ListProducts };
