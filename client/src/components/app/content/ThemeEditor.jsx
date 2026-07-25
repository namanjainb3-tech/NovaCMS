import { useCMS } from "../../../context/CMSContext";

const colors = [
  { name: "Violet", value: "#7C3AED" },
  { name: "Blue", value: "#2563EB" },
  { name: "Emerald", value: "#059669" },
  { name: "Orange", value: "#EA580C" },
  { name: "Rose", value: "#E11D48" },
  { name: "Slate", value: "#475569" },
];

const presets = [
  {
    id: "builder",
    name: "Builder",
    accent: "#7C3AED",
    background: "#020617",
    font: "Inter",
    radius: "Large",
  },
  {
    id: "linear",
    name: "Linear",
    accent: "#2563EB",
    background: "#09090B",
    font: "Manrope",
    radius: "Medium",
  },
  {
    id: "framer",
    name: "Framer",
    accent: "#E11D48",
    background: "#18181B",
    font: "Outfit",
    radius: "Large",
  },
  {
    id: "vercel",
    name: "Vercel",
    accent: "#ffffff",
    background: "#000000",
    font: "Geist",
    radius: "Small",
  },
];

const backgrounds = [
    {
      name: "Original",
      value: "#020617", // Tailwind Slate-950
    },
    {
      name: "Midnight",
      value: "#09090B",
    },
    {
      name: "Zinc",
      value: "#18181B",
    },
    {
      name: "Slate",
      value: "#0F172A",
    },
    {
      name: "Black",
      value: "#000000",
    },
  ];

  const radiusOptions = [
    {
      name: "Small",
      value: "Small",
    },
    {
      name: "Medium",
      value: "Medium",
    },
    {
      name: "Large",
      value: "Large",
    },
    {
      name: "Extra Large",
      value: "ExtraLarge",
    },
  ];

  const fonts = [
    {
      name: "Inter",
      value: "Inter",
      preview: "Aa",
    },
    {
      name: "Manrope",
      value: "Manrope",
      preview: "Aa",
    },
    {
      name: "Poppins",
      value: "Poppins",
      preview: "Aa",
    },
    {
      name: "Outfit",
      value: "Outfit",
      preview: "Aa",
    },
    {
      name: "Plus Jakarta Sans",
      value: "Plus Jakarta Sans",
      preview: "Aa",
    },
    {
      name: "DM Sans",
      value: "DM Sans",
      preview: "Aa",
    },
  ];

export default function ThemeEditor() {
  const {
    getSection,
    updateSection,
  } = useCMS();

  const data = getSection("theme");

  function update(field, value) {
    updateSection("theme", {
      ...data,
      [field]: value,
    });
  }

  function applyPreset(preset) {
    updateSection("theme", {
      ...data,
      accent: preset.accent,
      background: preset.background,
      font: preset.font,
      radius: preset.radius,
    });
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold text-white">
          Theme
        </h2>

        <p className="mt-1 text-sm text-zinc-400">
          Customize the look and feel of your website.
        </p>
      </div>

      <div className="radius-theme border border-zinc-800 bg-zinc-900 p-6">
        <h3 className="mb-5 text-lg font-medium text-white">
          Accent Color
        </h3>

        <div className="flex flex-wrap gap-4">
          {colors.map((color) => {
            const active = data.accent === color.value;

            return (
              <button
                key={color.value}
                type="button"
                onClick={() => update("accent", color.value)}
                className={`flex flex-col items-center gap-2 radius-theme-sm border p-3 transition-all duration-200 ${
                  active
                    ? "border-white ring-2 ring-white"
                    : "border-zinc-700 hover:border-zinc-500"
                }`}
              >
                <div
                  className="h-10 w-10 rounded-full"
                  style={{
                    backgroundColor: color.value,
                  }}
                />

                <span className="text-xs text-zinc-300">
                  {color.name}
                </span>
              </button>
            );
          })}
        </div>

        <h3 className="mb-5 text-lg font-medium text-white my-4">
            Background
        </h3>

        <div className="flex flex-wrap gap-4">
            {backgrounds.map((bg) => {
            const active = data.background === bg.value;

            return (
                <button
                key={bg.value}
                type="button"
                onClick={() => update("background", bg.value)}
                className={`flex flex-col items-center gap-2 radius-theme-sm border p-3 transition-all duration-200 ${
                    active
                    ? "border-white ring-2 ring-white"
                    : "border-zinc-700 hover:border-zinc-500"
                }`}
                >
                <div
                    className="h-10 w-10 rounded-full border border-zinc-700"
                    style={{
                    backgroundColor: bg.value,
                    }}
                />

                <span className="text-xs text-zinc-300">
                    {bg.name}
                </span>
                </button>
            );
            })}
        </div>

        <h3 className="my-5 text-lg font-medium text-white">
          Typography
        </h3>

        <div className="grid grid-cols-2 gap-4">
          {fonts.map((font) => {
            const active = data.font === font.value;

            return (
              <button
                key={font.value}
                type="button"
                onClick={() => update("font", font.value)}
                className={`radius-theme-sm border p-4 text-left transition-all duration-200 ${
                  active
                    ? "border-white ring-2 ring-white"
                    : "border-zinc-700 hover:border-zinc-500"
                }`}
              >
                <div
                  className="text-3xl text-white"
                  style={{
                    fontFamily: `"${font.value}", sans-serif`,
                  }}
                >
                  Aa
                </div>

                <p
                  className="mt-3 text-sm text-white"
                  style={{
                    fontFamily: `"${font.value}", sans-serif`,
                  }}
                >
                  {font.name}
                </p>

                <p className="mt-1 text-xs text-zinc-500">
                  The quick brown fox
                </p>
              </button>
            );
          })}
        </div>

        <h3 className="my-5 text-lg font-medium text-white">
          Border Radius
        </h3>

        <div className="grid grid-cols-2 gap-4">
          {radiusOptions.map((radius) => {
            const active = data.radius === radius.value;

            return (
              <button
                key={radius.value}
                onClick={() => update("radius", radius.value)}
                className={`border p-4 transition ${
                  active
                    ? "border-white ring-2 ring-white"
                    : "border-zinc-700"
                } radius-theme-sm`}
              >
                <div
                  className="mx-auto h-14 w-20 border border-zinc-600 bg-zinc-800 transition-all"
                  style={{
                    borderRadius:
                      radius.value === "Small"
                        ? "8px"
                        : radius.value === "Medium"
                        ? "16px"
                        : radius.value === "Large"
                        ? "24px"
                        : "32px",
                  }}
                />

                <p className="mt-3 text-sm text-white">
                  {radius.name}
                </p>
              </button>
            );
          })}
        </div>

        <h3 className="my-6 text-lg font-medium text-white">
          Theme Presets
        </h3>

        <div className="grid grid-cols-2 gap-5">
          {presets.map((preset) => (
            <button
              key={preset.id}
              onClick={() => applyPreset(preset)}
              className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-600"
            >
              <div
                className="p-4"
                style={{
                  background: preset.background,
                }}
              >
                <div className="mb-4 flex gap-2">
                  <div className="h-2 w-2 rounded-full bg-red-500" />
                  <div className="h-2 w-2 rounded-full bg-yellow-500" />
                  <div className="h-2 w-2 rounded-full bg-green-500" />
                </div>

                <div
                  style={{
                    borderRadius:
                      preset.radius === "Small"
                        ? 12
                        : preset.radius === "Medium"
                        ? 16
                        : 24,
                    background: preset.accent,
                  }}
                  className="mb-4 h-10 w-full"
                />

                <div className="space-y-2">
                  <div
                    className="h-2 w-2/3"
                    style={{
                      background: "#ffffff",
                      opacity: .9,
                    }}
                  />

                  <div
                    className="h-2 w-1/2"
                    style={{
                      background: "#ffffff",
                      opacity: .6,
                    }}
                  />

                  <div
                    className="mt-5 h-8 w-28"
                    style={{
                      borderRadius:
                        preset.radius === "Small"
                          ? 12
                          : preset.radius === "Medium"
                          ? 16
                          : 24,
                      background: preset.accent,
                    }}
                  />
                </div>
              </div>

              <div className="border-t border-zinc-800 px-4 py-3 text-left">
                <p
                  className="text-sm font-semibold text-white"
                  style={{
                    fontFamily: `"${preset.font}", sans-serif`,
                  }}
                >
                  {preset.name}
                </p>

                <p className="mt-1 text-xs text-zinc-500">
                  {preset.font} • {preset.radius}
                </p>
              </div>
            </button>
          ))}
        </div>
        </div>
      </div>
  );
}