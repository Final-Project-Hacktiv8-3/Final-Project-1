import { AiOutlineSearch } from "react-icons/ai";
import PropTypes from "prop-types";
export const SearchInput = ({
  onChange,
  placeholder,
  onKeyDown,
  width = "w-[80%]",
}) => {
  SearchInput.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onKeyDown: PropTypes.func,
    width: PropTypes.string,
  };
  return (
    <form className="flex items-start">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only"
      >
        Search
      </label>
      <div className="relative flex-1">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <AiOutlineSearch />
        </div>
        <input
          type="search"
          role="search"
          onKeyDown={onKeyDown}
          onChange={onChange}
          id="default-search"
          className={`block ${width} p-2 pl-12 text-sm text-gray-900 rounded-lg bg-gray-300 focus:ring-blue-500 focus:border-blue-500`}
          placeholder={placeholder}
          required
        />
      </div>
    </form>
  );
};

export default SearchInput;
