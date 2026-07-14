import { redirect } from 'next/navigation';

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  redirect(`/?product=${resolvedParams.slug}`);
}
