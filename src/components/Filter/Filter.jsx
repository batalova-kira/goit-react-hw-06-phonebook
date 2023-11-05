import { useDispatch, useSelector } from 'react-redux';
import { InputFilter } from './Filter.styled';
import { onChangeFilter, selectFilter } from 'redux/contactsSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <div>
      <h3>Find contacts by name</h3>
      <InputFilter
        type="text"
        value={filter}
        onChange={e => {
          dispatch(onChangeFilter(e.target.value));
        }}
        placeholder="Enter name..."
      />
    </div>
  );
};
