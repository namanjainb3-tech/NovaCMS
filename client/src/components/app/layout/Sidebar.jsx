import {
  LayoutDashboard,
  Sparkles,
  Workflow,
  Megaphone,
  FileText,
  Settings,
  LogOut,
  ChevronRight,
  Palette,
} from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

const contentSections = [
  {
    id: "hero",
    title: "Hero",
    icon: LayoutDashboard,
  },
  {
    id: "features",
    title: "Features",
    icon: Sparkles,
  },
  {
    id: "workflow",
    title: "Workflow",
    icon: Workflow,
  },
  {
    id: "cta",
    title: "CTA",
    icon: Megaphone,
  },
  {
    id: "footer",
    title: "Footer",
    icon: FileText,
  },
];

const designSections = [
  {
    id: "theme",
    title: "Theme",
    icon: Palette,
  },
];

const navigation = [
  {
      label: "Content",
      items: contentSections,
  },
  {
      label: "Design",
      items: designSections,
  },
];

export default function Sidebar({
  activeSection,
  setActiveSection,
  search,
}) {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const settingsActive = activeSection === "settings";

  function handleLogout() {
    logout();
    navigate("/login");
  }

  const filteredNavigation = navigation
    .map(group => ({
        ...group,
        items: group.items.filter(section =>
            section.title
                .toLowerCase()
                .includes(search.toLowerCase())
        ),
    }))
    .filter(group => group.items.length);

  return (
    <aside className="flex h-full flex-col bg-[#09090B]">

      {/* Logo */}

      <div className="border-b border-zinc-800 px-5 py-5">

        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center radius-theme-sm bg-gradient-to-br from-violet-600 to-fuchsia-600 font-bold text-white shadow-lg shadow-violet-600/30">
            C
          </div>

          <div>

            <h1 className="text-lg font-semibold text-white">
              CMS Studio
            </h1>

            <p className="text-xs text-zinc-500">
              Visual Editor
            </p>

          </div>

        </div>

      </div>

      {/* Navigation */}

      <div className="flex-1 overflow-y-auto px-4 py-4">

        {filteredNavigation.map((group) => (
          <div key={group.label} className="mb-6">

            <div className="mb-3 px-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
              {group.label}
            </div>

            <div className="radius-theme border border-zinc-800 bg-zinc-900/60 p-2">

              {group.items.map((section) => {

                const Icon = section.icon;
                const active = activeSection === section.id;

                return (
                  <motion.button
                    key={section.id}
                    whileHover={{ x: 3 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActiveSection(section.id)}
                    className={`group mb-1 flex w-full items-center justify-between radius-theme-sm px-3 py-2.5 transition-all duration-200 ${
                      active
                        ? "bg-violet-600 text-white shadow-lg shadow-violet-600/20"
                        : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon size={17} strokeWidth={2.2} />

                      <span className="text-sm font-medium">
                        {section.title}
                      </span>
                    </div>

                    {active && <ChevronRight size={16} />}
                  </motion.button>
                );

              })}

            </div>

          </div>
        ))}

        {filteredNavigation.length === 0 && (
          <div className="rounded-xl border border-dashed border-zinc-700 p-6 text-center">
            <p className="text-sm text-zinc-500">
              No sections found
            </p>
          </div>
        )}

        </div>

      {/* Bottom */}

      <div className="border-t border-zinc-800 p-4">
        <motion.button
          whileHover={{ x: 3 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setActiveSection("settings")}
          className={`mb-2 flex w-full items-center justify-between radius-theme-sm px-3 py-2.5 transition-all duration-200 ${
            settingsActive
              ? "bg-violet-600 text-white shadow-lg shadow-violet-600/20"
              : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
          }`}
        >
          <div className="flex items-center gap-3">
            <Settings size={17} />
            <span className="text-sm font-medium">Settings</span>
          </div>

          {settingsActive && <ChevronRight size={16} />}
        </motion.button>

        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 radius-theme-sm px-3 py-2.5 text-sm text-red-400 transition hover:bg-red-500/10"
        >
          <LogOut size={17} />
          Logout
        </button>

      </div>

    </aside>
  );
}