const FilterButton = ({ name, isActive, setFilterActive }) => {
  return (
    <div>
      <button
        className={
          "m-2 px-2 pr-3 py-1 rounded-2xl border-black border" +
          (isActive ? " pr-5 border-red-600 border-2 bg-red-200" : "")
        }
        onClick={() => {
          //Filter based on Delivery Time
          setFilterActive();
        }}
      >
        {name}
      </button>
    </div>
  );
};

//Higher Order Component
export const FilterActive = (FilterButton) => {
  return ({ name, isActive, setFilterActive }) => {
    let crossIcon = "";
    if (isActive) {
      crossIcon = (
        <span className="inline-block cursor-pointer absolute right-2 top-[2px] p-2 text-lg">
          x
        </span>
      );
    }
    return (
      <div className="relative">
        <FilterButton
          name={name}
          isActive={isActive}
          setFilterActive={setFilterActive}
        />
        {crossIcon}
      </div>
    );
  };
};
export default FilterButton;
