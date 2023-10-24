import { useDispatch } from 'react-redux';
import { setColorFilter } from '../redux/colorFilter';

const ColorFilter = () => {
  const dispatch = useDispatch();

  const handleColorFilterChange = (e) => {
    dispatch(setColorFilter(e.target.value));
  };

  const colorFilterStyle = {
    position: 'absolute',
    top: '-120px',  // Adjust the top position as needed
    right: '300px',  // Adjust the right position as needed
  };

  

  return (
    <div style={colorFilterStyle} className='rounded-md px-4 py-2 bg-yellow-300'>
      <label htmlFor="colorFilter" >
        Filter by Color:
      </label>
      <select id="colorFilter" onChange={handleColorFilterChange}>
        <option value="all">All</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
      </select>
    </div>
  );
};

export default ColorFilter;
