import { useNavigate } from "react-router-dom";

interface props {
    cartCount: number,
    onCartOpen: () => void;
    searchTerm: string;
    setSearchTerm: (value: string) => void;
}

export const Header = ({ cartCount, onCartOpen, searchTerm, setSearchTerm }: props) => {
    const navigate = useNavigate();
    return (
        <>
            <header className="max-w-5xl mx-auto mb-10 flex justify-between items-center py-6 sticky top-0 bg-gray-50/90 z-30">
                <h1
                    className="text-2xl font-bold text-gray-900 tracking-tight cursor-pointer"
                    onClick={() => navigate('/page/1')}
                >
                    REACT <span className="text-indigo-600">Store</span>
                </h1>

                <div className="flex-1 max-w-md relative group">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-indigo-500 transition-colors">
                        🔍
                    </span>
                    <input
                        type="text"
                        placeholder="Buscardor"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-gray-50 border-none rounded-2xl py-2.5 pl-11 pr-4 focus:ring-2 focus:ring-indigo-500/20 transition-all outline-none text-sm font-medium"
                    />
                </div>

                <button
                    onClick={onCartOpen}
                    className="relative flex items-center gap-2 bg-white border border-gray-200 px-5 py-2.5 rounded-xl hover:border-indigo-200 hover:bg-indigo-50/30 hover:text-indigo-600 transition-all duration-200 active:scale-95 group"
                >
                    <span className="text-lg">🛒</span>
                    <span className="font-semibold">Cesta</span>

                    {cartCount > 0 && (
                        <span className="absolute -top-1.5 -right-1.5 bg-indigo-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-gray-50">
                            {cartCount}
                        </span>
                    )}
                </button>
            </header>
        </>

    )
}

