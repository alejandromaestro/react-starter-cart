import type { CartItem } from '../interfaces/product';

interface Props {
  isOpen: boolean;
  cartItems: CartItem[];
  onClose: () => void;
  onUpdateQuantity: (id: number, delta: number) => void;
  onCheckout: () => void;
}

export const CartDrawer = ({ isOpen, cartItems, onClose, onUpdateQuantity, onCheckout }: Props) => {
  const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity z-40 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        onClick={onClose}
      />

      <div className={`fixed right-0 top-0 h-full w-full sm:w-80 bg-white z-50 transition-transform duration-300 ease-in-out shadow-2xl ${isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
        <div className="p-6 h-full flex flex-col">

          <header className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold tracking-tight">Cesta</h2>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors"
            >
              ✕
            </button>
          </header>

          <div className="flex-1 overflow-y-auto pr-2">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center mt-20 opacity-40">
                <span className="text-4xl mb-4">🛒</span>
                <p className="text-gray-500 font-medium">El carrito está vacío</p>
              </div>
            ) : (
              <ul className="space-y-2">
                {cartItems.map((item) => (
                  <li
                    key={item.id}
                    className="flex gap-4 p-3 rounded-xl hover:bg-indigo-50/50 transition-all duration-200 group cursor-default"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 object-cover rounded-lg bg-gray-100 group-hover:shadow-sm"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-sm text-gray-800 truncate group-hover:text-indigo-900 transition-colors">
                        {item.name}
                      </p>

                      <div className="flex justify-between items-center mt-2">
                        <p className="text-indigo-600 font-bold text-sm">
                          {(item.price * item.quantity).toFixed(2)}€
                        </p>

                        <div className="flex items-center bg-gray-50 rounded-lg border border-gray-100 p-0.5 gap-1">
                          <button
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className={`w-7 h-7 flex items-center justify-center rounded-md transition-all font-bold ${item.quantity === 1
                                ? 'hover:bg-red-50 hover:text-red-600 text-gray-300'
                                : 'hover:bg-white hover:shadow-sm text-gray-400 hover:text-indigo-600'
                              }`}
                            title={item.quantity === 1 ? "Eliminar del carrito" : "Quitar uno"}
                          >
                            {item.quantity === 1 ? '✕' : '-'}
                          </button>

                          <span className="text-[11px] font-black text-gray-700 min-w-5 text-center">
                            {item.quantity}
                          </span>

                          <button
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="w-7 h-7 flex items-center justify-center rounded-md hover:bg-white hover:shadow-sm text-gray-400 hover:text-indigo-600 transition-all font-bold"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <footer className="mt-auto pt-6 border-t border-gray-100">
            <div className="flex justify-between items-baseline mb-6">
              <span className="text-gray-500 font-medium text-sm">Total</span>
              <div className="text-right">
                <p className="text-2xl font-bold text-gray-900">{total.toFixed(2)}€</p>
              </div>
            </div>

            <button
              disabled={cartItems.length === 0}
              className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold hover:bg-indigo-700 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-indigo-100"
              onClick={onCheckout}
            >
              Finalizar pedido
            </button>
          </footer>
        </div>
      </div>
    </>
  );
};