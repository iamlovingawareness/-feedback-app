import { useState } from "react";
import Header from "./components/Header";
import FeedbackData from "./data/Feedbackdata";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

function App() {
  const [feedback, setfeedback] = useState(FeedbackData);
  const handleEdit = (id: any) => {
    console.log(`Editing id : ${id}`);
  };
  const handleDelete = (id: any) => {
    setfeedback(feedback.filter((item) => item.id !== id));
  };
  return (
    <>
      <div className="container">
        <Header text="Feedback UI" />
        <FeedbackStats feedback={feedback} />
        <FeedbackForm />
        <FeedbackList
          feedback={feedback}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      </div>
    </>
  );
}

export default App;
