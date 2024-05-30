const RatingSelect = () => {
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
          />
          <label
            htmlFor={`num${i + 1}`}
            className='bg-gray-200 w-14 h-14 font-semibold text-lg flex justify-center items-center rounded-full cursor-pointer transition-colors duration-300 hover:bg-[#ff6a95] hover:text-white'
          >
            {i + 1}
          </label>
        </li>
      ))}
    </ul>
  );
};

export default RatingSelect;
