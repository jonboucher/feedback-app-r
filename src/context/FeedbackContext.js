import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      rating: 10,
      text: 'This is feedback item 1 coming from the backend',
    },
    {
      id: 2,
      rating: 8,
      text: 'This is feedback item 2 coming from the backend',
    },
    {
      id: 3,
      rating: 10,
      text: 'This is feedback item 3 coming from the backend',
    },
  ]);

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(
        feedback.filter((item) => {
          return item.id !== id;
        })
      );
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  return (
    <FeedbackContext.Provider value={{ feedback, deleteFeedback, addFeedback }}>{children}</FeedbackContext.Provider>
  );
};

export default FeedbackContext;
