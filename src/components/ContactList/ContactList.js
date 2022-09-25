import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import PropTypes from 'prop-types';
import { ContactListItem } from "./ContactListItem";
import css from './ContactList.module.css';
import { GetContacts } from 'redux/contactsSlice';
import { GetFilter } from 'redux/filterSlice';

// helpers
import { filterContacts } from 'helpers/filterContacts';

export function ContactList() {
   const contacts = GetContacts();
   const filter = GetFilter();
   const filteredContacts = filterContacts(contacts, filter);
   const dispatch = useDispatch();
   const handleDeleteContact = id => {
      dispatch(deleteContact(id));
   };
   return (
      <ul className={css.contactList}>
         {filteredContacts.map(({ id, name, number }) => {
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
   )
};