import { RotateCcw, Shield, Heart } from 'lucide-react';

export const metadata = {
  title: 'Devoluciones - Nuditos',
  description: 'Política de devoluciones y cambios.',
};

export default function DevolucionesPage() {
  return (
    <div className="min-h-screen bg-nuditos-crema py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-nuditos-marron-oscuro mb-4">
            Devoluciones y Cambios
          </h1>
          <p className="text-xl text-nuditos-marron">
            Queremos que estés 100% feliz con tu Nubi
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-3xl p-6 shadow-soft text-center">
            <div className="w-16 h-16 rounded-full bg-nuditos-rosa-claro flex items-center justify-center mx-auto mb-4">
              <RotateCcw className="w-8 h-8 text-nuditos-marron" />
            </div>
            <h3 className="font-bold text-lg text-nuditos-marron-oscuro mb-2">
              30 Días
            </h3>
            <p className="text-nuditos-marron text-sm">
              Tienes 30 días desde la recepción para solicitar cambios o devoluciones.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-soft text-center">
            <div className="w-16 h-16 rounded-full bg-nuditos-verde-claro flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-nuditos-marron" />
            </div>
            <h3 className="font-bold text-lg text-nuditos-marron-oscuro mb-2">
              Producto Intacto
            </h3>
            <p className="text-nuditos-marron text-sm">
              Debe estar en su estado original, sin uso y con su empaque.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-soft text-center">
            <div className="w-16 h-16 rounded-full bg-nuditos-amarillo-claro flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-nuditos-marron" />
            </div>
            <h3 className="font-bold text-lg text-nuditos-marron-oscuro mb-2">
              Sin Costo
            </h3>
            <p className="text-nuditos-marron text-sm">
              El primer cambio es sin cargo. Corremos con los gastos de envío.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-soft mb-8">
          <h2 className="text-2xl font-bold text-nuditos-marron-oscuro mb-6">
            ¿Cómo solicitar una devolución?
          </h2>
          <ol className="space-y-4 text-nuditos-marron">
            <li className="flex gap-4">
              <span className="w-8 h-8 rounded-full bg-nuditos-marron text-white flex items-center justify-center flex-shrink-0 font-bold">1</span>
              <div>
                <p className="font-semibold text-nuditos-marron-oscuro">Contáctanos</p>
                <p>Escríbenos a hol@nuditos.com indicando el motivo de tu devolución.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="w-8 h-8 rounded-full bg-nuditos-marron text-white flex items-center justify-center flex-shrink-0 font-bold">2</span>
              <div>
                <p className="font-semibold text-nuditos-marron-oscuro">Prepara el producto</p>
                <p>Empaqueta tu Nubi con cuidado en su empaque original.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="w-8 h-8 rounded-full bg-nuditos-marron text-white flex items-center justify-center flex-shrink-0 font-bold">3</span>
              <div>
                <p className="font-semibold text-nuditos-marron-oscuro">Coordinamos el retiro</p>
                <p>Te enviaremos las instrucciones para el envío sin costo.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="w-8 h-8 rounded-full bg-nuditos-marron text-white flex items-center justify-center flex-shrink-0 font-bold">4</span>
              <div>
                <p className="font-semibold text-nuditos-marron-oscuro">Recibes tu reembolso o cambio</p>
                <p>Una vez recibido, procesamos en 3-5 días hábiles.</p>
              </div>
            </li>
          </ol>
        </div>

        <div className="bg-nuditos-rosa-claro/50 rounded-3xl p-8 text-center">
          <p className="text-nuditos-marron-oscuro">
            ¿Tienes dudas? <a href="/contacto" className="underline hover:text-nuditos-marron">Contáctanos</a>
          </p>
        </div>
      </div>
    </div>
  );
}
