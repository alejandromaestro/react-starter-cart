import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { products as allProducts } from '../data/products';
import { ProductCard } from './ProductCard';
import { Pagination } from './Pagination';
import type { Product } from '../interfaces/product';
import { useEffect, useState } from 'react';
import { ProductSkeleton } from './ProductSkeleton';

interface Props {
  onAddToCart: (p: Product) => void;
}

const ITEMS_PER_PAGE = 6;

export const StorePage = ({ onAddToCart }: Props) => {
  const { pageNumber } = useParams<{ pageNumber: string }>();
  const navigate = useNavigate();

  const currentPage = Number(pageNumber) || 1;
  const totalPages = Math.ceil(allProducts.length / ITEMS_PER_PAGE);

  const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    if (isNaN(currentPage) || currentPage < 1) {
      navigate('/page/1', { replace: true });
      return;
    }

    if (currentPage > totalPages) {
      navigate(`/page/${totalPages}`, { replace: true });
      return;
    }
    window.scrollTo(0, 0);
    setIsLoading(true);

    const lastItemIndex = currentPage * ITEMS_PER_PAGE;
    const firstItemIndex = lastItemIndex - ITEMS_PER_PAGE;
    const nextProducts = allProducts.slice(firstItemIndex, lastItemIndex);

    setDisplayedProducts(nextProducts);
    setIsLoading(false);
  }, [pageNumber, navigate]);

  return (
    <div className="max-w-5xl mx-auto">
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading ? (
          Array.from({ length: ITEMS_PER_PAGE }).map((_, i) => (
            <ProductSkeleton key={i} />
          ))
        ) : (
          displayedProducts.map(p => (
            <ProductCard
              key={p.id}
              product={p}
              onAddToCart={onAddToCart}
            />
          ))
        )}
      </main>

      <Pagination
        total={totalPages}
        current={currentPage}
        onChange={(page) => navigate(`/page/${page}`)}
      />
    </div>
  );
};