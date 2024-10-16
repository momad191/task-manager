"use client";
import { useDispatch, useSelector } from "react-redux";
import { fetchApiUsers } from "../redux/slice";
import { useEffect } from "react";

export default function Page() {
  const dispatch = useDispatch();
  const users = useSelector((data) => data.usersData.userAPIData);

  useEffect(() => {
    dispatch(fetchApiUsers());
  }, [dispatch]);

  return (
    <div>
      <h1>User list from API</h1>

      {users.map((user) => (
        <li key={user._id}>
          <strong>{user.name}</strong>: {user.email}
        </li>
      ))}
    </div>
  );
}
