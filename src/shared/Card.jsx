const Card = ({ children }) => {
  return (
    <div className='relative bg-white rounded-3xl flex flex-col items-center justify-center'>
      {children}
    </div>
  );
};

export default Card;
