import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { products } from '../data/products';
import { ProductCard } from './ProductCard';
import { Pagination } from './Pagination';
import type { Product } from '../interfaces/product';
import { useEffect } from 'react';

interface Props {
  onAddToCart: (p: Product) => void;
}

const ITEMS_PER_PAGE = 6;

export const StorePage = ({ onAddToCart }: Props) => {
  const { pageNumber } = useParams<{ pageNumber: string }>();
  const navigate = useNavigate();

  const currentPage = Number(pageNumber) || 1;
  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

  if (currentPage > totalPages || currentPage < 1) {
    return <Navigate to="/page/1" replace />;
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const lastItemIndex = currentPage * ITEMS_PER_PAGE;
  const firstItemIndex = lastItemIndex - ITEMS_PER_PAGE;
  const currentProducts = products.slice(firstItemIndex, lastItemIndex);

  return (
    <div className="max-w-5xl mx-auto">
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </main>

      <Pagination
        total={totalPages}
        current={currentPage}
        onChange={(page) => navigate(`/page/${page}`)}
      />
    </div>
  );
};