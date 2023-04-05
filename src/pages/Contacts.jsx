import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading } from 'redux/contacts/selectors';

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor: '#A9A9A9',
    borderRadius: '8px',
    padding: '8px',
    marginBottom: '16px',
  },
};

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div style={styles.container}>
        <h2>My Phonebook</h2>
        <ContactForm />
        <Filter />
      </div>
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactList />
    </>
  );
}
