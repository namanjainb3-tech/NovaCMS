export default function SectionTitle({
    title,
    subtitle,
    badge,
  }) {
    return (
      <div className="mb-10 flex items-start justify-between">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-white">
            {title}
          </h1>
  
          {subtitle && (
            <p className="mt-3 max-w-xl text-zinc-400">
              {subtitle}
            </p>
          )}
        </div>
  
        {badge && (
          <div className="rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2 text-sm font-medium text-amber-300">
            {badge}
          </div>
        )}
      </div>
    );
  }