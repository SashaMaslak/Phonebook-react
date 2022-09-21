import PropTypes from 'prop-types';
import { ContactListItem } from "./ContactListItem";
import css from './ContactList.module.css';

export function ContactList({ contacts, handleDeleteContact }) {
   return (
      <ul className={css.contactList}>
         {contacts.map(({ id, name, number }) => {
            return (
               <ContactListItem
                  key={id}
                  id={id}
                  name={name}
                  number={number}
                  handleDeleteContact={handleDeleteContact} />
            );
         })}
      </ul>
   );
};

ContactList.propTypes = {
   contacts: PropTypes.arrayOf(
      PropTypes.shape({
         id: PropTypes.string.isRequired,
         name: PropTypes.string.isRequired,
         number: PropTypes.string.isRequired,
      })
   ),
   handleDeleteContact: PropTypes.func.isRequired,
};