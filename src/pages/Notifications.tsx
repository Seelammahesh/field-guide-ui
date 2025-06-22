import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import moment from "moment";

type NotificationType = "Timesheet" | "Task" | "Project";

interface Notification {
  _id: string;
  title: string;
  message: string;
  sendername: string;
  timestamp: string;
  type: NotificationType;
  status: "read" | "unread";
}

const dummyNotifications: Notification[] = [
  {
    _id: "1",
    title: "Timesheet Submitted by",
    message: "John has submitted a new timesheet.",
    sendername: "John",
    timestamp: new Date().toISOString(),
    type: "Timesheet",
    status: "unread",
  },
  {
    _id: "2",
    title: "Task Assigned to",
    message: "You have been assigned a new task.",
    sendername: "Alice",
    timestamp: new Date().toISOString(),
    type: "Task",
    status: "read",
  },
  {
    _id: "3",
    title: "New Project Created by",
    message: "A new project has been added to your dashboard.",
    sendername: "Sateesh",
    timestamp: new Date().toISOString(),
    type: "Project",
    status: "unread",
  },
];

const Notifications: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [filter, setFilter] = useState<"all" | "new" | "unread">("all");

  useEffect(() => {
    setIsLoading(true);
    // Simulate fetching and filtering
    setTimeout(() => {
      let filtered = dummyNotifications;

      if (filter === "unread") {
        filtered = dummyNotifications.filter((n) => n.status === "unread");
      }

      setNotifications(filtered);
      setIsLoading(false);
    }, 500);
  }, [filter]);

  const handleMarkAllAsRead = () => {
    setIsLoading(true);
    setTimeout(() => {
      const updated:any = dummyNotifications.map((n) => ({ ...n, status: "read" }));
      setNotifications(updated);
      setFilter("all");
      setIsLoading(false);
      alert("All marked as read");
    }, 500);
  };

  const handleDeleteNotification = (id: string) => {
    setIsLoading(true);
    setTimeout(() => {
      const updated = notifications.filter((n) => n._id !== id);
      setNotifications(updated);
      setIsLoading(false);
      alert("Notification deleted");
    }, 500);
  };

  return (
    <>
      
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Notifications</h2>
        <p className="text-gray-500 mb-6">
          You've {notifications.filter((n) => n.status === "unread").length} unread
          notifications
        </p>

        <div className="flex flex-col justify-center gap-3 md:flex-row md:justify-between mb-4">
          <div className="flex space-x-4">
            {["all", "new", "unread"].map((type) => (
              <button
                key={type}
                className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ${
                  filter === type ? "bg-green-700" : ""
                }`}
                onClick={() => setFilter(type as typeof filter)}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
            onClick={handleMarkAllAsRead}
          >
            Mark all as read
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {notifications.map((notification) => (
            <div
              key={notification._id}
              className={`rounded-lg shadow-md p-2 flex items-center justify-between ${
                notification.status === "unread" ? "bg-green-100" : "bg-white"
              }`}
            >
              <div className="flex items-center w-full">
                {/* Icon */}
                {notification.type === "Timesheet" && (
                  <svg
                    className="w-10 h-10 mr-2 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                )}
                {notification.type === "Task" && (
                  <svg
                    className="w-10 h-10 mr-2 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2H9z"
                    />
                  </svg>
                )}
                {notification.type === "Project" && (
                  <svg
                    className="w-10 h-10 mr-2 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                )}

                <div className="flex-1">
                  <p className="font-bold text-sm md:text-md">
                    {notification.title} {notification.sendername}
                  </p>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    {notification.message}
                  </p>
                </div>
              </div>

              <div className="w-24 flex flex-col justify-center gap-2">
                <p className="text-gray-700 font-bold text-xs sm:text-sm">
                  {moment(notification.timestamp).format("YYYY-MM-DD")}
                </p>
                <MdDelete
                  className="h-6 w-6 text-red-600 ml-5 cursor-pointer"
                  onClick={() => handleDeleteNotification(notification._id)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Notifications;
