const FilterButton = ({ onClick }) => (
    <button
      type="button"
      onClick={onClick}
      className="w-full bg-yellow-500 hover:bg-yellow-400 text-white py-2 px-4 rounded-md cursor-pointer mt-4"
    >
      Фильтровать
    </button>
  );
  
  export default FilterButton;
  