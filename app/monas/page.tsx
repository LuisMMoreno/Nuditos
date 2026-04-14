'use client';

import { BentoCatalogue, Breadcrumb } from '@/src/components/category';
import { getProductsByCategory } from '@/src/data/products';

export default function MonasPage() {
  const monasData = getProductsByCategory('Moñas');
  return (
    <div className="min-h-screen bg-nuditos-crema px-4 sm:px-6 lg:px-8 pb-20 pt-32">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={[{ label: 'Moñas' }]} />
        <BentoCatalogue 
          products={monasData}
          categoryName="Moñas"
          categoryDescription="Accesorios suaves para el cabello que no jalonan ni lastiman. Creadas con la misma intención terapéutica que nuestros Nubi, para esos días en los que necesitas un recordatorio de cariño en cualquier momento."
          emptyMessage="Muy pronto tendremos disponibles estilos únicos de moñas tejidas. ¡Mantente atento!"
        />
      </div>
    </div>
  );
}
