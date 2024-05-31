import { FaTimes, FaEdit } from 'react-icons/fa';
import PropType from 'prop-types';
import Card from '../shared/Card';

const FeedbackItem = ({ item }) => {
  return (
    <Card>
      <div className='flex gap-2 flex-row-reverse self-end p-4'>
        <button>
          <FaTimes
            color='purple'
            className='cursor-pointer'
          />
        </button>
        <button>
          <FaEdit
            color='purple'
            className=' cursor-pointer'
          />
        </button>
      </div>
      <div className='absolute left-[-18px] top-[-18px] bg-[#ff6a95] w-14 h-14 font-semibold text-lg flex justify-center items-center rounded-full text-white'>
        {item.rating}
      </div>
      <p className='pb-6 px-8 text-lg w-full'>{item.text}</p>
    </Card>
  );
};

FeedbackItem.propTypes = {
  item: PropType.object.isRequired,
};

export default FeedbackItem;
