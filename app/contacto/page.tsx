import { Mail, MessageCircle, Clock } from 'lucide-react';
import Button from '@/src/components/Button';

export const metadata = {
  title: 'Contacto - Nuditos',
  description: '¿Tienes preguntas? Estamos aquí para ayudarte.',
};

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-nuditos-crema py-12 sm:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-nuditos-marron-oscuro mb-4">
            Contacto
          </h1>
          <p className="text-xl text-nuditos-marron">
            Estamos aquí para ayudarte en lo que necesites
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-soft mb-12">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-nuditos-rosa flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-nuditos-marron" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-nuditos-marron-oscuro mb-1">Email</h3>
                <p className="text-nuditos-marron">hol@nuditos.com</p>
                <p className="text-sm text-nuditos-marron/70 mt-1">Respondemos en 24-48 horas</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-nuditos-verde-claro flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-6 h-6 text-nuditos-marron" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-nuditos-marron-oscuro mb-1">WhatsApp</h3>
                <p className="text-nuditos-marron">+54 9 11 1234 5678</p>
                <p className="text-sm text-nuditos-marron/70 mt-1">Lunes a Viernes de 9 a 18hs</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-nuditos-amarillo-claro flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-nuditos-marron" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-nuditos-marron-oscuro mb-1">Tiempo de respuesta</h3>
                <p className="text-nuditos-marron">Generalmente respondemos el mismo día</p>
                <p className="text-sm text-nuditos-marron/70 mt-1">Durante días hábiles</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-nuditos-marron-oscuro rounded-3xl p-8 sm:p-12 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">¿Prefieres escribirnos directamente?</h2>
          <p className="text-white/80 mb-8">
            Completa el formulario y nos pondremos en contacto a la brevedad.
          </p>
          <Button variant="secondary" size="lg" className="bg-white text-nuditos-marron-oscuro hover:bg-nuditos-crema">
            Enviar mensaje
          </Button>
        </div>
      </div>
    </div>
  );
}
