import { PaginacionBoton } from './PaginacionBoton';
interface Props {
  total: number;
  current: number;
  onChange: (page: number) => void;
}

export const Pagination = ({ total, current, onChange }: Props) => {
  return (
    <nav className="flex justify-center items-center gap-2 mt-12 pb-10">
      <PaginacionBoton disabled={current === 1} label='Anterior' onClick={() => onChange(current - 1)} />

      <div className="flex gap-1">
        {Array.from({ length: total }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => onChange(page)}
            className={`w-10 h-10 rounded-lg font-bold text-sm transition-all ${
              current === page
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            {page}
          </button>
        ))}
      </div>
      <PaginacionBoton disabled={current === total} label='Siguiente' onClick={() => onChange(current + 1)} />
    </nav>
  );
};