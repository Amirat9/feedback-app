import PropTypes from 'prop-types';

const Header = ({ text }) => {
  return (
    <header className='h-[70px] mb-8 flex justify-center items-center bg-black/[0.4]'>
      <div className='container'>
        <h2 className='text-center text-[#ff6a95] text-xl font-semibold '>
          {text}
        </h2>
      </div>
    </header>
  );
};

Header.defaultProps = {
  text: 'Feedback UI',
};

Header.propTypes = {
  text: PropTypes.string,
};

export default Header;
