import Button from '../Button';
import Link from 'next/link';
import { Heart, Sparkles, HandHeart } from 'lucide-react';

const values = [
  {
    icon: HandHeart,
    title: 'Estímulo Sensorial',
    text: 'El peso y la textura actúan sobre el sistema nervioso, ayudando a reducir la ansiedad.',
    color: 'bg-nuditos-rosa',
  },
  {
    icon: Sparkles,
    title: 'Apoyo Terapéutico',
    text: 'Facilita la calma durante episodios de hiperactividad o estrés extremo.',
    color: 'bg-nuditos-amarillo',
  },
  {
    icon: Heart,
    title: 'Apego Seguro',
    text: 'Un anclaje físico que transmite una sensación constante de compañía y seguridad.',
    color: 'bg-nuditos-verde',
  },
];

export default function NubiSection() {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-nuditos-crema to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-nuditos-marron-claro font-semibold text-sm uppercase tracking-wider mb-3 block">
            Regulación Emocional
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-nuditos-marron-oscuro mb-6">
            Nubi, tu ancla de calma
          </h2>
          <p className="text-xl text-nuditos-marron leading-relaxed mb-4">
            Un amigurumi diseñado bajo principios terapéuticos para brindar contención y seguridad.
          </p>
        </div>

        {/* Content con Image Background y Glassmorphism */}
        <div className="relative rounded-3xl overflow-hidden mb-20 shadow-medium">
          {/* Espacio para que insertes la imagen de fondo */}
          <div className="absolute inset-0 bg-gradient-to-br from-nuditos-rosa via-nuditos-crema to-nuditos-amarillo-claro">
            {/* Aquí puedes colocar un tag <img /> con object-fit cover en un futuro */}
          </div>
          
          {/* Capa decorativa para profundidad */}
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-nuditos-verde-claro rounded-full opacity-60 blur-3xl mix-blend-multiply" />
          <div className="absolute top-0 -left-10 w-56 h-56 bg-nuditos-rosa-claro rounded-full opacity-60 blur-3xl mix-blend-multiply" />

          {/* Contenido en Glassmorphism centrado y flotante */}
          <div className="relative z-10 px-6 py-20 sm:p-24 flex items-center justify-center min-h-[500px]">
            <div className="bg-white/60 backdrop-blur-md border border-white/50 p-8 sm:p-12 rounded-3xl max-w-2xl text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <span className="text-6xl sm:text-7xl mb-6 block drop-shadow-md animate-gentle-float">🐰</span>
              <p className="text-lg sm:text-xl text-nuditos-marron-oscuro font-medium leading-relaxed mb-4">
                "No es solo un muñeco. Es esa presencia física y el estímulo sensorial que buscas cuando atraviesas la tormenta."
              </p>
              <p className="text-base sm:text-lg text-nuditos-marron leading-relaxed mb-8">
                El diseño abrazable de Nubi estimula la respuesta de relajación del sistema nervioso, siendo una herramienta cálida en la gestión de la ansiedad.
              </p>

              <div className="pt-2">
                <Link href="/nubi">
                  <Button size="lg" variant="primary" className="shadow-soft hover:shadow-medium">
                    Explorar Opciones Terapéuticas
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid sm:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-3xl bg-nuditos-crema shadow-soft hover:shadow-medium transition-soft"
            >
              <div className={`w-16 h-16 ${value.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <value.icon className="w-8 h-8 text-nuditos-marron" />
              </div>
              <h3 className="text-xl font-bold text-nuditos-marron-oscuro mb-3">
                {value.title}
              </h3>
              <p className="text-nuditos-marron leading-relaxed">
                {value.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
