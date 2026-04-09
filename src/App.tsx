import { useEffect, useState } from 'react';

import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';

import { Header } from './components/Header';
import { StorePage } from './components/StorePage';
import type { CartItem, Product } from './interfaces/product';
import { CartDrawer } from './components/CartDrawer';
import { PaymentPage } from './components/PaymentPage';
import { ProductDetailPage } from './components/ProductDetailPage';
import { Toast } from './components/Toast';
import { NotFoundPage } from './components/NotFoundPage';

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
    showNotification(`¡${product.name} añadido! ✅`);
  };

  const [searchTerm, setSearchTerm] = useState('');

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

  const navigate = useNavigate();

  const handleCheckout = () => {
    setCart([]);
    setIsDrawerOpen(false);
    navigate('/payment');
  };

  const [notification, setNotification] = useState<string | null>(null);

  const showNotification = (message: string) => {
    setNotification(message);
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <Header
        cartCount={totalItems}
        onCartOpen={() => setIsDrawerOpen(true)}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm} 
      />

      <Routes>
        <Route path="/" element={<Navigate to="/page/1" replace />} />
        <Route
          path="/page/:pageNumber"
          element={
            <StorePage
              onAddToCart={addToCart}
              searchTerm={searchTerm}
            />
          }
        />
        <Route path="/product/:id" element={<ProductDetailPage onAddToCart={addToCart} />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <CartDrawer
        isOpen={isDrawerOpen}
        cartItems={cart}
        onClose={() => setIsDrawerOpen(false)}
        onUpdateQuantity={updateQuantity}
        onCheckout={handleCheckout}
      />
      <Toast message={notification} />
    </div>
  );
}

export default App;

