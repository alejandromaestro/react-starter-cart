import { useEffect, useState } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import { Header } from './components/Header';
import { StorePage } from './components/StorePage';
import type { CartItem, Product } from './interfaces/product';
import { CartDrawer } from './components/CartDrawer';

function App() {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem('REACTstore_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('REACTstore_cart', JSON.stringify(cart));
  }, [cart]);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);

      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id: number, delta: number) => {
    setCart(prevCart => {
      return prevCart
        .map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + delta };
          }
          return item;
        })
        .filter(item => item.quantity > 0);
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <Header cartCount={totalItems} onCartOpen={() => setIsDrawerOpen(true)} />

      <Routes>
        <Route path="/" element={<Navigate to="/page/1" replace />} />
        <Route
          path="/page/:pageNumber"
          element={
            <StorePage
              onAddToCart={(p) => addToCart(p)}
            />
          }
        />
      </Routes>

      <CartDrawer
        isOpen={isDrawerOpen}
        cartItems={cart}
        onClose={() => setIsDrawerOpen(false)}
        onUpdateQuantity={updateQuantity}
      />
    </div>
  );
}

export default App;

