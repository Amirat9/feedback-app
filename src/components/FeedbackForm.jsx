import Card from '../shared/Card';
import RatingSelect from './RatingSelect';
import Button from '../shared/Button';
import { useState } from 'react';

const FeedbackForm = () => {
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(10);

  const handleChange = ({ target: { value } }) => {
    if (value === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (value.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage('Please enter at least 10 characters');
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
    setText(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };

      console.log(newFeedback);
      setBtnDisabled(true);
      setText('');
      setRating(10);
    }
  };
  return (
    <Card>
      <form
        onSubmit={handleSubmit}
        className='container flex flex-col py-8 px-10'
      >
        <h2 className='text-center text-2xl font-bold mb-8'>
          How would you rate your service with us?
        </h2>
        <RatingSelect
          select={setRating}
          selected={rating}
        />
        <div className='flex justify-between items-center border-gray-400 border-[1px] rounded-xl p-2 mb-4 mt-8'>
          <input
            type='text'
            className='flex-1 focus:outline-none'
            placeholder='Write a review'
            onChange={handleChange}
            value={text}
          />
          <Button
            type='submit'
            version={`btn btn-primary`}
            isDisabled={btnDisabled}
          >
            Send
          </Button>
        </div>
        {message && (
          <div className='text-center text-lg text-[#663399]'>{message}</div>
        )}
      </form>
    </Card>
  );
};

export default FeedbackForm;
