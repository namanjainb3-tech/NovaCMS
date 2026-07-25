import {
    Globe,
    Link2,
    Search,
    Users,
    CheckCircle2,
    AlertCircle,
  } from "lucide-react";
  
  export default function Inspector() {
    return (
      <aside
        className="
          hidden
          w-80
          shrink-0
          border-l
          border-white/10
          bg-white/[0.02]
          xl:flex
          xl:flex-col
        "
      >
        <div className="border-b border-white/10 px-6 py-5">
          <h3 className="text-lg font-semibold text-white">
            Page Settings
          </h3>
  
          <p className="mt-1 text-sm text-slate-400">
            SEO, publishing and collaboration
          </p>
        </div>
  
        <div className="flex-1 space-y-6 overflow-y-auto p-6">
  
          <section className="radius-theme-lg border border-white/10 bg-white/[0.03] p-5">
            <div className="flex items-center gap-2">
              <Search size={18} className="text-indigo-300" />
              <h4 className="font-semibold text-white">
                SEO Score
              </h4>
            </div>
  
            <div className="mt-5 flex items-center justify-between">
              <span className="text-5xl font-bold text-emerald-400">
                94
              </span>
  
              <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                Excellent
              </span>
            </div>
  
            <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[94%] rounded-full bg-emerald-400" />
            </div>
          </section>
  
          <section className="radius-theme-lg border border-white/10 bg-white/[0.03] p-5">
            <div className="flex items-center gap-2">
              <Globe size={18} className="text-indigo-300" />
              <h4 className="font-semibold text-white">
                URL
              </h4>
            </div>
  
            <div className="mt-4 radius-theme border border-white/10 bg-[#0b1324] px-4 py-3 text-sm text-slate-300">
              /homepage
            </div>
          </section>
  
          <section className="radius-theme-lg border border-white/10 bg-white/[0.03] p-5">
            <div className="flex items-center gap-2">
              <Link2 size={18} className="text-indigo-300" />
              <h4 className="font-semibold text-white">
                Slug
              </h4>
            </div>
  
            <div className="mt-4 radius-theme border border-white/10 bg-[#0b1324] px-4 py-3 text-sm text-slate-300">
              manage-your-website
            </div>
          </section>
  
          <section className="radius-theme-lg border border-white/10 bg-white/[0.03] p-5">
            <div className="flex items-center gap-2">
              <Users size={18} className="text-indigo-300" />
              <h4 className="font-semibold text-white">
                Collaborators
              </h4>
            </div>
  
            <div className="mt-5 space-y-4">
              {[
                "Alex Johnson",
                "Sarah Miller",
                "David Lee",
              ].map((user) => (
                <div
                  key={user}
                  className="flex items-center justify-between"
                >
                  <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 text-sm font-bold text-white">
                      {user.charAt(0)}
                    </div>
  
                    <div>
                      <p className="text-sm font-medium text-white">
                        {user}
                      </p>
  
                      <p className="text-xs text-slate-500">
                        Editor
                      </p>
                    </div>
                  </div>
  
                  <CheckCircle2
                    size={18}
                    className="text-emerald-400"
                  />
                </div>
              ))}
            </div>
          </section>
  
          <section className="radius-theme-lg border border-white/10 bg-white/[0.03] p-5">
            <div className="flex items-center gap-2">
              <AlertCircle size={18} className="text-amber-300" />
              <h4 className="font-semibold text-white">
                Validation
              </h4>
            </div>
  
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>✓ Hero heading length is optimal</li>
              <li>✓ Meta description detected</li>
              <li>✓ Image alt text present</li>
              <li>✓ URL is SEO friendly</li>
            </ul>
          </section>
  
        </div>
      </aside>
    );
  }
