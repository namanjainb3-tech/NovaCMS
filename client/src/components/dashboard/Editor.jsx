import {
    Clock3,
    Eye,
    MoreHorizontal,
    Save,
    Sparkles,
  } from "lucide-react";
  
  import Button from "../ui/Button";
  import StatusBadge from "./StatusBadge";
  
  export default function Editor() {
    return (
      <section className="flex flex-1 flex-col">
        <header className="flex flex-col gap-6 border-b border-white/10 p-5 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
          <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto">
              <StatusBadge status="published" />
  
              <span className="flex items-center gap-2 text-sm text-slate-400">
                <Clock3 size={15} />
                Saved 2 min ago
              </span>
            </div>
  
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Homepage
            </h2>
  
            <p className="mt-2 max-w-xl text-slate-400">
              Edit your landing page content, manage headlines,
              call-to-actions and SEO without touching code.
            </p>
          </div>
  
          <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto">
            <Button variant="secondary">
              <Eye size={18} />
              Preview
            </Button>
  
            <Button>
              <Save size={18} />
              Publish
            </Button>
          </div>
        </header>
  
        <div className="flex-1 space-y-8 p-5 lg:p-8">
          <div className="space-y-3">
            <label className="text-sm font-medium text-slate-400">
              Hero Heading
            </label>
  
            <div className="radius-theme border border-white/10 bg-white/[0.03] p-5">
              <h1 className="break-words text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
                Manage Your Website Without Writing Code
              </h1>
            </div>
          </div>
  
          <div className="space-y-3">
            <label className="text-sm font-medium text-slate-400">
              Description
            </label>
  
            <div className="radius-theme border border-white/10 bg-white/[0.03] p-5">
              <p className="break-words leading-7 text-slate-400">
                Create, edit and publish content through a
                beautiful visual CMS designed for modern teams
                and startups.
              </p>
            </div>
          </div>
  
          <div>
            <label className="text-sm font-medium text-slate-400">
              Categories
            </label>
  
            <div className="mt-4 flex flex-wrap gap-3">
              {[
                "Landing Page",
                "Marketing",
                "Homepage",
                "CMS",
              ].map((tag) => (
                <div
                  key={tag}
                  className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
  
          <div className="radius-theme-lg border border-violet-500/20 bg-violet-500/5 p-6">
            <div className="flex items-start gap-4">
              <div className="radius-theme bg-violet-500/15 p-3">
                <Sparkles
                  className="text-violet-300"
                  size={20}
                />
              </div>
  
              <div className="flex-1">
                <h3 className="font-semibold text-white">
                  AI Content Suggestion
                </h3>
  
                <p className="mt-2 text-sm leading-7 text-slate-400">
                  Improve readability by shortening the hero
                  description and emphasizing your key value
                  proposition in the first sentence.
                </p>
              </div>
  
              <button className="text-slate-500 transition hover:text-white">
                <MoreHorizontal size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
