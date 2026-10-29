export default function FormField({
  label,
  name,
  type = 'text',
  value,
  onChange,
  onBlur,
  error,
  placeholder,
  as = 'input',
  rows = 4,
  options,
}) {
  const baseClass = `w-full bg-slate-50 border rounded-lg px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-colors ${
    error
      ? 'border-red-400 focus:ring-2 focus:ring-red-200'
      : 'border-slate-200 focus:ring-2 focus:ring-slate-900/15 focus:border-slate-300'
  }`

  return (
    <div>
      <label className="block text-sm font-medium text-slate-700 mb-1.5">{label}</label>

      {as === 'textarea' ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          rows={rows}
          placeholder={placeholder}
          className={baseClass}
        />
      ) : as === 'select' ? (
        <select name={name} value={value} onChange={onChange} onBlur={onBlur} className={baseClass}>
          <option value="">{placeholder}</option>
          {options?.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          className={baseClass}
        />
      )}

      {error && (
        <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
          <span>⚠</span> {error}
        </p>
      )}
    </div>
  )
}