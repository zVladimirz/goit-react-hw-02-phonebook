import PropTypes from 'prop-types';
import {
  ContactsViewList,
  ContactsViewListItem,
  ContactsViewListText,
} from './ContactsView.styled';

const ContactsView = ({ contacts, onDeleteContact }) => {
  return (
    <ContactsViewList>
      {contacts.map(({ id, name, number }) => (
        <ContactsViewListItem key={id}>
          <ContactsViewListText>
            {name + ': ' + number}
          </ContactsViewListText>
          <button onClick={() => onDeleteContact(id)}>Удалить</button>
        </ContactsViewListItem>
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
