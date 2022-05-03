import classes from './CategorySelector.module.css';

const CategorySelector: React.FC<{
  onCategorySelected: (category: string) => void;
}> = (props) => {
  const selectCategoryHandler = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    props.onCategorySelected(event.target.value);
  };

  return (
    <div className={classes['category-selector']}>
      <label>Filter by category</label>
      <select onChange={selectCategoryHandler}>
        <option value='all'>All</option>
        <option value='biography'>Biography</option>
        <option value='architecture'>Architecture</option>
        <option value='history'>History</option>
      </select>
    </div>
  );
};
export default CategorySelector;
