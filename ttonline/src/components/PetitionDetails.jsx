import React, { useState } from "react";
import Confetti from "react-confetti";
import { useAuth0 } from "@auth0/auth0-react";
import image from '../../assets/gender-pay-gap.png';

const PetitionDetails = () => {
    const { user, isAuthenticated } = useAuth0();
    const [signed, setSigned] = useState(false);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");

    const handleSignPetition = () => {
        setSigned(true);
    };

    const handleCommentSubmit = () => {
        if (newComment.trim() !== "") {
            setComments([...comments, { user: user.name, comment: newComment }]);
            setNewComment("");
        }
    };

    return (
        <div className="flex flex-col items-center mt-8">
            <img
                className="w-800 h-100 mb-4 rounded"
                src={image}
                alt=""
            />
            <h1 className="text-2xl font-bold mb-2">End Wage Discrimination and Achieve Pay Equity</h1>
            <p className="text-lg mb-4">
                Stand against wage discrimination based on gender and demand equal pay for equal work. Support policies and initiatives that promote pay equity and create fair and inclusive workplaces for all.
            </p>
            <p>
                This petition aims to address the persistent issue of wage discrimination faced by women in the United States. Despite legal protections in place, gender-based pay disparities continue to exist across various industries and occupations. By signing this petition, you are advocating for fair and equal wages for all employees, regardless of gender.

                Through this campaign, we aim to raise awareness about the importance of pay equity and urge policymakers, businesses, and employers to take concrete steps to close the wage gap. By achieving pay equity, we can ensure that individuals, irrespective of their gender, receive fair compensation for their work and have equal opportunities for career advancement.

                Join this movement to support equality, eradicate wage discrimination, and strive for a more just and equitable society.


            </p>
            {signed ? (
                <Confetti />
            ) : (
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    onClick={handleSignPetition}
                >
                    Sign the petition
                </button>
            )}
            {signed && <p className="text-xl font-semibold mt-4">Signed by: {user.name}</p>}

            <div className="w-96 mt-8">
                <h2 className="text-xl font-bold mb-4">Comments</h2>
                <textarea
                    className="w-full px-4 py-2 mb-4 border rounded"
                    rows="4"
                    placeholder="Leave a comment..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                />
                <button
                    className="px-4 py-2 mb-4 bg-green-500 text-white rounded hover:bg-green-600"
                    onClick={handleCommentSubmit}
                >
                    Submit Comment
                </button>
                <ul>
                    {comments.map((comment, index) => (
                        <li key={index} className="mb-2">
                            <p className="text-lg font-bold">{comment.user}</p>
                            <p className="text-gray-600">{comment.comment}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PetitionDetails;