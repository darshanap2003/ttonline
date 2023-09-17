import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const PetitionDetails = () => {
  const { user, isAuthenticated } = useAuth0();
  const [signed, setSigned] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleSignPetition = () => {
    if (isAuthenticated) {
      setSigned(true);
    }
  };

  const handleCommentSubmit = () => {
    if (isAuthenticated && newComment.trim() !== "") {
      setComments([...comments, { user: user.name, comment: newComment }]);
      setNewComment("");
    }
  };

  return (
    <div>
      <img
        src="https://via.placeholder.com/300x200"
        alt="Petition Image"
      />
      <h1>Sample Petition Title</h1>
      <p>
        This is a sample petition description. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.
      </p>
      <button onClick={handleSignPetition}>Sign the petition</button>
      {signed && <p>Signed by: {user.name}</p>}

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
