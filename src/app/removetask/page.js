"use client";
import { useDispatch, useSelector } from "react-redux";
import { removeTask } from "../redux/tasksSlice";

export default function Page() {
  const taskData = useSelector((data) => data.tasks.tasks);
  const dispatch = useDispatch();

  return (
    <div className="display-user">
      <h1>Remove User Page</h1>
      {taskData.map((item) => (
        <div className="user-item" key={item.id}>
          <div>{item.t_name}</div>
          <div>{item.t_desc}</div>
          <button onClick={() => dispatch(removeTask(item.id))}>
            Remove User
          </button>
        </div>
      ))}
    </div>
  );
}
