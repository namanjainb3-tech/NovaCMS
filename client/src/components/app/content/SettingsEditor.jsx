import { useEffect, useRef, useState } from "react";
import { Menu, ChevronDown, Check } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useSettings } from "../../../context/SettingsContext";

import SettingsSidebar from "./settings/SettingsSidebar";

import GeneralTab from "./settings/GeneralTab";
import SeoTab from "./settings/SeoTab";
import BrandingTab from "./settings/BrandingTab";
import PublishingTab from "./settings/PublishingTab";
import AboutTab from "./settings/AboutTab";

const tabs = [
  { id: "general", label: "General" },
  { id: "seo", label: "SEO" },
  { id: "branding", label: "Branding" },
  { id: "publishing", label: "Publishing" },
  { id: "about", label: "About" },
];

export default function SettingsEditor() {
  const [activeTab, setActiveTab] = useState("general");
  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef(null);

  const {
    settings,
    loading,
    updateSection,
    saveSettings,
    resetSettings,
  } = useSettings();
  
  const currentTab =
    tabs.find((tab) => tab.id === activeTab) || tabs[0];

  useEffect(() => {
    function handleClickOutside(e) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

  function renderTab() {
    if (loading || !settings) {
        return (
          <div className="p-10 text-zinc-400">
            Loading settings...
          </div>
        );
    }
    
    switch (activeTab) {
      case "general":
        return (
            <GeneralTab
              settings={settings}
              updateSection={updateSection}
              saveSettings={saveSettings}
            />
          );

      case "seo":
        return (
            <SeoTab
            settings={settings}
            updateSection={updateSection}
            saveSettings={saveSettings}
            />
        );

      case "branding":
        return (
            <BrandingTab
            settings={settings}
            updateSection={updateSection}
            saveSettings={saveSettings}
            />
        );

      case "publishing":
        return (
            <PublishingTab
            settings={settings}
            updateSection={updateSection}
            saveSettings={saveSettings}
            resetSettings={resetSettings}
            />
        );

      case "about":
        return (
            <AboutTab
            settings={settings}
            updateSection={updateSection}
            saveSettings={saveSettings}
            />
        );

      default:
        return (
            <GeneralTab
            settings={settings}
            updateSection={updateSection}
            saveSettings={saveSettings}
            />
        );
    }
  }

  return (
    <div className="radius-theme-lg overflow-hidden border border-zinc-800 bg-zinc-900">

      {/* Header */}
      <div className="border-b border-zinc-800 px-6 py-5">
        <h2 className="text-2xl font-bold text-white">
          Settings
        </h2>

        <p className="mt-1 text-sm text-zinc-400">
          Configure your website and publishing preferences.
        </p>
      </div>

      {/* Mobile Navigation */}
      <div className="border-b border-zinc-800 p-4 lg:hidden">

        <div
          ref={menuRef}
          className="relative"
        >
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="radius-theme flex w-full items-center justify-between border border-zinc-700 bg-zinc-900 px-4 py-3 text-white transition hover:border-zinc-600"
          >
            <div className="flex items-center gap-3">
              <Menu
                size={18}
                className="text-zinc-400"
              />

              <span className="font-medium">
                {currentTab.label}
              </span>
            </div>

            <ChevronDown
              size={18}
              className={`transition-transform duration-200 ${
                menuOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: -8,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -8,
                }}
                transition={{
                  duration: 0.18,
                }}
                className="absolute left-0 right-0 z-50 mt-2 overflow-hidden radius-theme border border-zinc-700 bg-zinc-900 shadow-2xl"
              >
                {tabs.map((tab) => {
                  const active =
                    activeTab === tab.id;

                  return (
                    <button
                      key={tab.id}
                      onClick={() => {
                        setActiveTab(tab.id);
                        setMenuOpen(false);
                      }}
                      className={`flex w-full items-center justify-between px-4 py-3 text-left transition ${
                        active
                          ? "bg-accent text-on-accent"
                          : "text-zinc-300 hover:bg-zinc-800"
                      }`}
                    >
                      <span>{tab.label}</span>

                      {active && (
                        <Check size={16} />
                      )}
                    </button>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

      {/* Desktop Layout */}
      <div className="lg:grid lg:min-h-[700px] lg:grid-cols-[240px_minmax(0,1fr)]">

        {/* Sidebar */}
        <aside className="hidden lg:block">
          <SettingsSidebar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </aside>

        {/* Content */}
        <div className="min-w-0 overflow-y-auto p-5 sm:p-6 lg:p-8">
          {renderTab()}
        </div>

      </div>

    </div>
  );
}