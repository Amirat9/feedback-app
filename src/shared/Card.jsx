const Card = ({ children }) => {
  return (
    <div className='bg-white rounded-3xl flex items-center justify-center'>
      {children}
    </div>
  );
};

export default Card;
