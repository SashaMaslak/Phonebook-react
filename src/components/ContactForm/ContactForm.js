import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { addContact } from 'redux/contactsSlice';
import { addContact } from 'redux/operations';
import { getContacts } from 'redux/selectors';
import css from './ContactForm.module.css';

export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  
   const handleChangeInputName = ({target: { value }}) => {
    setName(value);
  };
  const handleChangeInputNumber = ({target: { value }}) => {
    setNumber(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const allContacts = contacts.reduce((acc, contact) => {
      acc.push(contact.name.toLocaleLowerCase());
      return acc;
    }, []);

    if (allContacts.includes(name.toLocaleLowerCase())) {
      alert(`${name} already in contacts.`);
      return;
    }

    const contact = {
      name,
      number,
    };
    
    
    dispatch(addContact(contact));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.form__label}>
        <input
          className={css.form__input}
          onChange={handleChangeInputName}
          type="text"
          name="name"
          placeholder="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
        />
      </label>
      <label className={css.form__label}>
        <input
          className={css.form__input}
          onChange={handleChangeInputNumber}
          type="tel"
          name="number"
          placeholder="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
        />
      </label>
      <button className={css.form__btn} type="submit">
        Add Contact
      </button>
    </form>
  );
}
