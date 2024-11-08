import css from "./SearchBox.module.css";

const SearchBox = ({ inputValue, onFilter }) => {
  return (
    <div className={css.SearchBox}>
      <p className={css.filterText}>
        <b>Find contact by name</b>
      </p>
      <input
        className={css.filterInput}
        type="text"
        value={inputValue}
        onChange={(e) => onFilter(e.target.value)}
        placeholder="abc"
      />
    </div>
  );
};

export default SearchBox;
