import { getTaskById } from "@/data/tasks";
import Link from "next/link";
const TaskDetailsPage = ({ params: { id } }) => {
  const task = getTaskById(id);
  return (
    <div className="flex flex-col justify-center items-center p-8">
      <p>{task.t_name}</p>
      <p className="my-3">{task.t_desc}</p>
      <Link href={`/tasks/${id}/checktask`}>
        <button className="flex sbg-green-500 bg-green-400 hover:bg-green-600 text-black font-bold rounded-full p-4 transition-all duration-300 ease-in-out relative shadow-lg transform hover:scale-110 focus:outline-none ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
          completed sucessfully
        </button>
      </Link>
    </div>
  );
};

export default TaskDetailsPage;
