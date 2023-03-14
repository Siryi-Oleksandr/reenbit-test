import PropTypes from 'prop-types';
import { FilterLabel, Icon, Input } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <FilterLabel>
      <Icon />
      <Input
        type="text"
        name="filter"
        value={value}
        placeholder="Filter by name..."
        onChange={e => onChange(e.target.value)}
      />
    </FilterLabel>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
