'use client';

import { BentoCatalogue, Breadcrumb } from '@/src/components/category';
import { getProductsByCategory } from '@/src/data/products';

export default function FloresPage() {
  const floresData = getProductsByCategory('Flores');
  return (
    <div className="min-h-screen bg-nuditos-crema px-4 sm:px-6 lg:px-8 pb-20 pt-32">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={[{ label: 'Flores' }]} />
        <BentoCatalogue 
          products={floresData}
          categoryName="Flores"
          categoryDescription="Belleza que perdura en el tiempo. Nuestras flores tejidas simbolizan cuidado eterno y afecto incondicional. Un obsequio emocional para alegrar tu espacio de forma permanente y libre de mantenimiento."
          emptyMessage="Estamos cultivando nuestro jardín de hilo. Pronto encontrarás girasoles, rosas y lavandas hechas a mano."
        />
      </div>
    </div>
  );
}
