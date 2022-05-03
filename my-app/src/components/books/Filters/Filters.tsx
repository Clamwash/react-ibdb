import classes from './Filters.module.css';
import CategorySelector from './CategorySelector/CategorySelector';
import SearchBar from './SearchBar/SearchBar';

const Filters: React.FC<{
  onFilterByCategory: (category: string) => void;
  onSearchByTitle: (searchInput: string) => void;
}> = (props) => {
  // Refactor: use ctx instead of many props..?
  const categoryChangeHandler = (category: string) => {
    props.onFilterByCategory(category);
  };

  const searchInputChangeHandler = (searchInput: string) => {
    props.onSearchByTitle(searchInput);
  };

  return (
    <div className={classes['category-selector-container']}>
      <SearchBar onSearchInputEntered={searchInputChangeHandler} />
      <CategorySelector onCategorySelected={categoryChangeHandler} />
    </div>
  );
};

export default Filters;
