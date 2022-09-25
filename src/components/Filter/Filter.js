import { filterContact } from 'redux/filterSlice';
import { useDispatch } from 'react-redux';
import css from './Filter.module.css';

export function Filter() {
   const dispatch = useDispatch();

   const setFilterValue = ({ target: { value } }) => {
      dispatch(filterContact(value));
   };

   return (
      <div className={css.filterBox}>
         <p>Find contacts by name</p>
      <input
      className={css.filterBtn}
      type="text"
      placeholder="filter name"
            onChange={setFilterValue} />
      </div>)
}