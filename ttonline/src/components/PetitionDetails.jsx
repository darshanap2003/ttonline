import React, { useState } from "react";
import Confetti from "react-confetti";

const PetitionDetails = () => {
  const [signed, setSigned] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleSignPetition = () => {
    setSigned(true);
  };

  const handleCommentSubmit = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, { user: "John Doe", comment: newComment }]);
      setNewComment("");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <img
        src="https://via.placeholder.com/300x200"
        alt="Sample Petition"
      />
      <h1>Sample Petition Title</h1>
      <p>
        This is a sample petition description. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.
      </p>
      {signed ? (
        <Confetti />
      ) : (
        <button onClick={handleSignPetition}>Sign the petition</button>
      )}
      {signed && <p>Signed by: John Doe</p>}

      <div>
        <h2>Comments</h2>
        <textarea
          rows="4"
          cols="50"
          placeholder="Leave a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button onClick={handleCommentSubmit}>Submit Comment</button>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>
              <strong>{comment.user}</strong>: {comment.comment}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PetitionDetails;