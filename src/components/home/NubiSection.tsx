import Button from '../Button';
import Link from 'next/link';
import { Heart, Sparkles, HandHeart } from 'lucide-react';

const values = [
  {
    icon: HandHeart,
    title: 'Estímulo Sensorial',
    text: 'El peso y la textura actúan sobre el sistema nervioso, ayudando a reducir la ansiedad.',
    color: 'bg-nuditos-rosa',
    iconColor: 'text-nuditos-marron',
  },
  {
    icon: Sparkles,
    title: 'Apoyo Terapéutico',
    text: 'Facilita la calma durante episodios de hiperactividad o estrés extremo.',
    color: 'bg-nuditos-amarillo',
    iconColor: 'text-nuditos-marron',
  },
  {
    icon: Heart,
    title: 'Apego Seguro',
    text: 'Un anclaje físico que transmite una sensación constante de compañía y seguridad.',
    color: 'bg-nuditos-verde',
    iconColor: 'text-nuditos-marron',
  },
];

export default function NubiSection() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-nuditos-crema to-white" aria-labelledby="nubi-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-nuditos-marron-claro font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 block">
            Regulación Emocional
          </span>
          <h2 id="nubi-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-nuditos-marron-oscuro mb-4 sm:mb-6">
            Nubi, tu ancla de calma
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-nuditos-marron leading-relaxed">
            Un amigurumi diseñado bajo principios terapéuticos para brindar contención y seguridad.
          </p>
        </div>

        {/* Content con Image Background y Glassmorphism */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden mb-16 sm:mb-20 shadow-medium">
          <div className="absolute inset-0 bg-gradient-to-br from-nuditos-rosa via-nuditos-crema to-nuditos-amarillo-claro">
            {/* Placeholder para imagen real */}
          </div>

          {/* Capa decorativa */}
          <div className="absolute -bottom-10 -right-10 w-48 h-48 sm:w-64 sm:h-64 bg-nuditos-verde-claro rounded-full opacity-50 blur-3xl mix-blend-multiply" />
          <div className="absolute top-0 -left-10 w-40 h-40 sm:w-56 sm:h-56 bg-nuditos-rosa-claro rounded-full opacity-50 blur-3xl mix-blend-multiply" />

          {/* Contenido Glassmorphism */}
          <div className="relative z-10 px-4 py-16 sm:p-12 lg:p-16 flex items-center justify-center min-h-[400px] sm:min-h-[500px]">
            <div className="bg-white/70 backdrop-blur-md border border-white/60 p-6 sm:p-10 lg:p-12 rounded-2xl sm:rounded-3xl max-w-2xl text-center shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
              <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 rounded-full bg-nuditos-crema flex items-center justify-center shadow-soft">
                <svg className="w-10 h-10 sm:w-12 sm:h-12 text-nuditos-marron" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9c.83 0 1.5-.67 1.5-1.5S7.83 8 7 8s-1.5.67-1.5 1.5S6.17 11 7 11zm3.5 3c-.83 0-1.5-.67-1.5-1.5S9.67 11 10.5 11s1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm3.5-3c-.83 0-1.5-.67-1.5-1.5S13.17 8 14 8s1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm3.5 3c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
                </svg>
              </div>
              <blockquote className="text-base sm:text-lg text-nuditos-marron-oscuro font-medium leading-relaxed mb-4">
                "No es solo un muñeco. Es esa presencia física y el estímulo sensorial que buscas cuando atraviesas la tormenta."
              </blockquote>
              <p className="text-sm sm:text-base text-nuditos-marron leading-relaxed mb-8">
                El diseño abrazable de Nubi estimula la respuesta de relajación del sistema nervioso, siendo una herramienta cálida en la gestión de la ansiedad.
              </p>

              <Link href="/nubi">
                <Button size="lg" variant="primary" className="shadow-soft hover:shadow-medium hover:scale-105 active:scale-95">
                  Explorar Opciones Terapéuticas
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group text-center p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 focus-within:ring-2 focus-within:ring-nuditos-marron focus-within:ring-offset-2"
            >
              <div className={`w-14 h-14 sm:w-16 sm:h-16 ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-5 sm:mb-6 transition-transform duration-300 group-hover:scale-110`}>
                <value.icon className="w-7 h-7 sm:w-8 sm:h-8 text-nuditos-marron" aria-hidden="true" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-nuditos-marron-oscuro mb-3">
                {value.title}
              </h3>
              <p className="text-sm sm:text-base text-nuditos-marron leading-relaxed">
                {value.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
