import { useState, useMemo } from "react";
import { Menu } from "lucide-react";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function DashboardLayout({
  children,
  activeSection,
  setActiveSection,
  onPublish,
  isSaving = false,
  isPublishing = false,
}  ) {
  const [search, setSearch] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="h-screen bg-[#09090B] text-white">

      <>
        {/* Desktop Sidebar */}

        <aside className="fixed left-0 top-0 hidden h-screen w-[220px] border-r border-zinc-800 bg-[#09090B] lg:block">
          <Sidebar
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            search={search}
          />
        </aside>

        {/* Mobile Backdrop */}

        {sidebarOpen && (
          <div
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
          />
        )}

        {/* Mobile Sidebar */}

        <aside
          className={`fixed left-0 top-0 z-50 h-screen w-[220px] border-r border-zinc-800 bg-[#09090B] transition-transform duration-300 lg:hidden ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <Sidebar
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            search={search}
          />
        </aside>
      </>

      {/* Main Area */}

      <div className="min-h-screen lg:ml-[220px]">

        {/* Topbar */}

        <header className="sticky top-0 z-40 flex h-16 items-center border-b border-zinc-800 bg-[#09090B]/80 backdrop-blur-xl">

          <div className="flex-1">
          <Topbar
            search={search}
            setSearch={setSearch}
            onPublish={onPublish}
            isSaving={isSaving}
            isPublishing={isPublishing}
            onOpenSidebar={() => setSidebarOpen(true)}
          />
          </div>

        </header>

        {/* Workspace */}

        <main className="px-4 py-6 md:px-8 md:py-8">
          {children}
        </main>

      </div>

    </div>
  );
}