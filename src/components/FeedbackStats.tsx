const FeedbackStats = ({ feedback }: any) => {
  const average =
    feedback.length === 0
      ? 0
      : feedback.reduce((acc: number, { rating }: any) => acc + rating, 0) /
        feedback.length;
  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating : {average.toFixed(1).replace(/[.,]0$/, "")}</h4>
    </div>
  );
};

export default FeedbackStats;
