export default function TextAreaField({
    label,
    value,
    onChange,
    rows = 5,
    placeholder = "",
  }) {
    return (
      <div className="space-y-2">
        <label className="text-sm font-medium text-zinc-300">
          {label}
        </label>
  
        <textarea
          rows={rows}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className="w-full resize-none radius-theme-sm border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none transition-all duration-200 placeholder:text-zinc-500 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
        />
      </div>
    );
  }