import { createContext, useContext, useState } from "react";

const NotificationContext = createContext();

export function NotificationProvider({ children }) {
  const [notifications, setNotifications] = useState([]);

  function addNotification({
    type = "info",
    title,
    message,
  }) {
    const notification = {
      id: crypto.randomUUID(),
      type,
      title,
      message,
      read: false,
      createdAt: new Date(),
    };

    setNotifications((prev) => [
      notification,
      ...prev,
    ]);
  }

  function markAllAsRead() {
    setNotifications((prev) =>
      prev.map((n) => ({
        ...n,
        read: true,
      }))
    );
  }

  function removeNotification(id) {
    setNotifications((prev) =>
      prev.filter((n) => n.id !== id)
    );
  }

  function clearNotifications() {
    setNotifications([]);
  }

  const unreadCount = notifications.filter(
    (n) => !n.read
  ).length;

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        unreadCount,

        addNotification,
        removeNotification,
        clearNotifications,
        markAllAsRead,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotifications() {
  return useContext(NotificationContext);
}