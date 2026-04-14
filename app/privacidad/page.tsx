export const metadata = {
  title: 'Política de Privacidad - Nuditos',
  description: 'Cómo protegemos tu información personal.',
};

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-nuditos-crema py-12 sm:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-nuditos-marron-oscuro mb-4">
            Política de Privacidad
          </h1>
          <p className="text-nuditos-marron">Última actualización: Abril 2026</p>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-soft space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-nuditos-marron-oscuro mb-4">
              1. Información que recopilamos
            </h2>
            <p className="text-nuditos-marron leading-relaxed mb-4">
              Cuando realizas una compra, recopilamos tu nombre, dirección, email y teléfono para procesar y enviar tu pedido. Esta información se usa únicamente para fines operativos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-nuditos-marron-oscuro mb-4">
              2. Uso de la información
            </h2>
            <p className="text-nuditos-marron leading-relaxed mb-4">
              Tu información personal se utiliza para:
            </p>
            <ul className="list-disc list-inside text-nuditos-marron space-y-2 ml-4">
              <li>Procesar y enviar tus pedidos</li>
              <li>Comunicarnos sobre el estado de tu compra</li>
              <li>Enviar novedades (solo si te has suscrito)</li>
              <li>Mejorar nuestros productos y servicios</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-nuditos-marron-oscuro mb-4">
              3. Protección de datos
            </h2>
            <p className="text-nuditos-marron leading-relaxed mb-4">
              Implementamos medidas de seguridad para proteger tu información. Los datos de pago se procesan a través de plataformas seguras de terceros y no se almacenan en nuestros servidores.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-nuditos-marron-oscuro mb-4">
              4. Cookies
            </h2>
            <p className="text-nuditos-marron leading-relaxed mb-4">
              Nuestro sitio usa cookies esenciales para el funcionamiento del carrito de compras. Puedes configurar tu navegador para rechazar cookies, pero algunas funciones del sitio podrían no estar disponibles.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-nuditos-marron-oscuro mb-4">
              5. Tus derechos
            </h2>
            <p className="text-nuditos-marron leading-relaxed mb-4">
              Tienes derecho a acceder, rectificar o eliminar tu información personal en cualquier momento. Para ejercer estos derechos, contáctanos a hol@nuditos.com.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-nuditos-marron-oscuro mb-4">
              6. Contacto
            </h2>
            <p className="text-nuditos-marron leading-relaxed">
              Si tienes preguntas sobre esta política, puedes contactarnos a través de nuestro formulario de contacto o escribiendo a hol@nuditos.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
