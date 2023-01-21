import { useDispatch, useSelector } from 'react-redux';
import { InputPhone } from './Contacts.styled';
import { setFilter } from 'redux/filter.slice';


export const ContactsFilter = () => {
  const dispatch = useDispatch();
  const { query } = useSelector(state => state.contacts.query);

  const onQueryChange = e => {
   dispatch(setFilter(e.target.value));
  };

  return (
    <>
      <InputPhone
        placeholder=" Find contacts by name"
        type="text"
        value={query}
        onChange={onQueryChange}
      />
    </>
  );
};
