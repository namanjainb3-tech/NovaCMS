import {
    LayoutDashboard,
    FileText,
    Image,
    FolderKanban,
    BarChart3,
    Settings,
  } from "lucide-react";
  
  const items = [
    {
      icon: LayoutDashboard,
      label: "Dashboard",
      active: false,
    },
    {
      icon: FileText,
      label: "Content",
      active: true,
    },
    {
      icon: Image,
      label: "Media",
      active: false,
    },
    {
      icon: FolderKanban,
      label: "Collections",
      active: false,
    },
    {
      icon: BarChart3,
      label: "Analytics",
      active: false,
    },
    {
      icon: Settings,
      label: "Settings",
      active: false,
    },
  ];
  
  export default function Sidebar() {
    return (
      <aside
        className="
          hidden
          w-64
          shrink-0
          border-r
          border-white/10
          bg-white/[0.02]
          lg:flex
          lg:flex-col
        "
      >
        <div className="border-b border-white/10 p-6">
          <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto">
            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                radius-theme
                bg-gradient-to-br
                from-indigo-500
                to-violet-500
                text-lg
                font-bold
                text-white
              "
            >
              C
            </div>
  
            <div>
              <h3 className="font-semibold text-white">
                CMS Studio
              </h3>
  
              <p className="text-sm text-slate-400">
                Content Platform
              </p>
            </div>
          </div>
        </div>
  
        <nav className="flex-1 space-y-2 p-4">
          {items.map((item) => {
            const Icon = item.icon;
  
            return (
              <button
                key={item.label}
                className={`
                  flex
                  w-full
                  items-center
                  gap-2.5 radius-theme
                  px-3.5 py-2.5 text-left
                  transition-all
                  duration-300
  
                  ${
                    item.active
                      ? "bg-indigo-500/15 border border-indigo-500/20 text-white shadow-lg shadow-indigo-500/10"
                      : "text-slate-400 hover:bg-white/5 hover:text-white"
                  }
                `}
              >
                <Icon size={17} strokeWidth={2.2} />
  
                <span className="text-sm font-medium">
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>
  
        <div className="border-t border-white/10 p-5">
          <div
            className="
              radius-theme
              border
              border-white/10
              bg-white/[0.03]
              p-4
            "
          >
            <p className="text-xs uppercase tracking-wider text-slate-500">
              Workspace
            </p>
  
            <h4 className="mt-2 font-semibold text-white">
              Startup Website
            </h4>
  
            <p className="mt-1 text-sm text-slate-400">
              12 published pages
            </p>
          </div>
        </div>
      </aside>
    );
  }
