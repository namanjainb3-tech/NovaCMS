import { useRef } from "react";

import Card from "../../../ui/Card";
import Button from "../../../ui/Button";
import api from "../../../../services/api";
import PublishButton from "../../layout/PublishButton";

export default function PublishingTab({
    settings,
    updateSection,
    saveSettings,
    resetSettings,
  }) {
    const fileInputRef = useRef(null);

    const exportSettings = () => {
      try {
        const data = JSON.stringify(settings, null, 2);
    
        const blob = new Blob([data], {
          type: "application/json",
        });
    
        const url = URL.createObjectURL(blob);
    
        const link = document.createElement("a");
    
        link.href = url;
        const filename = `${
          settings.general.siteName || "website"
        }-settings.json`;
        
        link.download = filename;
    
        document.body.appendChild(link);
        link.click();
    
        document.body.removeChild(link);
    
        URL.revokeObjectURL(url);
      } catch (err) {
        console.error("Export failed:", err);
      }
    };

    const importSettings = (event) => {
      const file = event.target.files?.[0];
    
      if (!file) return;
    
      const reader = new FileReader();
    
      reader.onload = async (e) => {
        try {
          const imported = JSON.parse(e.target.result);
    
          await saveSettings(imported);
          } catch (err) {
          console.error(err);
          alert("Invalid settings file.");
        }
      };
    
      reader.readAsText(file);
    };

    const handleReset = async () => {
      const confirmed = window.confirm(
        "Are you sure you want to reset all settings to their default values?"
      );
    
      if (!confirmed) return;
    
      const success = await resetSettings();
    
      if (!success) {
        alert("Failed to reset settings.");
      }
    };

  return (
    <div className="space-y-8">

      <div>
        <h2 className="text-2xl font-semibold text-white">
          Publishing
        </h2>

        <p className="mt-2 text-sm text-zinc-400">
          Manage your website publishing workflow.
        </p>
      </div>

      <Card className="p-6">
      <input
        ref={fileInputRef}
        type="file"
        accept=".json"
        hidden
        onChange={importSettings}
      />

        <div className="space-y-6">

          <div className="grid gap-6 md:grid-cols-2">

            <div>
              <label className="mb-2 block text-sm font-medium text-white">
                Website Status
              </label>

                <select
                value={settings.publishing.status}
                onChange={(e) =>
                    updateSection("publishing", {
                    status: e.target.value,
                    })
                }
                className="radius-theme w-full border border-zinc-700 bg-zinc-900 px-4 py-3 text-white outline-none focus:border-accent"
                >
                <option value="published">Published</option>
                <option value="draft">Draft</option>
                <option value="maintenance">Maintenance</option>
                </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-white">
                Last Published
              </label>

            <input
            disabled
            value={
                settings.publishing.lastPublished
                ? new Date(
                    settings.publishing.lastPublished
                    ).toLocaleString()
                : "Never Published"
            }
            className="radius-theme w-full border border-zinc-700 bg-zinc-800 px-4 py-3 text-zinc-400"
            />
            </div>

          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-white">
              Preview URL
            </label>

            <input
            type="text"
            value={settings.publishing.previewUrl}
            onChange={(e) =>
                updateSection("publishing", {
                previewUrl: e.target.value,
                })
            }
            className="radius-theme w-full border border-zinc-700 bg-zinc-900 px-4 py-3 text-white outline-none transition focus:border-accent"
            />
          </div>

          <div className="border-t border-zinc-800 pt-8">

            <h3 className="mb-6 text-lg font-semibold text-white">
                Maintenance Page
            </h3>

            <div className="space-y-6">

                <div>
                    <label className="mb-2 block text-sm font-medium text-white">
                        Maintenance Title
                    </label>

                    <input
                        type="text"
                        value={settings.publishing.maintenanceTitle}
                        onChange={(e) =>
                            updateSection("publishing", {
                                maintenanceTitle: e.target.value,
                            })
                        }
                        className="radius-theme w-full border border-zinc-700 bg-zinc-900 px-4 py-3 text-white outline-none focus:border-accent"
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium text-white">
                        Maintenance Message
                    </label>

                    <textarea
                        rows={4}
                        value={settings.publishing.maintenanceMessage}
                        onChange={(e) =>
                            updateSection("publishing", {
                                maintenanceMessage: e.target.value,
                            })
                        }
                        className="radius-theme w-full border border-zinc-700 bg-zinc-900 px-4 py-3 text-white outline-none resize-none focus:border-accent"
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium text-white">
                        Estimated Downtime
                    </label>

                    <input
                        type="text"
                        value={settings.publishing.maintenanceETA}
                        onChange={(e) =>
                            updateSection("publishing", {
                                maintenanceETA: e.target.value,
                            })
                        }
                        className="radius-theme w-full border border-zinc-700 bg-zinc-900 px-4 py-3 text-white outline-none focus:border-accent"
                    />
                </div>

            </div>

        </div>

          <div className="flex flex-wrap gap-4">
            <PublishButton />
            
            <Button
              variant="secondary"
              onClick={exportSettings}
            >
              Export Settings
            </Button>

            <Button
              variant="secondary"
              onClick={() => fileInputRef.current?.click()}
            >
              Import Settings
            </Button>

            <Button
              variant="secondary"
              onClick={handleReset}
            >
              Reset to Defaults
            </Button>
          </div>

        </div>

      </Card>

    </div>
  );
}