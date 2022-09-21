export function filterContacts(contacts, filter) {
   const filterValue = filter.toLowerCase().trim();
   return contacts.filter((contact) => contact.name.toLowerCase().includes(filterValue));
}