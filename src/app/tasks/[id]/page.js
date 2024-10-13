import { getTaskById } from "@/data/tasks";
import Link from "next/link";
const TaskDetailsPage = ({ params: { id } }) => {
  const task = getTaskById(id);
  return (
    <div className="flex flex-col justify-center items-center p-8">
      <p className="text-5xl">{task.image}</p>
      <p>{task.name}</p>
      <p className="my-3">{task.details}</p>
      <Link
        className="bg-black text-white px-1 rounded"
        href={`/tasks/${id}/checktask`}
      >
        Check it
      </Link>
    </div>
  );
};

export default TaskDetailsPage;
