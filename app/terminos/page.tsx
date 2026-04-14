export const metadata = {
  title: 'Términos y Condiciones - Nuditos',
  description: 'Términos de uso de nuestro sitio web.',
};

export default function TerminosPage() {
  return (
    <div className="min-h-screen bg-nuditos-crema py-12 sm:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-nuditos-marron-oscuro mb-4">
            Términos y Condiciones
          </h1>
          <p className="text-nuditos-marron">Última actualización: Abril 2026</p>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-soft space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-nuditos-marron-oscuro mb-4">
              1. Aceptación de términos
            </h2>
            <p className="text-nuditos-marron leading-relaxed mb-4">
              Al acceder y utilizar este sitio web, aceptas cumplir con estos términos y condiciones. Si no estás de acuerdo, por favor no utilices nuestros servicios.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-nuditos-marron-oscuro mb-4">
              2. Productos
            </h2>
            <p className="text-nuditos-marron leading-relaxed mb-4">
              Todos los productos son hechos a mano, por lo que pueden existir pequeñas variaciones que los hacen únicos. Las imágenes son representativas, pero el producto final puede tener ligeras diferencias.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-nuditos-marron-oscuro mb-4">
              3. Precios y pagos
            </h2>
            <p className="text-nuditos-marron leading-relaxed mb-4">
              Los precios están expresados en pesos argentinos e incluyen IVA. Aceptamos tarjetas de crédito, débito y transferencias bancarias. Nos reservamos el derecho de modificar precios sin previo aviso.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-nuditos-marron-oscuro mb-4">
              4. Pedidos
            </h2>
            <p className="text-nuditos-marron leading-relaxed mb-4">
              Los pedidos se procesan en 2-3 días hábiles. Productos personalizados pueden requerir 5-7 días adicionales. Te notificaremos cuando tu pedido sea despachado.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-nuditos-marron-oscuro mb-4">
              5. Propiedad intelectual
            </h2>
            <p className="text-nuditos-marron leading-relaxed mb-4">
              Todo el contenido de este sitio (imágenes, textos, logos) es propiedad de Nuditos y está protegido por leyes de propiedad intelectual. No puedes usarlo sin autorización previa.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-nuditos-marron-oscuro mb-4">
              6. Limitación de responsabilidad
            </h2>
            <p className="text-nuditos-marron leading-relaxed mb-4">
              Nuditos no se responsabiliza por daños indirectos o consecuentes derivados del uso de este sitio o productos. Nuestra responsabilidad máxima está limitada al monto de tu compra.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-nuditos-marron-oscuro mb-4">
              7. Modificaciones
            </h2>
            <p className="text-nuditos-marron leading-relaxed mb-4">
              Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entran en vigor inmediatamente después de su publicación.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-nuditos-marron-oscuro mb-4">
              8. Ley aplicable
            </h2>
            <p className="text-nuditos-marron leading-relaxed">
              Estos términos se rigen por las leyes de la República Argentina. Cualquier disputa se someterá a los tribunales correspondientes.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
