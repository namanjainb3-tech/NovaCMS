import { useState } from "react";
import { Upload } from "lucide-react";

import { useNavigate } from "react-router-dom";
import PublishModal from "./PublishModal";
import { publishWebsite } from "../../../services/api"; 
import { useNotifications } from "../../../context/NotificationContext";

export default function PublishButton() {
  const [open, setOpen] = useState(false);
  const [publishing, setPublishing] = useState(false);
  const { addNotification } = useNotifications();
  const navigate = useNavigate();

  const handlePublish = async () => {
    try {
      setPublishing(true);

      await publishWebsite();

      addNotification({
      type: "success",
      title: "Website Published",
      message: "Your website has been published successfully.",
      });

      setOpen(false);
      
      setTimeout(() => {
        navigate("/");
      }, 800);

    } catch (err) {
      console.error(err);

      addNotification({
        type: "error",
        title: "Publish Failed",
        message: "Unable to publish the website. Please try again.",
      });

    } finally {
      setPublishing(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 radius-theme-sm bg-violet-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-violet-500"
      >
        <Upload size={16} />
        Publish
      </button>

      <PublishModal
        open={open}
        publishing={publishing}
        onPublish={handlePublish}
        onClose={() => {
          if (!publishing) {
            setOpen(false);
          }
        }}
      />
    </>
  );
}