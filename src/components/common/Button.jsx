export default function Button({ children, className, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center justify-center gap-2 bg-brand font-medium text-[#111111] transition hover:bg-brand-hover ${className}`}
    >
      {children}
    </button>
  )
}
