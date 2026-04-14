'use client';

import { BentoCatalogue, Breadcrumb, Product } from '@/src/components/category';

// Por ahora el catálogo está vacío hasta tener las fotos reales
const bolsosData: Product[] = [];

export default function BolsosPage() {
  return (
    <div className="min-h-screen bg-nuditos-crema px-4 sm:px-6 lg:px-8 pb-20 pt-32">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={[{ label: 'Bolsos' }]} />
        <BentoCatalogue 
          products={bolsosData}
          categoryName="Bolsos"
          categoryDescription="Piezas tejidas con paciencia, personalidad y funcionalidad. Cada bolso es un abrazo de hilo diseñado para acompañarte en tu día a día, envolviendo tus esenciales en la suavidad de un trabajo artesanal premium."
          emptyMessage="Nuestro taller está creando la nueva línea de bolsos tejidos. Regresa pronto para descubrir estas obras de arte."
        />
      </div>
    </div>
  );
}
