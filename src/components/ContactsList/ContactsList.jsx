import { useSelector } from 'react-redux';
import { getContacts } from '../../redux/contactsSlice';
import { getFilter } from '../../redux/filterSlice';

import { ContactItem } from '../ContactItem/ContactItem';
import { List, Item, Notice } from './ContactsList.styled';

//----Получаем подходящие контакты----
function getVisibleContacts(contacts, filter) {
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
}

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContacts = getVisibleContacts(contacts, filter);

  //----Рендер----
  return visibleContacts.length > 0 ? (
    <List>
      {visibleContacts.map(contact => (
        <Item key={contact.id}>
          <ContactItem contact={contact} />
        </Item>
      ))}
    </List>
  ) : (
    <Notice>There is nothing to show... ☹️</Notice>
  );
};
