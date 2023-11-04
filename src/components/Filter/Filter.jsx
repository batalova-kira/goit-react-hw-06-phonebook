import { InputFilter } from './Filter.styled';

export const Filter = ({ filter, onChangeFilter }) => {
  return (
    <div>
      <h3>Find contacts by name</h3>
      <InputFilter
        type="text"
        value={filter}
        onChange={e => {
          onChangeFilter(e.target.value);
        }}
        placeholder="Enter name..."
      />
    </div>
  );
};
