import PropTypes from 'prop-types';
import { FilterLabel, Icon, Input } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <FilterLabel>
      <Icon />
      <Input
        type="text"
        value={value}
        placeholder="Filter by name..."
        onChange={onChange}
      />
    </FilterLabel>
  );
};

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };

export default Filter;
