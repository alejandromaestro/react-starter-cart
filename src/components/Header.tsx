interface props {
    cartCount: number,
    onCartOpen: () => void;
}

export const Header = ({ cartCount, onCartOpen }: props) => {

    return (
        <>
            <header className="max-w-5xl mx-auto mb-10 flex justify-between items-center py-6 sticky top-0 bg-gray-50/90 z-30">
                <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
                    REACT <span className="text-indigo-600">Store</span>
                </h1>

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

