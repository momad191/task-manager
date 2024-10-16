import Link from "next/link";

export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Section */}
      <main className="flex-grow bg-gray-100 flex items-center justify-center text-center">
        <div className="container mx-auto px-4">
          {/* Welcome Text */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 transform transition-all duration-700 ease-in-out animate-bounce">
            Manage Your Daily Tasks Effortlessly   zzzz
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            This website helps you organize and manage your daily tasks
            efficiently. Whether for personal use or team collaboration,
            it&#39;s designed to streamline your workflow.
          </p>

          {/* Features Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all">
              <h3 className="text-2xl font-semibold mb-2 text-green-500">
                Add New Tasks
              </h3>
              <p className="text-gray-600">
                Easily add tasks with details and due dates to manage your
                schedule effectivel.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all">
              <h3 className="text-2xl font-semibold mb-2 text-green-500">
                Track Your Progress
              </h3>
              <p className="text-gray-600">
                Keep track of completed tasks and see your progress at a glance.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all">
              <h3 className="text-2xl font-semibold mb-2 text-green-500">
                Real-Time Collaboration
              </h3>
              <p className="text-gray-600">
                Collaborate with your team and assign tasks in real-time to stay
                in sync.
              </p>
            </div>
          </div>
          <Link href={`/tasks`}>
            <button className="bg-green-500 text-white px-6 py-3 rounded-full text-lg hover:bg-green-600 transition-all">
              Start Managing Your Tasks
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
