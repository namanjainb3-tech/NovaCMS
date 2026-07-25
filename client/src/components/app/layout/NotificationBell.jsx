import { useEffect, useRef, useState } from "react";

import { Bell } from "lucide-react";

import { useNotifications } from "../../../context/NotificationContext";

import NotificationDropdown from "./NotificationDropdown";

export default function NotificationBell() {

  const [open, setOpen] =
    useState(false);

  const bellRef = useRef(null);

  const {
    unreadCount,
    markAllAsRead,
  } = useNotifications();

  function toggle() {

    if (!open) {
      markAllAsRead();
    }

    setOpen((prev) => !prev);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        bellRef.current &&
        !bellRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    }
  
    document.addEventListener(
      "mousedown",
      handleClickOutside
    );
  
    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  return (

    <div
    ref={bellRef}
    className="relative"
    >

      <button
        onClick={toggle}
        className="relative radius-theme-sm border border-zinc-800 bg-zinc-900 p-3 transition hover:bg-zinc-800"
      >

        <Bell
          size={18}
          className="text-zinc-300"
        />

        {unreadCount > 0 && (

          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">

            {unreadCount}

          </span>

        )}

      </button>

      <NotificationDropdown
        open={open}
      />

    </div>

  );
}