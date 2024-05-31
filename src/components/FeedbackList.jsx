import PropTypes from 'prop-types';
import FeedbackItem from './FeedbackItem';

const FeedbackList = ({ feedback }) => {
  return (
    <ul className='flex flex-col gap-6 m-2'>
      {feedback.map((item) => (
        <FeedbackItem
          key={item.id}
          item={item}
        />
      ))}
    </ul>
  );
};

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FeedbackList;
