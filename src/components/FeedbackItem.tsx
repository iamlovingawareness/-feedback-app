import Card from "../components/shared/Card";
import { FaEdit, FaTimes } from "react-icons/fa";
const FeedbackItem = ({ item, handleDelete, handleEdit }: any) => {
  return (
    <Card reverse>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => handleDelete(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <button onClick={() => handleEdit(item.id)} className="edit">
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
};

export default FeedbackItem;
