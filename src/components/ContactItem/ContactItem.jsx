import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import PropTypes from 'prop-types';

import { Text, Button } from './ContactItem.styled';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  //----Удаляем контакты----
  function handleDelete() {
    dispatch(deleteContact(contact.id));
  }

  //----Рендер----
  return (
    <>
      <Text>
        {contact.name}: {contact.number}
      </Text>
      <Button onClick={handleDelete}>Delete</Button>
    </>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
