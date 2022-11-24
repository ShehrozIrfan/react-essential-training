import { useState } from "react";

const Feedback = () => {
  const [score, setScore] = useState(10);
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (score < 5 && comment.length < 10) {
      alert("Please write in detail, why your experience was bad!");
    }

    setScore(10);
    setComment("");
  };

  return (
    <div className="App">
      <h1>Feedback Form</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Rating:</label>
            <div>
              <input
                type="range"
                value={score}
                min="0"
                max="10"
                onChange={(e) => setScore(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label>Comment:</label>
            <div>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </div>
          </div>
          <div>
            <button disabled={!comment} type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
