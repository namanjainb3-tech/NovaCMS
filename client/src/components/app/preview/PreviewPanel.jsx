import { useMemo, useState, useEffect } from "react";
import {
  Monitor,
  Tablet,
  Smartphone,
  Minus,
  Plus,
  ExternalLink,
} from "lucide-react";

import { useSettings } from "../../../context/SettingsContext";

import LandingPreview from "./LandingPreview";

const DEVICES = {
  desktop: {
    width: 1440,
    scale: 0.42,
    icon: Monitor,
  },
  tablet: {
    width: 1024,
    scale: 0.55,
    icon: Tablet,
  },
  mobile: {
    width: 390,
    scale: 0.9,
    icon: Smartphone,
  },
};

export default function PreviewPanel({ loading }) {
  const [device, setDevice] = useState("desktop");
  const [zoom, setZoom] = useState(100);

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const { settings } = useSettings();

  const previewUrl =
  settings?.publishing?.previewUrl?.trim() ||
  window.location.origin;

  const displayUrl = previewUrl
  .replace(/^https?:\/\//, "")
  .replace(/\/$/, "");

  const current = DEVICES[device];

  const scale = useMemo(() => {
    return current.scale * (zoom / 100);
  }, [current, zoom]);

  useEffect(() => {
    const checkScreen = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };
  
    checkScreen();
  
    window.addEventListener("resize", checkScreen);
  
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  if (loading) {
    return (
      <div className="flex h-[80vh] items-center justify-center radius-theme-lg border border-zinc-800 bg-zinc-900">
        <span className="text-zinc-400">
          Loading Preview...
        </span>
      </div>
    );
  }

  return (
    <div className="sticky top-6">

      <div className="overflow-hidden radius-theme-lg border border-zinc-800 bg-zinc-900 shadow-[0_30px_80px_rgba(0,0,0,.35)]">

        {/* Browser Header */}

        {isSmallScreen ? (

          <div className="flex items-center justify-between border-b border-zinc-800 px-3 py-2">

            <div className="flex radius-theme-sm bg-zinc-800 p-1">

              {Object.entries(DEVICES).map(([key, value]) => {
                const Icon = value.icon;

                return (
                  <button
                    key={key}
                    onClick={() => setDevice(key)}
                    className={`rounded-md p-2 transition ${
                      key === device
                        ? "bg-violet-600 text-white"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    <Icon size={15} />
                  </button>
                );
              })}

            </div>

            <button
              onClick={() => window.open(previewUrl, "_blank")}
              className="rounded-md bg-zinc-800 p-2 text-zinc-400 transition hover:text-white"
            >
              <ExternalLink size={16} />
            </button>

          </div>

        ) : (

          <div className="flex items-center justify-between border-b border-zinc-800 px-6 py-4">

            <div className="flex flex-1 items-center gap-3">

              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500" />
                <span className="h-3 w-3 rounded-full bg-yellow-500" />
                <span className="h-3 w-3 rounded-full bg-green-500" />
              </div>

              <button
                onClick={() => window.open(previewUrl, "_self")}
                title="Open website in new tab"
                className="flex w-48 items-center justify-between radius-theme-sm bg-zinc-800 px-3 py-1.5"
              >
                <span className="truncate">
                  {displayUrl}
                </span>

                <ExternalLink
                  size={14}
                  className="ml-3 shrink-0"
                />
              </button>

            </div>

            <div className="flex shrink-0 items-center gap-3">

              <div className="flex radius-theme-sm bg-zinc-800 p-0.5">

                {Object.entries(DEVICES).map(([key, value]) => {

                  const Icon = value.icon;

                  return (
                    <button
                      key={key}
                      onClick={() => setDevice(key)}
                      className={`rounded-lg p-2 transition ${
                        key === device
                          ? "bg-violet-600 text-white"
                          : "text-zinc-400 hover:text-white"
                      }`}
                    >
                      <Icon size={15} />
                    </button>
                  );
                })}

              </div>

              <div className="flex items-center gap-2 radius-theme-sm bg-zinc-800 px-3 py-2">

                <button
                  onClick={() =>
                    setZoom((z) => Math.max(50, z - 10))
                  }
                >
                  <Minus size={15} />
                </button>

                <span className="w-10 text-center text-sm">
                  {zoom}%
                </span>

                <button
                  onClick={() =>
                    setZoom((z) => Math.min(150, z + 10))
                  }
                >
                  <Plus size={15} />
                </button>

              </div>

            </div>

          </div>

        )}

        

        {/* Preview Viewport */}

        <div
          className="h-[233vh] overflow-auto"
          style={{
            backgroundColor: "var(--background)",
          }}
        >

          <div className="flex justify-center p-8">

          <div
            style={{
                width: current.width,
                zoom: scale,
            }}
            >
              <LandingPreview />
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}