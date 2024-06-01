import PropTypes from 'prop-types';

const Button = ({ children, version, type, isDisabled }) => {
  return (
    <button
      type={type}
      disabled={isDisabled}
      className={`btn btn-${version}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
};

export default Button;
