'use client';

import { BentoCatalogue, Breadcrumb, Product } from '@/src/components/category';

// Por ahora el catálogo está vacío hasta tener las fotos reales
const floresData: Product[] = [];

export default function FloresPage() {
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
