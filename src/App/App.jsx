import { useState } from "react";
import { Header } from "../components/Header";
import { ListProducts } from "../components/ListProducts";
import data from "../Services/products.json";
import "./app.scss";

function App() {
  const [products] = useState(data);
  const [searchName, setSearchName] = useState("");
  const [columns, setColumns] = useState("false");

  function handleSearch(data) {
    const dataFiltered = data.filter((product) =>
      product.name.toLowerCase().includes(searchName.toLocaleLowerCase())
    );
    return dataFiltered;
  }

  return (
    <div className="app">
      <Header
        handleOneColumns={() => setColumns("false")}
        handleTwoColumns={() => setColumns("true")}
        value={searchName}
        onChangeSearch={(e) => setSearchName(e.target.value)}
      />

      <ListProducts
        products={handleSearch(products)}
        boleeanClassName={columns === "false" ? "oneColumn" : "twoColumns"}
      />
    </div>
  );
}

export { App };
