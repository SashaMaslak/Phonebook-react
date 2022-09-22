import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, deleteContact, filterContact } from 'redux/store';
import { theme } from 'theme';
import { Box } from './Box';
import { Section } from './Section/Section';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

// helpers
import { filterContacts } from 'helpers/filterContacts';

// const initialContacts = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

export function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  // const [contacts, setContacts] = useState(
  //   JSON.parse(window.localStorage.getItem('contacts')) ?? initialContacts
  // );
  // const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  // const handleAddContact = contact => {
  //   if (contacts.some(cont => cont.name === contact.name)) {
  //     alert('Contact already exist');
  //     return;
  //   }
  //   setContacts(prev => [...prev, contact]);
  // };

  const handleAddContact = contact => {
    console.log(contact);
    dispatch(addContact(contact));
  };

  // const handleDeleteContact = id => {
  //   setContacts(prev => prev.filter(contact => contact.id !== id));
  // };

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const setFilterValue = ({ target: { value } }) => {
    dispatch(filterContact(value));
  };

  const filteredContacts = filterContacts(contacts, filter);

  return (
    <Box
      as={theme.as.s}
      width={theme.space[12]}
      bg={theme.colors.bgSection}
      my={theme.space[5]}
      mx={theme.position.a}
      p={theme.space[5]}
    >
      {' '}
      <Section title={'Phonebook'}>
        <ContactForm onAddContact={handleAddContact} />
      </Section>
      <Section title={'Contacts'}>
        <Filter handleSetFilterValue={setFilterValue} />
        <ContactList
          contacts={filteredContacts}
          handleDeleteContact={handleDeleteContact}
        />
      </Section>
    </Box>
  );
}
