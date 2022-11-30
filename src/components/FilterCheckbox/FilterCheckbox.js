import "./FilterCheckbox.css";

const FilterCheckbox = ({ isCheckBoxActive, handleCheckBoxClick }) => {
  const handleOnClick = () => {
    handleCheckBoxClick();
  };

  return (
    <label htmlFor="shorties" className="filter-checkbox">
      <input
        id="shorties"
        name="filter-checkbox"
        className="filter-checkbox__checkbox"
        type="checkbox"
        onClick={handleOnClick}
      />
      <span
        className={`filter-checkbox__checkbox ${
          isCheckBoxActive ? "filter-checkbox__onoff-checkbox" : ""
        }`}
      ></span>
      <span className="filter-checkbox__label">Короткометражки</span>
    </label>
  );
};

export default FilterCheckbox;
