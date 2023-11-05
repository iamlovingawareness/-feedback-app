import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import Header from "./components/Header";
import FeedbackData from "./data/Feedbackdata";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
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

  const addFeedback = (newFeedback: any) => {
    newFeedback.id = uuidv4();
    console.log(newFeedback);
    setfeedback([...feedback, newFeedback]);
    // ([...feedback,{...newFeedback,id:feedback.length+1}])
  };
  return (
    <>
      <Router>
        <Header text="Feedback UI" />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FeedbackStats feedback={feedback} />
                  <FeedbackForm handleAdd={addFeedback} />
                  <FeedbackList
                    feedback={feedback}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                    handleSubmit={handleSubmit}
                  />
                  <AboutIconLink />
                </>
              }
            ></Route>
            <Route path="/about" element={<AboutPage />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
