import PropTypes from 'prop-types';

const Card = ({ children }) => {
  return (
    <div className='relative bg-white rounded-3xl flex flex-col items-center justify-center'>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
