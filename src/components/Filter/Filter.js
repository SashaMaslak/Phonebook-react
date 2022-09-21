import PropTypes from 'prop-types';
import css from './Filter.module.css';

export function Filter({ handleSetFilterValue }) {
   return (
      <div className={css.filterBox}>
         <p>Find contacts by name</p>
      <input
      className={css.filterBtn}
      type="text"
      placeholder="filter name"
      onChange={handleSetFilterValue} />
      </div>)
}

Filter.propTypes = {
   handleSetFilterValue: PropTypes.func.isRequired,
};