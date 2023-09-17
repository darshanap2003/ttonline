import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Confetti from "react-confetti";

const PetitionDetail = ({ petition }) => {
  const { user, isAuthenticated } = useAuth0();
  const [signed, setSigned] = useState(petition.signed);
  const [comments, setComments] = useState(petition.comments);
  const [newComment, setNewComment] = useState("");

  const handleSignPetition = () => {
    if (isAuthenticated) {
      setSigned(true);
    }
  };

  const handleCommentSubmit = () => {
    if (isAuthenticated && newComment.trim() !== "") {
      const updatedComments = [...comments, { user: user.name, comment: newComment }];
      setComments(updatedComments);
      setNewComment("");
    }
  };

  return (
    <div>
      <img src={petition.img} alt="Petition Image" />
      <h1>{petition.title}</h1>
      <p>{petition.description}</p>
      {signed ? (
        <Confetti />
      ) : (
        <button onClick={handleSignPetition}>Sign the petition</button>
      )}
      {signed && <p>Signed by: {petition.signatures.join(", ")}</p>}

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

export default PetitionDetail;