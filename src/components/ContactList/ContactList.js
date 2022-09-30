import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { getFilter } from 'redux/selectors';
import PropTypes from 'prop-types';
import { ContactListItem } from "./ContactListItem";
import css from './ContactList.module.css';


// helpers
import { filterContacts } from 'helpers/filterContacts';

export function ContactList() {
   const contacts = useSelector(getContacts);
   const filter = useSelector(getFilter);
   
   const filteredContacts = filterContacts(contacts, filter);
   
   return (
      <ul className={css.contactList}>
         {filteredContacts.map(({ id, name, number }) => {
            return (
               <ContactListItem
                  key={id}
                  id={id}
                  name={name}
                  number={number}
               />
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