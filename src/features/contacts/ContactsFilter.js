import { useDispatch, useSelector } from 'react-redux';
import { InputPhone } from './Contacts.styled';
import { setFilter } from 'redux/contacts.slice';

export const ContactsFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);

  const onQueryChange = query => {
    dispatch(setFilter(query.toLowerCase()));
  };

  return (
    <>
      <InputPhone
        placeholder="Find contacts by name"
        type="text"
        value={filter}
        id="filter"
        onChange={e => onQueryChange(e.target.value)}
      />
    </>
  );
};
