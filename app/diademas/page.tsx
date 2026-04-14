'use client';

import { BentoCatalogue, Breadcrumb } from '@/src/components/category';
import { getProductsByCategory } from '@/src/data/products';

export default function DiademasPage() {
  const diademasData = getProductsByCategory('Diademas');
  return (
    <div className="min-h-screen bg-nuditos-crema px-4 sm:px-6 lg:px-8 pb-20 pt-32">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={[{ label: 'Diademas' }]} />
        <BentoCatalogue 
          products={diademasData}
          categoryName="Diademas"
          categoryDescription="Piezas únicas diseñadas para coronar tu rutina con estilo y comodidad. Nuestras diademas están estructuradas para no causar presión, combinando materiales de alta calidad con personajes que te harán sonreír."
        />
      </div>
    </div>
  );
}
