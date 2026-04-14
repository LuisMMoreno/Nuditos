'use client';

import { BentoCatalogue, Breadcrumb, Product } from '@/src/components/category';

// Por ahora el catálogo está vacío hasta tener las fotos reales
const llaverosData: Product[] = [];

export default function LlaverosPage() {
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
