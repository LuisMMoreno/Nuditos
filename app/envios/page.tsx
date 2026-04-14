import { Truck, Package, CheckCircle } from 'lucide-react';

export const metadata = {
  title: 'Envíos - Nuditos',
  description: 'Información sobre envíos y tiempos de entrega.',
};

export default function EnviosPage() {
  const shippingInfo = [
    {
      icon: Truck,
      title: 'Envío Gratis',
      description: 'Para compras superiores a $50.000 en toda Argentina.',
    },
    {
      icon: Package,
      title: 'Tiempo de Procesamiento',
      description: 'Los pedidos se despachan en 2-3 días hábiles. Productos personalizados pueden tardar 5-7 días.',
    },
    {
      icon: CheckCircle,
      title: 'Seguimiento',
      description: 'Recibirás un código de seguimiento por email una vez despachado tu pedido.',
    },
  ];

  return (
    <div className="min-h-screen bg-nuditos-crema py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-nuditos-marron-oscuro mb-4">
            Envíos
          </h1>
          <p className="text-xl text-nuditos-marron">
            Llevamos tu Nubi hasta la puerta de tu casa
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {shippingInfo.map((item, index) => (
            <div key={index} className="bg-white rounded-3xl p-6 shadow-soft text-center">
              <div className="w-16 h-16 rounded-full bg-nuditos-rosa-claro flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-8 h-8 text-nuditos-marron" />
              </div>
              <h3 className="font-bold text-lg text-nuditos-marron-oscuro mb-2">
                {item.title}
              </h3>
              <p className="text-nuditos-marron text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-soft">
          <h2 className="text-2xl font-bold text-nuditos-marron-oscuro mb-6">
            Zonas de Envío
          </h2>
          <div className="space-y-4 text-nuditos-marron">
            <div className="flex justify-between items-center py-3 border-b border-nuditos-rosa-claro">
              <span>CABA y GBA</span>
              <span className="font-semibold">2-4 días hábiles</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-nuditos-rosa-claro">
              <span>Interior del país</span>
              <span className="font-semibold">4-7 días hábiles</span>
            </div>
            <div className="flex justify-between items-center py-3">
              <span>Envíos internacionales</span>
              <span className="font-semibold">Consultar</span>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-nuditos-verde-claro/30 rounded-3xl p-8 text-center">
          <p className="text-nuditos-marron-oscuro font-medium">
            ¿Tienes dudas sobre tu envío? <a href="/contacto" className="underline hover:text-nuditos-marron">Contáctanos</a>
          </p>
        </div>
      </div>
    </div>
  );
}
