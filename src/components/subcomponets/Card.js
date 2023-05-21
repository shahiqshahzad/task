import React, { useState } from "react";
import { addComment, addLike } from "../../actions/userCardAction";
import { useDispatch } from "react-redux";
import gamer from "../../assets/images/user/gamer.png";

const Card = ({ item }) => {
  const [newComment, setNewComment] = useState("");
  const dispatch = useDispatch();

  const handleLikeButtonClick = (postId) => {
    dispatch(addLike(postId));
  };
  const handleAddComment = (postId) => {
    dispatch(addComment(postId, newComment, gamer));
    setNewComment((prevNewComment) => ({
      ...prevNewComment,
      [postId]: {},
    }));
  };
  return (
    <div className="bg-white rounded-lg p-4 shadow">
      <div className="flex items-center mb-4">
        <img
          className="w-10 h-10 rounded-full mr-2"
          src={item.Image}
          alt="User 1 Avatar"
        />
        <h2 className="text-lg font-bold">{item.name}</h2>
      </div>
      <p className="text-sm text-gray-700 mb-4">{item.text}</p>
      <div className="flex justify-between items-center">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-full"
          onClick={() => handleLikeButtonClick(item.id)}
        >
          Like ({item.likes})
        </button>
        <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-full">
          Share
        </button>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-bold mb-2">Comments</h3>
        <div className="bg-gray-100 p-2 rounded-lg">
          {/* Comment 1 */}
          {item.comments.map((comment) => (
            <div key={comment.id} className="flex items-center mb-2">
              <img
                className="w-8 h-8 rounded-full mr-2"
                src={comment.userImage}
                alt="User 2 Avatar"
              />
              <p className="text-sm text-gray-700">{comment.comment}</p>
            </div>
          ))}
        </div>
        <div className="mt-2 flex">
          <input
            className="border border-gray-300 rounded-full px-4 py-2 w-full"
            type="text"
            placeholder="Write a comment..."
            onChange={(e) =>
              setNewComment((prevNewComment) => ({
                ...prevNewComment,
                [item.id]: {
                  ...prevNewComment[item.id],
                  comment: e.target.value,
                },
              }))
            }
            value={newComment[item.id]?.comment || ""}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-full ml-2"
            onClick={() => handleAddComment(item.id)}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
