import { useRef, useState } from "react";
import { Upload, Image as ImageIcon } from "lucide-react";

import { uploadImage } from "../../../services/api";

export default function ImageUploader({
  value,
  onChange,
}) {
  const fileInputRef = useRef(null);

  const [uploading, setUploading] =
    useState(false);

  async function handleUpload(file) {
    if (!file) return;

    try {
      setUploading(true);

      const result =
        await uploadImage(file);

      onChange(result.url);

    } catch (err) {

      console.error(err);

    } finally {

      setUploading(false);

    }
  }

  return (
    <div className="space-y-4">
  
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) =>
          handleUpload(e.target.files?.[0])
        }
      />
  
      <div className="overflow-hidden radius-theme border border-zinc-800 bg-zinc-900">
  
        {value ? (
  
          <img
            src={`http://localhost:5000${value}`}
            alt="Preview"
            className="h-64 w-full object-cover"
          />
  
        ) : (
  
          <div className="flex h-64 flex-col items-center justify-center gap-3">
  
            <ImageIcon
              size={52}
              className="text-zinc-600"
            />
  
            <p className="text-sm text-zinc-500">
              No image selected
            </p>
  
          </div>
  
        )}
  
      </div>
  
      <div className="flex gap-3">
  
        <button
          onClick={() =>
            fileInputRef.current.click()
          }
          disabled={uploading}
          className="flex-1 radius-theme-sm bg-violet-600 py-3 font-medium text-white transition hover:bg-violet-500 disabled:opacity-60"
        >
  
          {uploading
            ? "Uploading..."
            : value
            ? "Replace Image"
            : "Upload Image"}
  
        </button>
  
        {value && (
  
          <button
            onClick={() => onChange("")}
            className="radius-theme-sm border border-red-500 px-5 text-red-400 transition hover:bg-red-500/10"
          >
  
            Remove
  
          </button>
  
        )}
  
      </div>
  
    </div>
  );
}
