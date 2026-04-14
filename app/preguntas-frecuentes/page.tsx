'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Head from 'next/head';

const faqs = [
  {
    question: '¿Qué es un amigurumi terapéutico?',
    answer: 'Es un muñeco tejido diseñado específicamente para brindar regulación emocional. Utiliza principios como el peso distribuido y texturas suaves para activar la respuesta de relajación del sistema nervioso.',
  },
  {
    question: '¿Cuál es la diferencia entre el modelo Clásico y el Terapéutico?',
    answer: 'El modelo Clásico es ligero y abrazable, ideal para compañía diaria. El modelo Terapéutico tiene peso distribuido (aproximadamente 1kg) que brinda contención profunda y ayuda a reducir la ansiedad.',
  },
  {
    question: '¿Los materiales son hipoalergénicos?',
    answer: 'Sí, todos nuestros productos están hechos con algodón orgánico certificado y rellenos hipoalergénicos. Son seguros incluso para pieles sensibles.',
  },
  {
    question: '¿Puedo lavar a mi Nubi?',
    answer: 'Sí, recomendamos lavado a mano con agua fría y jabón neutro. Dejar secar al aire libre, nunca en secadora. El modelo terapéutico puede requerir más tiempo de secado debido al peso.',
  },
  {
    question: '¿Hacen envíos a todo el país?',
    answer: 'Sí, enviamos a toda Argentina. Los tiempos varían entre 2-7 días hábiles según la ubicación. Envío gratis para compras superiores a $50.000.',
  },
  {
    question: '¿Puedo personalizar el nombre de mi Nubi?',
    answer: '¡Sí! En la página de producto puedes ingresar un nombre personalizado. Esto ayuda a fortalecer el vínculo de apego con tu compañero.',
  },
  {
    question: '¿Tienen tienda física?',
    answer: 'No, somos 100% online. Pero puedes visitarnos en ferias artesanales que anunciamos en nuestras redes sociales.',
  },
  {
    question: '¿Aceptan devoluciones?',
    answer: 'Sí, tienes 30 días para cambios o devoluciones sin cargo. El producto debe estar en su estado original.',
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <Head>
        <title>Preguntas Frecuentes - Nuditos</title>
        <meta name="description" content="Resolvemos tus dudas sobre nuestros productos." />
      </Head>
      <div className="min-h-screen bg-nuditos-crema py-12 sm:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-nuditos-marron-oscuro mb-4">
            Preguntas Frecuentes
          </h1>
          <p className="text-xl text-nuditos-marron">
            Resolvemos tus dudas
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-soft overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-nuditos-crema/50 transition-soft"
              >
                <span className="font-bold text-nuditos-marron-oscuro pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-nuditos-marron transition-transform flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <p className="px-6 pb-5 text-nuditos-marron leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-nuditos-marron-oscuro rounded-3xl p-8 text-center text-white">
          <p className="text-lg mb-4">¿No encontraste tu respuesta?</p>
          <a
            href="/contacto"
            className="inline-block bg-white text-nuditos-marron-oscuro px-6 py-3 rounded-full font-semibold hover:bg-nuditos-crema transition-soft"
          >
            Contáctanos
          </a>
        </div>
      </div>
      </div>
    </>
  );
}
