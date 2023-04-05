import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

export function ContactListItem({ id, name, number }) {
  const dispatch = useDispatch();
  return (
    <li className={css.contactList__item}>
      <p className={css.contactList__name}>{name}</p>:
      <p className={css.contactList__number}>{number}</p>
      <button
        className={css.contactList__DeleteBtn}
        onClick={() => dispatch(deleteContact(id))}
      >
        delete
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
