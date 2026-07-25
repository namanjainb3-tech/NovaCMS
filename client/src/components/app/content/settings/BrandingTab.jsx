import Card from "../../../ui/Card";
import Button from "../../../ui/Button";

export default function BrandingTab({
    settings,
    updateSection,
    saveSettings,
  }) {
  return (
    <div className="space-y-8">

      <div>
        <h2 className="text-2xl font-semibold text-white">
          Branding
        </h2>

        <p className="mt-2 text-sm text-zinc-400">
          Customize your website's brand identity and assets.
        </p>
      </div>

      <Card className="p-6">

        <div className="space-y-6">

          <div>
            <label className="mb-2 block text-sm font-medium text-white">
              Company Name
            </label>

            <input
            type="text"
            value={settings.branding.companyName}
            onChange={(e) =>
                updateSection("branding", {
                companyName: e.target.value,
                })
            }
            className="radius-theme w-full border border-zinc-700 bg-zinc-900 px-4 py-3 text-white outline-none transition focus:border-accent"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-white">
              Logo URL
            </label>

            <input
            type="text"
            value={settings.branding.logo}
            onChange={(e) =>
                updateSection("branding", {
                logo: e.target.value,
                })
            }
            className="radius-theme w-full border border-zinc-700 bg-zinc-900 px-4 py-3 text-white outline-none transition focus:border-accent"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-white">
              Favicon URL
            </label>

            <input
            type="text"
            value={settings.branding.favicon}
            onChange={(e) =>
                updateSection("branding", {
                favicon: e.target.value,
                })
            }
            className="radius-theme w-full border border-zinc-700 bg-zinc-900 px-4 py-3 text-white outline-none transition focus:border-accent"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-white">
              Copyright
            </label>

            <input
            type="text"
            value={settings.branding.copyright}
            onChange={(e) =>
                updateSection("branding", {
                copyright: e.target.value,
                })
            }
            className="radius-theme w-full border border-zinc-700 bg-zinc-900 px-4 py-3 text-white outline-none transition focus:border-accent"
            />
          </div>

        </div>

      </Card>

      <div className="flex justify-end">
        <Button
        onClick={async () => {
            const result = await saveSettings(settings);
        }}
        >
        Save Branding
        </Button>
      </div>

    </div>
  );
}