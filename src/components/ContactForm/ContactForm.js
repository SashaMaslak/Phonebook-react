import { useState } from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

export function ContactForm({ onAddContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

   const handleChangeInputName = ({target: { value }}) => {
     console.log(value)
    setName(value);
  };
  const handleChangeInputNumber = ({target: { value }}) => {
    setNumber(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const contact = {
      name,
      number,
      id: shortid.generate(),
    };

    onAddContact(contact);
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

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};
