import { theme } from 'theme';
import { Box } from './Box';
import { Section } from './Section/Section';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

export function App() {

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
        <ContactForm />
      </Section>
      <Section title={'Contacts'}>
        <Filter />
        <ContactList />
      </Section>
    </Box>
  );
}