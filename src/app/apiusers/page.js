"use client";
import { useDispatch, useSelector } from "react-redux";
import { fetchApiUsers } from "../redux/slice";
import { useEffect } from "react";

export default function Page() {
  const dispatch = useDispatch();
  const tasks = useSelector((data) => data.usersData.userAPIData);

  useEffect(() => {
    dispatch(fetchApiUsers());
  }, []);
  return (
    <div>
      <h1>User list from API</h1>

      {tasks.map((task) => (
        <li key={task._id}>
          <strong>{task.t_name}</strong>: {task.t_desc}
        </li>
      ))}
    </div>
  );
}
