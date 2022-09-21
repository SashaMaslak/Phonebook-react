import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';

export function ContactListItem({ id, name, number, handleDeleteContact }) {
   return (
      <li className={css.contactList__item}>
         <p className={css.contactList__name}>{name}</p>:
         <p className={css.contactList__number}>{number}</p>
         <button className={css.contactList__DeleteBtn} onClick={() => handleDeleteContact(id)}>delete</button>
      </li>
   )
}

ContactListItem.propTypes = {
   id: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   number: PropTypes.string.isRequired,
   handleDeleteContact: PropTypes.func.isRequired,
};