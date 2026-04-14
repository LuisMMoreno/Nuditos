export default function ProductSkeleton() {
  return (
    <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-soft animate-pulse">
      {/* Image placeholder */}
      <div className="aspect-square rounded-2xl bg-nuditos-beige mb-4" />

      {/* Colors placeholder */}
      <div className="flex gap-2 mb-3">
        <div className="w-4 h-4 rounded-full bg-nuditos-beige" />
        <div className="w-4 h-4 rounded-full bg-nuditos-beige" />
      </div>

      {/* Rating placeholder */}
      <div className="flex gap-1 mb-2">
        <div className="w-4 h-4 bg-nuditos-beige rounded" />
        <div className="w-4 h-4 bg-nuditos-beige rounded" />
        <div className="w-4 h-4 bg-nuditos-beige rounded" />
        <div className="w-4 h-4 bg-nuditos-beige rounded" />
        <div className="w-4 h-4 bg-nuditos-beige rounded" />
      </div>

      {/* Category placeholder */}
      <div className="w-20 h-6 bg-nuditos-beige rounded-full mb-2" />

      {/* Name placeholder */}
      <div className="h-5 bg-nuditos-beige rounded mb-1 w-3/4" />

      {/* Description placeholder */}
      <div className="h-4 bg-nuditos-beige rounded mb-3 w-full" />
      <div className="h-4 bg-nuditos-beige rounded mb-3 w-2/3" />

      {/* Price & button placeholder */}
      <div className="flex items-center justify-between">
        <div className="h-6 bg-nuditos-beige rounded w-16" />
        <div className="w-10 h-10 rounded-full bg-nuditos-beige" />
      </div>
    </div>
  );
}
