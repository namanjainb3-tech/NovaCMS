import {
    AnimatePresence,
    motion,
  } from "framer-motion";
  
  import { useNotifications } from "../../../context/NotificationContext";
  
  import NotificationItem from "./NotificationItem";
  
  export default function NotificationDropdown({
    open,
  }) {
    const {
      notifications,
      clearNotifications,
    } = useNotifications();
  
    return (
      <AnimatePresence>
  
        {open && (
  
          <motion.div
            initial={{
              opacity: 0,
              y: -8,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -8,
              scale: 0.98,
            }}
            transition={{
              duration: 0.18,
            }}
            className="
            absolute
            top-14

            left-1/2
            -translate-x-1/2

            w-[calc(100vw-2rem)]
            max-w-[380px]

            z-50
            overflow-hidden
            radius-theme
            border
            border-zinc-800
            bg-zinc-950
            shadow-2xl

            sm:left-auto
            sm:translate-x-0
            sm:right-0
            sm:w-96
            sm:max-w-none
            "
            >
  
            <div className="flex items-center justify-between border-b border-zinc-800 px-5 py-4">
  
              <h3 className="font-semibold text-white">
                Notifications
              </h3>
  
              <button
                onClick={clearNotifications}
                className="text-sm text-violet-400 hover:text-violet-300"
              >
                Clear All
              </button>
  
            </div>
  
            <div className="max-h-96 space-y-3 overflow-y-auto p-3">
  
              {notifications.length === 0 ? (
  
                <div className="py-10 text-center text-sm text-zinc-500">
                  No notifications
                </div>
  
              ) : (
  
                notifications.map((notification) => (
  
                  <NotificationItem
                    key={notification.id}
                    notification={notification}
                  />
  
                ))
  
              )}
  
            </div>
  
          </motion.div>
  
        )}
  
      </AnimatePresence>
    );
  }