import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { logout } from "../../actions/userActions";
import data from "../data/CardsData";

const AdminDashboard = () => {
  const [cardData, setCardData] = useState([]);
  const [totalPostings, setTotalPostings] = useState(0);
  const [latestComments, setLatestComments] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  useEffect(() => {
    const card = localStorage.getItem("cards");
    const cardLocalStorage = card ? JSON.parse(card) : null;
    const cardData = cardLocalStorage ? cardLocalStorage : data;

    setCardData(cardData);
    setTotalPostings(cardData.length);
    setLatestComments(
      cardData
        .flatMap((item) => item.comments)
        .reverse()
        .slice(0, 2)
    );
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-500 text-white px-4 py-2 flex justify-between">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <button
          className="text-white font-bold bg-red-500 px-4 py-2 rounded"
          onClick={handleLogout}
        >
          Logout
        </button>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-2">Total Postings</h2>
            <p className="text-3xl">{totalPostings}</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-2">Latest Comments</h2>
            <ul className="space-y-4">
              {latestComments.map((comment) => (
                <li key={comment.id} className="flex items-center">
                  <div className="bg-blue-100 rounded-full h-8 w-8 flex items-center justify-center mr-2">
                    <img
                      src={comment.userImage}
                      alt={comment.user}
                      className="h-8 w-8 rounded-full"
                    />
                  </div>
                  <p>{comment.comment}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <h2 className="text-lg font-semibold my-6">Comment Feed</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardData.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded-lg shadow-lg">
              <div className="h-8 flex items-center  mb-2">
                <img
                  src={item.Image}
                  alt={item.name}
                  className="h-8 w-8 rounded-full"
                />
                <p className="font-bold">{item.name}</p>
              </div>
              <p>{item.text}</p>
              <h3 className="text-lg font-semibold mt-4 mb-2">Comments</h3>
              <ul className="space-y-2">
                {item.comments.map((comment) => (
                  <li key={comment.id} className="flex">
                    <div className="bg-blue-100 rounded-full h-8 w-8 flex items-center justify-center mr-2">
                      <img
                        src={comment.userImage}
                        alt={comment.user}
                        className="h-8 w-8 rounded-full"
                      />
                    </div>
                    <p>{comment.comment}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
