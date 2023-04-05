import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { selectFilter } from 'redux/contacts/selectors';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact, changeContact } from 'redux/contacts/operations';

// helpers
import { filterContacts } from 'helpers/filterContacts';

export function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const filteredContacts = filterContacts(contacts, filter);

  return (
    <table className={css.table}>
      <thead>
        <tr className={css.rowHead}>
          <th className={css.rowHeadItem}>SN</th>
          <th className={css.rowHeadItem}>NAME</th>
          <th className={css.rowHeadItem}>NUMBER</th>
          <th className={css.rowHeadItem}>CHANGE</th>
          <th className={css.rowHeadItem}>DELETE</th>
        </tr>
      </thead>
      <tbody>
        {filteredContacts.map(({ id, name, number }, index) => (
          <tr key={id} className={css.row}>
            <td width="50" className={css.rowItem}>
              {index + 1}
            </td>
            <td width="320" className={css.rowItem}>
              {name}
            </td>
            <td width="320" className={css.rowItem}>
              {number}
            </td>
            <td width="110" className={css.rowItem}>
              {
                <button
                  className={css.contactList__Btn}
                  onClick={() => dispatch(changeContact(id))}
                >
                  change
                </button>
              }
            </td>
            <td width="110" className={css.rowItem}>
              {
                <button
                  className={css.contactList__Btn}
                  onClick={() => dispatch(deleteContact(id))}
                >
                  delete
                </button>
              }
            </td>
          </tr>
        ))}
      </tbody>
    </table>

    // <ul className={css.contactList}>
    //   {filteredContacts.map(({ id, name, number }) => {
    //     return <ContactListItem key={id} id={id} name={name} number={number} />;
    //   })}
    // </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
