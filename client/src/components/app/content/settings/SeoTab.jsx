import Card from "../../../ui/Card";
import Button from "../../../ui/Button";

export default function SeoTab({
    settings,
    updateSection,
    saveSettings,
  }) {
  return (
    <div className="space-y-8">

      <div>
        <h2 className="text-2xl font-semibold text-white">
          SEO Settings
        </h2>

        <p className="mt-2 text-sm text-zinc-400">
          Configure how your website appears in search engines and on social media.
        </p>
      </div>

      <Card className="p-6">

        <div className="space-y-6">

          <div>
            <label className="mb-2 block text-sm font-medium text-white">
              Meta Title
            </label>

            <input
            type="text"
            value={settings.seo.metaTitle}
            onChange={(e) =>
                updateSection("seo", {
                metaTitle: e.target.value,
                })
            }
            className="radius-theme w-full border border-zinc-700 bg-zinc-900 px-4 py-3 text-white outline-none transition focus:border-accent"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-white">
              Meta Description
            </label>

            <textarea
            rows={4}
            value={settings.seo.metaDescription}
            onChange={(e) =>
                updateSection("seo", {
                metaDescription: e.target.value,
                })
            }
            className="radius-theme w-full resize-none border border-zinc-700 bg-zinc-900 px-4 py-3 text-white outline-none transition focus:border-accent"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-white">
              Keywords
            </label>

            <input
            type="text"
            value={settings.seo.keywords}
            onChange={(e) =>
                updateSection("seo", {
                keywords: e.target.value,
                })
            }
            className="radius-theme w-full border border-zinc-700 bg-zinc-900 px-4 py-3 text-white outline-none transition focus:border-accent"
            />

            <p className="mt-2 text-xs text-zinc-500">
              Separate keywords with commas.
            </p>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-white">
              Open Graph Image
            </label>

            <input
            type="text"
            value={settings.seo.ogImage}
            onChange={(e) =>
                updateSection("seo", {
                ogImage: e.target.value,
                })
            }
            className="radius-theme w-full border border-zinc-700 bg-zinc-900 px-4 py-3 text-white outline-none transition focus:border-accent"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-white">
              Twitter Card
            </label>

            <select
            value={settings.seo.twitterCard}
            onChange={(e) =>
                updateSection("seo", {
                twitterCard: e.target.value,
                })
            }
            className="radius-theme w-full border border-zinc-700 bg-zinc-900 px-4 py-3 text-white outline-none transition focus:border-accent"
            >
            <option value="summary_large_image">
                summary_large_image
            </option>

            <option value="summary">
                summary
            </option>
            </select>
          </div>

          <div className="flex items-center justify-between radius-theme border border-zinc-800 bg-zinc-900 p-4">
            <div>
              <h3 className="text-sm font-medium text-white">
                Allow Search Engines
              </h3>

              <p className="mt-1 text-xs text-zinc-500">
                Allow Google and other search engines to index your website.
              </p>
            </div>

            <input
            type="checkbox"
            checked={settings.seo.allowIndexing}
            onChange={(e) =>
                updateSection("seo", {
                allowIndexing: e.target.checked,
                })
            }
            className="h-5 w-5 accent-[var(--accent)]"
            />
          </div>

        </div>

      </Card>

      <div className="flex justify-end">
        <Button
        onClick={() => saveSettings(settings)}
        >
        Save SEO Settings
        </Button>
      </div>

    </div>
  );
}