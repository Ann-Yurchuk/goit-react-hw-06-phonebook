import { useDispatch, useSelector } from 'react-redux';
import { InputPhone } from './Contacts.styled';
import { setFilter } from 'redux/filter.slice';

export const ContactsFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const onQueryChange = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <>
      <InputPhone
        placeholder="Find contacts by name"
        type="text"
        value={filter}
        onChange={onQueryChange}
      />
    </>
  );
};
