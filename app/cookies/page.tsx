export const metadata = {
  title: 'Política de Cookies - Nuditos',
  description: 'Cómo y por qué usamos cookies en nuestro sitio.',
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-nuditos-crema py-12 sm:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-nuditos-marron-oscuro mb-4">
            Política de Cookies
          </h1>
          <p className="text-nuditos-marron">Última actualización: Abril 2026</p>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-soft space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-nuditos-marron-oscuro mb-4">
              1. ¿Qué son las cookies?
            </h2>
            <p className="text-nuditos-marron leading-relaxed mb-4">
              Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas nuestro sitio. Nos ayudan a brindarte una mejor experiencia y recordar tus preferencias.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-nuditos-marron-oscuro mb-4">
              2. Cookies que utilizamos
            </h2>
            <div className="space-y-4">
              <div className="bg-nuditos-crema rounded-2xl p-6">
                <h3 className="font-bold text-nuditos-marron-oscuro mb-2">
                  🛒 Cookies esenciales
                </h3>
                <p className="text-nuditos-marron text-sm">
                  Necesarias para el funcionamiento del carrito de compras. Sin estas cookies, no podrías agregar productos o completar tu compra. No pueden ser deshabilitadas.
                </p>
              </div>

              <div className="bg-nuditos-rosa-claro rounded-2xl p-6">
                <h3 className="font-bold text-nuditos-marron-oscuro mb-2">
                  📊 Cookies analíticas
                </h3>
                <p className="text-nuditos-marron text-sm">
                  Nos ayudan a entender cómo usas el sitio (páginas visitadas, tiempo de sesión) para mejorar la experiencia. Se puede optar por no participar.
                </p>
              </div>

              <div className="bg-nuditos-amarillo-claro rounded-2xl p-6">
                <h3 className="font-bold text-nuditos-marron-oscuro mb-2">
                  💾 Cookies de preferencias
                </h3>
                <p className="text-nuditos-marron text-sm">
                  Recuerdan tu configuración como el idioma, región o preferencias de visualización para personalizar tu experiencia.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-nuditos-marron-oscuro mb-4">
              3. Cookies de terceros
            </h2>
            <p className="text-nuditos-marron leading-relaxed mb-4">
              Algunos servicios que utilizamos pueden colocar sus propias cookies:
            </p>
            <ul className="list-disc list-inside text-nuditos-marron space-y-2 ml-4">
              <li><strong>Procesadores de pago:</strong> Para transacciones seguras</li>
              <li><strong>Analytics:</strong> Para estadísticas de uso</li>
              <li><strong>Redes sociales:</strong> Para botones de compartir</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-nuditos-marron-oscuro mb-4">
              4. Cómo gestionar cookies
            </h2>
            <p className="text-nuditos-marron leading-relaxed mb-4">
              Puedes controlar las cookies a través de la configuración de tu navegador:
            </p>
            <ul className="list-disc list-inside text-nuditos-marron space-y-2 ml-4">
              <li><strong>Chrome:</strong> Configuración → Privacidad → Cookies</li>
              <li><strong>Firefox:</strong> Opciones → Privacidad → Cookies</li>
              <li><strong>Safari:</strong> Preferencias → Privacidad → Cookies</li>
              <li><strong>Edge:</strong> Configuración → Privacidad → Cookies</li>
            </ul>
            <p className="text-nuditos-marron leading-relaxed mt-4">
              Ten en cuenta que si deshabilitas las cookies esenciales, algunas funciones del sitio (como el carrito) no estarán disponibles.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-nuditos-marron-oscuro mb-4">
              5. Duración de cookies
            </h2>
            <div className="bg-nuditos-beige rounded-2xl p-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-nuditos-marron-claro">
                    <th className="text-left py-2 text-nuditos-marron-oscuro">Tipo</th>
                    <th className="text-left py-2 text-nuditos-marron-oscuro">Duración</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-nuditos-rosa-claro">
                    <td className="py-3">Carrito de compras</td>
                    <td className="py-3">30 días</td>
                  </tr>
                  <tr className="border-b border-nuditos-rosa-claro">
                    <td className="py-3">Preferencias</td>
                    <td className="py-3">1 año</td>
                  </tr>
                  <tr>
                    <td className="py-3">Analíticas</td>
                    <td className="py-3">2 años</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-nuditos-marron-oscuro mb-4">
              6. Contacto
            </h2>
            <p className="text-nuditos-marron leading-relaxed">
              Si tienes preguntas sobre nuestra política de cookies, contáctanos a hol@nuditos.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
