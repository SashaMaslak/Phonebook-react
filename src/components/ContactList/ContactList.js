import { useSelector } from 'react-redux';
import { useState } from 'react';
import { selectContacts } from 'redux/contacts/selectors';
import { selectFilter } from 'redux/contacts/selectors';
import css from './ContactList.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import ModalEditContact from 'components/ModalEditContact/ModalEditContact';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBinLine } from 'react-icons/ri';

// helpers
import { filterContacts } from 'helpers/filterContacts';

export function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const [modalActive, setModalActive] = useState(false);
  const [currentId, setCurrentId] = useState('');

  const filteredContacts = filterContacts(contacts, filter);

  const handleOpenModalChange = id => {
    setCurrentId(id);
    setModalActive(true);
  };

  return (
    <>
      <table className={css.table}>
        <thead>
          <tr className={css.rowHead}>
            <th className={css.rowHeadItem}>SN</th>
            <th className={css.rowHeadItem}>NAME</th>
            <th className={css.rowHeadItem}>NUMBER</th>
            <th className={css.rowHeadItem}>EDIT</th>
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
                  <FiEdit
                    className={css.contactList__Btn}
                    onClick={() => handleOpenModalChange(id)}
                  />
                }
                {modalActive && (
                  <ModalEditContact setActive={setModalActive} id={currentId} />
                )}
              </td>
              <td width="110" className={css.rowItem}>
                {
                  <RiDeleteBinLine
                    className={css.contactList__Btn}
                    onClick={() => dispatch(deleteContact(id))}
                  />
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
