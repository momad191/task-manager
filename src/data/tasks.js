export const tasks = [
  {
    id: "1",
    image: "📅",
    name: "Schedule Meeting",
    details: "Team sync-up at 10 AM",
  },
  {
    id: "2",
    image: "📧",
    name: "Email Client",
    details: "Send project update to the client",
  },
  {
    id: "3",
    image: "💻",
    name: "Code Review",
    details: "Review pull requests from the team",
  },
  {
    id: "4",
    image: "📊",
    name: "Prepare Report",
    details: "Q3 performance report by 5 PM",
  },
  {
    id: "5",
    image: "🔍",
    name: "Research",
    details: "Find best practices for code optimization",
  },
  {
    id: "6",
    image: "📝",
    name: "Document Code",
    details: "Update project documentation on Confluence",
  },
  {
    id: "7",
    image: "📞",
    name: "Client Call",
    details: "Discuss new requirements with the client",
  },
  {
    id: "8",
    image: "🤝",
    name: "Team Collaboration",
    details: "Work with marketing on the new campaign",
  },
  {
    id: "9",
    image: "📂",
    name: "Organize Files",
    details: "Sort and archive old project files",
  },
  {
    id: "10",
    image: "🗂️",
    name: "Update CRM",
    details: "Add new client details to CRM",
  },
  {
    id: "11",
    image: "📱",
    name: "Follow-up Call",
    details: "Check status of pending invoices",
  },
  {
    id: "12",
    image: "📦",
    name: "Order Supplies",
    details: "Restock office supplies",
  },
  {
    id: "13",
    image: "🔐",
    name: "Update Passwords",
    details: "Change passwords for security",
  },
  {
    id: "14",
    image: "💬",
    name: "Team Feedback",
    details: "Collect feedback for performance reviews",
  },
  {
    id: "15",
    image: "🎯",
    name: "Set Goals",
    details: "Define Q4 objectives for the team",
  },
  {
    id: "16",
    image: "🚪",
    name: "Book Conference Room",
    details: "Reserve room for the next client meeting",
  },
  {
    id: "17",
    image: "📑",
    name: "File Expense Report",
    details: "Submit travel expenses for reimbursement",
  },
  {
    id: "18",
    image: "🎥",
    name: "Record Presentation",
    details: "Prepare and record the product demo",
  },
  {
    id: "19",
    image: "🖨️",
    name: "Print Documents",
    details: "Print handouts for the team meeting",
  },
  {
    id: "20",
    image: "🛠️",
    name: "System Maintenance",
    details: "Run updates on office network systems",
  },
];

export const getAllTasks = () => {
  return tasks;
};

export const getTaskById = (id) => {
  const found = tasks.find((task) => task.id === id);
  return found;
};
