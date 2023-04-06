import { updateFilter } from 'redux/contacts/slice';
import { useDispatch } from 'react-redux';
import css from './Filter.module.css';

export function Filter() {
  const dispatch = useDispatch();

  const setFilterValue = ({ target: { value } }) => {
    dispatch(updateFilter(value));
  };

  return (
    <div className={css.filterBox}>
      <input
        className={css.filterBtn}
        type="text"
        placeholder="filter by name"
        onChange={setFilterValue}
      />
      <p style={{ color: '#000' }}> Find contacts by name</p>
    </div>
  );
}
