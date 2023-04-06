import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { changeContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import { IoMdClose } from 'react-icons/io';
import css from './ModalEditContact.module.css';

const ModalEditContact = ({ active, setActive, id }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const user = contacts.find(item => item.id === id);

  const [nameValue, setNameValue] = useState(user.name);
  const [numberValue, setNumberValue] = useState(user.number);

  // console.log(nameValue);
  // console.log(numberValue);

  const handleChangeInputName = ({ target: { value } }) => {
    setNameValue(value);
  };
  const handleChangeInputNumber = ({ target: { value } }) => {
    setNumberValue(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const allContacts = contacts.reduce((acc, contact) => {
      acc.push(contact.name.toLocaleLowerCase());
      return acc;
    }, []);

    if (allContacts.includes(nameValue.toLocaleLowerCase())) {
      alert(`${nameValue} already in contacts.`);
      return;
    }

    const contact = {
      id,
      name: nameValue,
      number: numberValue,
    };

    dispatch(changeContact(contact));
    reset();
    setActive(false);
  };

  const reset = () => {
    setNameValue('');
    setNumberValue('');
  };

  return (
    <div className={css.modal}>
      <div className={css.modal__content}>
        <div
          className={css.form__closeBtn}
          type="button"
          onClick={() => {
            setActive(false);
          }}
        >
          <IoMdClose size={20} />
        </div>

        <h3 className={css.modal__title}>Edit Contact</h3>
        <form className={css.form} onSubmit={handleSubmit}>
          <label className={css.form__label}>
            Name:
            <input
              className={css.form__input}
              type="text"
              name="name"
              placeholder="input name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={nameValue}
              onChange={handleChangeInputName}
            />
          </label>
          <label className={css.form__label}>
            Phone:
            <input
              className={css.form__input}
              type="tel"
              name="number"
              placeholder="input number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={numberValue}
              onChange={handleChangeInputNumber}
            />
          </label>
          <button className={css.form__btn} type="submit">
            Edit Contact
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalEditContact;
