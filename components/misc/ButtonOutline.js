export default function ButtonOutline({ children, onClick }) {
  return (
    <button
      className="px-6 py-3 rounded border border-black text-black hover:bg-black hover:text-white transition"
      onClick={onClick}
    >
      {children}
    </button>
  );
}