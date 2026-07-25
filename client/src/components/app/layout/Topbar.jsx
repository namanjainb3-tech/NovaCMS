import {
  Menu,
  Search,
  Upload,
  CheckCircle2,
  UserCircle2,
} from "lucide-react";
import { motion } from "framer-motion";
import NotificationBell from "./NotificationBell";
import PublishButton from "./PublishButton";

export default function Topbar({
  search,
  setSearch,
  onPublish,
  isSaving = false,
  isPublishing = false,
  onOpenSidebar,
}) {
  return (
    <>
      {/* Mobile */}
      <div className="flex h-16 items-center justify-between px-4 lg:hidden">

        {/* Left */}
        <div className="flex items-center gap-3">

          <button
            onClick={onOpenSidebar}
            className="rounded-lg p-2 text-zinc-400 transition hover:bg-zinc-800 hover:text-white"
          >
            <Menu size={22} />
          </button>

          <div>
            <h1 className="text-lg font-bold text-white">
              Dashboard
            </h1>

            <p className="text-xs text-zinc-500">
              Manage content
            </p>
          </div>

        </div>

        {/* Right */}
        <div className="flex items-center gap-2">

          <NotificationBell />

          <PublishButton />

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500">

            <UserCircle2
              size={20}
              className="text-white"
            />

          </div>

        </div>

      </div>
  
      {/* Desktop */}
      <div className="hidden h-full items-center justify-between px-4 md:px-8 lg:flex">  
        {/* Left */}
  
        <div>
  
          <h1 className="text-xl font-bold text-white">
            Dashboard
          </h1>
  
          <p className="text-sm text-zinc-500">
            Manage content
          </p>
  
        </div>
  
        {/* Center */}
  
        <div className="relative hidden w-full max-w-lg xl:block">
  
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
          />
  
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search sections..."
          className="w-full radius-theme border border-zinc-800 bg-zinc-900 py-3 pl-11 pr-4 text-sm text-white outline-none transition focus:border-violet-500"
        />
  
        </div>
  
        {/* Right */}
  
        <div className="flex items-center gap-4">
  
          <div className="hidden items-center gap-2 radius-theme-sm border border-zinc-800 bg-zinc-900 px-4 py-2 lg:flex">
  
            <CheckCircle2
              size={17}
              className={
                isSaving
                  ? "animate-pulse text-yellow-400"
                  : "text-green-400"
              }
            />
  
            <span className="text-sm text-zinc-300">
              {isSaving
                ? "Saving..."
                : "Saved"}
            </span>
  
          </div>
  
          <NotificationBell />
  
          <PublishButton />
  
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500">
  
            <UserCircle2
              size={22}
              className="text-white"
            />
  
          </div>
  
        </div>
  
      </div>
    </>
  );
}