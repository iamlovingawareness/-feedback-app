import FeedbackItem from "./FeedbackItem";

const FeedbackList = ({ feedback, handleDelete, handleEdit }: any) => {
  return (
    <>
      {!feedback.length && <p>No feedback items</p>}
      {feedback.length &&
        feedback.map((item: any) => {
          return (
            <FeedbackItem
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              key={`${item.id}`}
              item={item}
            />
          );
        })}
    </>
  );
};

export default FeedbackList;
