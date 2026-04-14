import { getProductBySlug } from '@/src/data/products';
import { notFound } from 'next/navigation';
import ProductDetailClient from './ProductDetailClient';

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const product = getProductBySlug(resolvedParams.slug);

  if (!product) {
    notFound();
  }

  return <ProductDetailClient product={product} />;
}
