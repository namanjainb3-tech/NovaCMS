import {
    CheckCircle2,
    AlertCircle,
    AlertTriangle,
    Info,
    X,
  } from "lucide-react";

import timeAgo from "../../../utils/timeAgo";
import { useNotifications } from "../../../context/NotificationContext";
  
  const ICONS = {
    success: CheckCircle2,
    error: AlertCircle,
    warning: AlertTriangle,
    info: Info,
  };
  
  const COLORS = {
    success: "text-emerald-400",
    error: "text-red-400",
    warning: "text-yellow-400",
    info: "text-cyan-400",
  };
  
  export default function NotificationItem({
    notification,
  }) {
    const Icon =
      ICONS[notification.type] || Info;

    const { removeNotification } = useNotifications();
  
    return (
        <div className="relative flex gap-3 radius-theme-sm border border-zinc-800 bg-zinc-900 p-4 transition hover:bg-zinc-800/70">
            
        <button
            onClick={() => removeNotification(notification.id)}
            className="absolute right-3 top-3 rounded p-1 text-zinc-500 transition hover:bg-zinc-800 hover:text-white"
        >
            <X size={14} />
        </button>
        
        <Icon
          className={`mt-0.5 h-5 w-5 ${COLORS[notification.type]}`}
        />
  
        <div className="flex-1">
  
          <h4 className="font-medium text-white">
            {notification.title}
          </h4>
  
          <p className="mt-1 text-sm text-zinc-400">
            {notification.message}
          </p>
  
          <span className="mt-2 block text-xs text-zinc-500">
          {timeAgo(notification.createdAt)}
          </span>
  
        </div>
  
      </div>
    );
  }