import { Filter } from "../components/Filter";
import "./header.scss";

function Header({
  handleOneColumns,
  handleTwoColumns,
  searchName,
  onChangeSearch,
}) {
  return (
    <header className="header">
      <section className="header__buttonsWrapper">
        <button className="header__minus" onClick={handleOneColumns}>
          <i className="fas fa-minus"></i>
        </button>
        <button className="header__plus" onClick={handleTwoColumns}>
          <i className="fas fa-plus"></i>
        </button>
      </section>
      <Filter onChangeSearch={onChangeSearch} searchName={searchName} />
    </header>
  );
}

export { Header };
