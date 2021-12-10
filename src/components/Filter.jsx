import "./filter.scss";

function Filter({ onChangeSearch, name }) {
  return (
    <section className="sectionSearch ">
      <input
        className="sectionSearch__input "
        type="text"
        onChange={onChangeSearch}
        placeholder=" Buscar"
        value={name}
      />
    </section>
  );
}

export { Filter };
