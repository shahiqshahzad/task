import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listCards } from "../../actions/userCardAction";
import Card from "../subcomponets/Card";
const UserDashboard = () => {
  const dispatch = useDispatch();
  const cardList = useSelector((state) => state.cardList);
  const { loading, error, cards } = cardList;

  useEffect(() => {
    dispatch(listCards());
  }, [dispatch]);
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">User Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {cards.map((item) => (
          <Card item={item} />
        ))}
      </div>
    </div>
  );
};

export default UserDashboard;
