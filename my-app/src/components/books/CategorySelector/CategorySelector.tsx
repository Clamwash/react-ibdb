import classes from './CategorySelector.module.css';

const CategorySelector = (props) => {
  const selectCategoryHandler = (event) => {
    props.onCategorySelected(event.target.value);
  };

  return (
    <div className={classes['category-selector-container']}>
      <div className={classes['category-selector']}>
        <label>Filter by category</label>
        <select onChange={selectCategoryHandler}>
          <option value='all'>All</option>
          <option value='biography'>Biography</option>
          <option value='architecture'>Architecture</option>
          <option value='history'>History</option>
        </select>
      </div>
    </div>
  );
};
export default CategorySelector;
