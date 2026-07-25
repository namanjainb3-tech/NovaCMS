import {
    Globe,
    Search,
    Image,
    Rocket,
    Info,
    ChevronRight,
  } from "lucide-react";
  import { motion } from "framer-motion";
  
  const tabs = [
    {
      id: "general",
      title: "General",
      icon: Globe,
    },
    {
      id: "seo",
      title: "SEO",
      icon: Search,
    },
    {
      id: "branding",
      title: "Branding",
      icon: Image,
    },
    {
      id: "publishing",
      title: "Publishing",
      icon: Rocket,
    },
    {
      id: "about",
      title: "About",
      icon: Info,
    },
  ];
  
  export default function SettingsSidebar({
    activeTab,
    setActiveTab,
  }) {
    return (
      <aside className="border-r border-zinc-800 bg-zinc-950/40 p-4">
  
        <div className="mb-3 px-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
          Settings
        </div>
  
        <div className="space-y-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
  
            return (
              <motion.button
                key={tab.id}
                whileHover={{ x: 3 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveTab(tab.id)}
                className={`group flex w-full items-center justify-between radius-theme-sm px-3 py-2.5 transition-all duration-200 ${
                  active
                    ? "bg-accent text-on-accent shadow-lg"
                    : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon size={17} strokeWidth={2.2} />
  
                  <span className="text-sm font-medium">
                    {tab.title}
                  </span>
                </div>
  
                {active && (
                  <ChevronRight size={16} />
                )}
              </motion.button>
            );
          })}
        </div>
      </aside>
    );
  }