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

  const handleSubmit = (text: string) => {
    console.log("text is ", text);
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
          handleSubmit={handleSubmit}
        />
      </div>
    </>
  );
}

export default App;
