import FeedbackForm from './components/FeedbackForm';
import FeedbackStats from './components/FeedbackStats';
import FeedbackList from './components/FeedbackList';

const App = () => {
  return (
    <div className='container flex flex-col gap-4 m-auto max-w-3xl'>
      <FeedbackForm />
      <FeedbackStats />
      <FeedbackList />
    </div>
  );
};

export default App;
