interface Props {
  message: string | null;
}

export const Toast = ({ message }: Props) => {
  if (!message) return null;

  return (
    <div 
      className="fixed top-10 left-1/2 z-100 animate-slide-down"
      style={{ transform: 'translateX(-50%)' }}
    >
      <div className="bg-gray-900/95 backdrop-blur-sm text-white px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-3 border border-white/10 whitespace-nowrap">
        <div className="bg-indigo-500 rounded-full p-1">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <span className="font-bold text-sm tracking-wide">{message}</span>
      </div>
    </div>
  );
};