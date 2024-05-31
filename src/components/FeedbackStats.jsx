import PropTypes from 'prop-types';

const FeedbackStats = ({ feedback }) => {
  const numReviews = feedback.length;
  const avgRating =
    feedback.reduce((acc, curr) => acc + curr.rating, 0) / numReviews;

  return (
    <div className='flex justify-between text-white font-semibold'>
      <h4>{numReviews} Reviews</h4>
      <h4>Average Rating: {avgRating}</h4>
    </div>
  );
};

FeedbackStats.propTypes = {
  feedback: PropTypes.array.isRequired,
};

export default FeedbackStats;
