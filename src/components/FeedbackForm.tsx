import { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";

const FeedbackForm = ({ handleSubmit }: any) => {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(0);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const handleTextChange = (e: any) => {
    if (text === "") {
      // empty text - buttton disabled and no message
      setBtnDisabled(true);
      setMessage("");
    } else if (text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage("Review must have more than 10 characters");
    } else {
      setBtnDisabled(false);
      setMessage("");
    }
    setText(e.target.value);
  };

  return (
    <Card>
      <form>
        <h2>How would you rate your services with us ?</h2>
        <RatingSelect />
        <div className="input-group">
          <input
            type="text"
            onChange={handleTextChange}
            value={text}
            placeholder="Write a review"
          />
          <Button
            type="submit"
            isDisabled={btnDisabled}
            handleClick={() => handleSubmit(text)}
          >
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
