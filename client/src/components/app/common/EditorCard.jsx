export default function EditorCard({
    title,
    subtitle,
    children,
    className = "",
  }) {
    return (
      <div
        className={`radius-theme border border-zinc-800 bg-zinc-900/70 backdrop-blur-xl p-6 shadow-[0_20px_80px_rgba(0,0,0,.25)] ${className}`}
      >
        {(title || subtitle) && (
          <div className="mb-6">
            {title && (
              <h3 className="text-xl font-semibold text-white">
                {title}
              </h3>
            )}
  
            {subtitle && (
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                {subtitle}
              </p>
            )}
          </div>
        )}
  
        {children}
      </div>
    );
  }