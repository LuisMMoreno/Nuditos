'use client';

import { BentoCatalogue, Breadcrumb } from '@/src/components/category';
import { getProductsByCategory } from '@/src/data/products';

export default function LlaverosPage() {
  const llaverosData = getProductsByCategory('Llaveros');
  return (
    <div className="min-h-screen bg-nuditos-crema px-4 sm:px-6 lg:px-8 pb-20 pt-32">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={[{ label: 'Llaveros' }]} />
        <BentoCatalogue 
          products={llaverosData}
          categoryName="Llaveros"
          categoryDescription="Un anclaje táctil de bolsillo. Pequeños recordatorios de bienestar diseñados para calzarse en tus llaves o en tu maleta, brindándote una porción de confort que va contigo a cualquier lugar."
          emptyMessage="Estamos diseñando y tejiendo nuevos llaveros terapéuticos. Muy pronto podrás ver nuestras creaciones aquí."
        />
      </div>
    </div>
  );
}
