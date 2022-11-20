import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/selectors';
import { inputFilter } from 'redux/actions';

import { Text, Container, Input } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  //----Обновляем фильтр----
  function changeFilter(event) {
    dispatch(inputFilter(event.currentTarget.value));
  }

  return (
    <Container>
      <Text>Find contacts by name</Text>
      <Input type="text" value={filter} onChange={changeFilter} />
    </Container>
  );
};
