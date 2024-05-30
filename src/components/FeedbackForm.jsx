import Card from '../shared/Card';
import RatingSelect from './RatingSelect';

const FeedbackForm = () => {
  return (
    <Card>
      <form className='container flex flex-col gap-8 py-8 px-10'>
        <h2 className='text-center text-2xl font-bold'>
          How would you rate your service with us?
        </h2>
        <RatingSelect />
        <div className='flex justify-between items-center border-gray-400 border-[1px] rounded-xl p-2'>
          <input
            type='text'
            className='flex-1 focus:outline-none'
            placeholder='Write a review'
          />
          <button
            type='submit'
            className='flex-[0.0625] bg-[#202142] text-white px-4 py-2 rounded-lg'
          >
            Send
          </button>
        </div>
      </form>
    </Card>
  );
};

export default FeedbackForm;
