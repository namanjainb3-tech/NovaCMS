import Card from "../../../ui/Card";
import Button from "../../../ui/Button";

export default function GeneralTab({
    settings,
    updateSection,
    saveSettings,
  }) {
  return (
    <div className="space-y-8">

      <div>
        <h2 className="text-2xl font-semibold text-white">
          General
        </h2>

        <p className="mt-2 text-sm text-zinc-400">
          Manage your website's basic information and regional settings.
        </p>
      </div>

      <Card className="p-6">

        <div className="grid gap-6">

          <div>
            <label className="mb-2 block text-sm font-medium text-white">
              Website Name
            </label>

            <input
            type="text"
            value={settings.general.siteName}
            onChange={(e) =>
                updateSection("general", {
                siteName: e.target.value,
                })
            }
            className="radius-theme w-full border border-zinc-700 bg-zinc-900 px-4 py-3 text-white outline-none transition focus:border-accent"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-white">
              Website URL
            </label>

            <input
            type="text"
            value={settings.general.siteUrl}
            onChange={(e) =>
                updateSection("general", {
                siteUrl: e.target.value,
                })
            }
            className="radius-theme w-full border border-zinc-700 bg-zinc-900 px-4 py-3 text-white outline-none transition focus:border-accent"
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2">

            <div>
              <label className="mb-2 block text-sm font-medium text-white">
                Language
              </label>

                <select
                value={settings.general.language}
                onChange={(e) =>
                    updateSection("general", {
                    language: e.target.value,
                    })
                }
                className="radius-theme w-full border border-zinc-700 bg-zinc-900 px-4 py-3 text-white outline-none transition focus:border-accent"
                >
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
                </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-white">
                Timezone
              </label>

                <select
                value={settings.general.timezone}
                onChange={(e) =>
                    updateSection("general", {
                    timezone: e.target.value,
                    })
                }
                className="radius-theme w-full border border-zinc-700 bg-zinc-900 px-4 py-3 text-white outline-none transition focus:border-accent"
                >
                <option value="Asia/Kolkata">Asia/Kolkata</option>
                <option value="UTC">UTC</option>
                <option value="America/New_York">America/New_York</option>
                </select>
            </div>

          </div>

        </div>

      </Card>

      <div className="flex justify-end">
        <Button
        onClick={() => saveSettings(settings)}
        >
        Save Changes
        </Button>
      </div>

    </div>
  );
}