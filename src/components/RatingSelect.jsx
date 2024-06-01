import PropTypes from 'prop-types';

const RatingSelect = ({ select, selected }) => {
  const handleChange = (e) => {
    select(Number(e.target.value));
  };

  return (
    <ul className='flex justify-between'>
      {Array.from({ length: 10 }, (_, i) => (
        <li key={`rating-${i + 1}`}>
          <input
            type='radio'
            id={`num${i + 1}`}
            name='rating'
            value={i + 1}
            className='hidden'
            onChange={handleChange}
            checked={selected === i + 1}
          />
          <label
            htmlFor={`num${i + 1}`}
            className={`w-14 h-14 font-semibold text-lg flex justify-center items-center rounded-full cursor-pointer transition-colors duration-300 ${
              selected === i + 1
                ? 'bg-[#ff6a95] text-white'
                : 'bg-gray-200 hover:bg-[#ff6a95] hover:text-white'
            }`}
          >
            {i + 1}
          </label>
        </li>
      ))}
    </ul>
  );
};

RatingSelect.propTypes = {
  select: PropTypes.func.isRequired,
  selected: PropTypes.number.isRequired,
};

export default RatingSelect;
