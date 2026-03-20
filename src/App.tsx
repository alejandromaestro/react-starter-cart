import { ProductCard } from './components/ProductCard';
import { products } from './data/products';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-8 text-gray-900">
      <header className="max-w-5xl mx-auto mb-12">
        <h1 className="text-3xl font-bold">React Starter Cart</h1>
        <p className="text-gray-500">Prueba técnica de componentes y estado global</p>
      </header>

      <main className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </main>
    </div>
  );
}

export default App;