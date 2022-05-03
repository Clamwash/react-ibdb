import classes from './SearchBar.module.css';

const SearchBar = (props) => {
  const searchInputChange = (event) => {
    props.onSearchInputEntered(event.target.value.trim().toLowerCase());
  };

  return (
    <div className={classes['search-bar']}>
      <label>Search by title</label>
      <input onChange={searchInputChange} type='text' />
    </div>
  );
};

export default SearchBar;
