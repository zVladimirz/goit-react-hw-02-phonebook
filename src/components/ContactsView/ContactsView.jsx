import PropTypes from 'prop-types';
import {
  ContactsViewList,
  ContactsViewList__item,
  ContactsViewList__text,
} from './ContactsView.styled';

const ContactsView = ({ contacts, onDeleteContact }) => {
  return (
    <ContactsViewList>
      {contacts.map(({ id, name, number }) => (
        <ContactsViewList__item key={id}>
          <ContactsViewList__text>
            {name + ': ' + number}
          </ContactsViewList__text>
          <button onClick={() => onDeleteContact(id)}>Удалить</button>
        </ContactsViewList__item>
      ))}
    </ContactsViewList>
  );
};

ContactsView.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsView;
