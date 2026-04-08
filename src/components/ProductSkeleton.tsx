export const ProductSkeleton = () => {
  return (
    <div className="bg-white p-4 rounded-2xl border border-gray-100 animate-pulse">
      <div className="rounded-xl mb-4 h-48 bg-gray-200" />
      <div className="h-4 bg-gray-200 rounded-full w-3/4 mb-3" />
      <div className="h-6 bg-gray-200 rounded-full w-1/4 mb-5" />     
      <div className="h-12 bg-gray-100 rounded-xl w-full" />
    </div>
  );
};