"use client";

import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useState } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const services = [
  {
    title: "Limpieza facial",
    description:
      "Protocolos personalizados para purificar, equilibrar e iluminar la piel.",
    longDescription:
      "Un tratamiento pensado para limpiar en profundidad, oxigenar la piel y devolverle luminosidad. Ideal para quienes buscan una piel más fresca, uniforme y cuidada desde la primera sesión.",
    image: "/images/skincare.jpg",
    duration: "60 minutos",
    includes: [
      "Diagnóstico inicial de la piel",
      "Limpieza profunda y exfoliación",
      "Extracciones suaves según necesidad",
      "Máscara final y recomendaciones posteriores",
    ],
    benefits: ["Luminosidad", "Piel más uniforme", "Sensación de frescura"],
  },
  {
    title: "Depilación láser",
    description:
      "Tecnología avanzada para una experiencia segura, cómoda y duradera.",
    longDescription:
      "Tratamiento progresivo orientado a reducir el vello de forma duradera, con tecnología moderna y protocolos de cuidado pensados para brindar confort y seguridad durante cada sesión.",
    image: "/images/depilacion.jpg",
    duration: "45 minutos",
    includes: [
      "Evaluación personalizada",
      "Aplicación por zona",
      "Cuidado de la piel antes y después",
      "Seguimiento del tratamiento",
    ],
    benefits: ["Resultados progresivos", "Mayor confort", "Menos irritación"],
  },
  {
    title: "Masajes relajantes",
    description:
      "Rituales de bienestar diseñados para liberar tensión y reconectar.",
    longDescription:
      "Una experiencia corporal orientada a relajar músculos, aliviar tensiones y generar una sensación profunda de bienestar físico y mental en un entorno cálido y delicado.",
    image: "/images/masajes.jpg",
    duration: "50 minutos",
    includes: [
      "Ambientación relajante",
      "Masaje corporal personalizado",
      "Técnicas suaves de liberación",
      "Momento final de descanso",
    ],
    benefits: ["Relajación", "Alivio de tensión", "Bienestar integral"],
  },
];

const benefits = [
  "Atención personalizada",
  "Profesionales certificados",
  "Tecnología estética avanzada",
  "Ambiente cálido y exclusivo",
];

const testimonials = [
  {
    name: "Sofía M.",
    text: "La atención fue impecable. El lugar se siente delicado, profesional y muy cuidado.",
  },
  {
    name: "Camila R.",
    text: "Me encantó la experiencia completa. Se nota el nivel de detalle en todo.",
  },
  {
    name: "Valentina G.",
    text: "Volvería sin dudarlo. Me sentí cómoda, bien atendida y salí feliz con el resultado.",
  },
];

export default function Home() {
  const [selectedService, setSelectedService] = useState<
    (typeof services)[number] | null
  >(null);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="bg-[#fffafc] text-zinc-800">
      {/* NAVBAR */}
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-white/30 bg-white/70 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#">
            <motion.h1
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="font-display cursor-pointer text-3xl font-semibold tracking-wide text-[#d46a92] transition duration-300 hover:opacity-80"
            >
              BellaSkin
            </motion.h1>
          </a>

          {/* MENU DESKTOP */}
          <div className="hidden items-center gap-8 text-sm md:flex">
            <a
              href="#servicios"
              className="transition duration-300 hover:text-[#d46a92] hover:opacity-80"
            >
              Servicios
            </a>
            <a
              href="#beneficios"
              className="transition duration-300 hover:text-[#d46a92] hover:opacity-80"
            >
              Beneficios
            </a>
            <a
              href="#testimonios"
              className="transition duration-300 hover:text-[#d46a92] hover:opacity-80"
            >
              Testimonios
            </a>
            <a
              href="#contacto"
              className="transition duration-300 hover:text-[#d46a92] hover:opacity-80"
            >
              Contacto
            </a>
            <a
              href="#contacto"
              className="rounded-full bg-[#d46a92] px-5 py-2.5 text-sm font-medium text-white shadow-[0_10px_30px_rgba(212,106,146,0.28)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#c45882]"
            >
              Reservar turno
            </a>
          </div>

          {/* BOTÓN MOBILE */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#f3dce5] bg-white/80 text-[#d46a92] shadow-sm transition duration-300 hover:bg-white md:hidden"
            aria-label="Abrir menú"
          >
            <span className="text-2xl leading-none">
              {mobileMenuOpen ? "×" : "☰"}
            </span>
          </button>
        </div>

        {/* MENU MOBILE */}
        {mobileMenuOpen && (
          <div className="border-t border-[#f3dce5] bg-white/90 px-6 py-5 backdrop-blur-xl md:hidden">
            <div className="flex flex-col items-center gap-4 text-sm text-zinc-700">
              <a
                href="#servicios"
                onClick={() => setMobileMenuOpen(false)}
                className="transition hover:text-[#d46a92]"
              >
                Servicios
              </a>
              <a
                href="#beneficios"
                onClick={() => setMobileMenuOpen(false)}
                className="transition hover:text-[#d46a92]"
              >
                Beneficios
              </a>
              <a
                href="#testimonios"
                onClick={() => setMobileMenuOpen(false)}
                className="transition hover:text-[#d46a92]"
              >
                Testimonios
              </a>
              <a
                href="#contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="transition hover:text-[#d46a92]"
              >
                Contacto
              </a>
              <a
                href="#contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 rounded-full bg-[#d46a92] px-5 py-2.5 text-sm font-medium text-white shadow-[0_10px_30px_rgba(212,106,146,0.2)] transition duration-300 hover:bg-[#c45882]"
              >
                Reservar turno
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden">
        <Image
          src="/images/skincare.jpg"
          alt="Estética BellaSkin"
          fill
          priority
          className="object-cover blur-[1px] scale-[1.02]"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,10,16,0.62)_0%,rgba(33,18,24,0.32)_45%,rgba(120,56,84,0.10)_100%)]" />
        <div className="absolute left-[-80px] top-20 h-64 w-64 rounded-full bg-pink-300/20 blur-3xl" />

        <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-6 py-20 md:grid-cols-2">
          <div className="text-white">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mb-5 inline-flex rounded-full border border-white/15 bg-white/8 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-white/85 backdrop-blur-md md:text-xs"
            >
              Belleza · bienestar · cuidado profesional
            </motion.div>

            <motion.h2
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ delay: 0.12 }}
              className="font-display mb-6 max-w-xl text-5xl font-semibold leading-[1] tracking-[-0.01em] md:text-6xl"
            >
              Una experiencia estética que se siente tan bien como se ve
            </motion.h2>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ delay: 0.22 }}
              className="mb-8 max-w-xl text-base leading-7 text-white/85 md:text-lg"
            >
              Tratamientos faciales, corporales y de bienestar en un espacio
              premium, delicado y visualmente cuidado.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ delay: 0.32 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contacto"
                className="rounded-full bg-[#d46a92] px-7 py-3 font-medium text-white shadow-[0_14px_40px_rgba(212,106,146,0.32)] transition duration-300 hover:-translate-y-1 hover:bg-[#c45882]"
              >
                Reservar turno
              </a>
              <a
                href="#servicios"
                className="rounded-full border border-white/20 bg-white/5 px-7 py-3 font-medium text-white backdrop-blur-md transition duration-300 hover:bg-white/15"
              >
                Explorar servicios
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="relative hidden items-center justify-center md:flex"
          >
            <div className="relative h-[500px] w-[360px] overflow-hidden rounded-[32px] border border-white/10 bg-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.35)] backdrop-blur-md">
              <Image
                src="/images/depilacion.jpg"
                alt="Tratamiento estético"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-3 -left-4 rounded-[18px] border border-white/10 bg-white/10 px-5 py-4 text-white shadow-lg backdrop-blur-md">
              <p className="font-display text-lg">+500 clientas felices</p>
              <p className="text-[11px] text-white/75">
                Atención personalizada y resultados visibles
              </p>
            </div>
          </motion.div>
        </div>

        <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block">
          <p className="font-display text-[90px] font-semibold tracking-[0.08em] text-white/[0.03]">
            BELLA
          </p>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="mx-auto max-w-7xl px-6 py-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#d46a92]">
            Servicios
          </p>
          <h3 className="font-display mb-4 text-4xl font-semibold md:text-5xl">
            Tratamientos con enfoque estético y sensorial
          </h3>
          <p className="mx-auto max-w-2xl text-base leading-7 text-zinc-600">
            Una propuesta cuidada visual y profesionalmente, diseñada para que
            la experiencia se sienta premium desde el primer vistazo.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ delay: index * 0.12 }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-[28px] border border-[#f3dce5] bg-white/90 shadow-[0_14px_50px_rgba(20,20,20,0.06)] transition duration-300 hover:shadow-[0_20px_60px_rgba(20,20,20,0.08)]"
            >
              <div className="relative overflow-hidden p-4 pb-0">
                <div className="absolute inset-x-10 top-8 z-10 h-20 rounded-full bg-pink-200/20 blur-2xl" />
                <Image
                  src={service.image}
                  alt={service.title}
                  width={700}
                  height={500}
                  className="relative h-64 w-full rounded-[24px] object-cover transition duration-700 group-hover:scale-[1.04]"
                />
              </div>

              <div className="p-7">
                <div className="mb-4 inline-flex rounded-full bg-[#fff4f7] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-[#d46a92]">
                  BellaSkin
                </div>

                <h4 className="font-display mb-3 text-3xl font-semibold text-zinc-900">
                  {service.title}
                </h4>

                <p className="mb-6 leading-7 text-zinc-600">
                  {service.description}
                </p>

                <button
                  onClick={() => setSelectedService(service)}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#d46a92] transition duration-300 hover:gap-2.5 hover:opacity-80"
                >
                  Más información <span>→</span>
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* BENEFICIOS */}
      <section
        id="beneficios"
        className="relative overflow-hidden bg-[linear-gradient(180deg,#fff5f8_0%,#ffffff_100%)] px-6 py-28"
      >
        <div className="absolute left-0 top-10 h-56 w-56 rounded-full bg-pink-200/20 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#d46a92]">
              Por qué elegirnos
            </p>
            <h3 className="font-display mb-5 text-4xl font-semibold leading-tight md:text-5xl">
              Una estética con imagen premium y experiencia real de marca
            </h3>
            <p className="mb-8 max-w-xl leading-7 text-zinc-600">
              No se trata solo del tratamiento. Se trata de cómo se siente el
              espacio, cómo comunica la marca y cómo cada elemento visual eleva
              la percepción del servicio.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.45 }}
                  className="rounded-2xl border border-[#f3dce5] bg-white px-5 py-5 shadow-sm"
                >
                  <span className="text-sm font-medium text-zinc-800">
                    ✦ {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[32px] border border-white/50 shadow-[0_30px_80px_rgba(212,106,146,0.18)]"
          >
            <Image
              src="/images/skincare.jpg"
              alt="Experiencia BellaSkin"
              width={900}
              height={650}
              className="h-[540px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
            <div className="absolute bottom-6 left-6 rounded-2xl border border-white/20 bg-white/15 px-5 py-4 text-white backdrop-blur-lg">
              <p className="font-display text-2xl">Belleza con intención</p>
              <p className="text-sm text-white/85">
                Diseño, confort y profesionalismo en una misma experiencia
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section id="testimonios" className="mx-auto max-w-7xl px-6 py-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#d46a92]">
            Testimonios
          </p>
          <h3 className="font-display text-4xl font-semibold md:text-5xl">
            Lo que transmite la experiencia
          </h3>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ delay: index * 0.12 }}
              className="rounded-[28px] border border-[#f3dce5] bg-white p-8 shadow-[0_14px_40px_rgba(20,20,20,0.05)]"
            >
              <div className="mb-5 text-4xl leading-none text-[#e7a8bf]">“</div>
              <p className="mb-6 leading-7 text-zinc-600">{item.text}</p>
              <div className="h-px w-16 bg-[#f2d4df]" />
              <h4 className="mt-4 font-display text-2xl font-semibold text-zinc-900">
                {item.name}
              </h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACTO */}
      <section
        id="contacto"
        className="relative overflow-hidden bg-[#1d1419] px-6 py-28 text-white"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,106,146,0.28),transparent_30%)]" />
        <div className="absolute bottom-[-80px] left-[10%] h-60 w-60 rounded-full bg-pink-300/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl text-center">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-pink-300"
          >
            Contacto
          </motion.p>

          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ delay: 0.1 }}
            className="font-display mb-6 text-4xl font-semibold md:text-6xl"
          >
            Tu momento de bienestar empieza acá
          </motion.h3>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ delay: 0.2 }}
            className="mx-auto mb-12 max-w-2xl leading-7 text-white/80"
          >
            Reservá tu turno y viví una experiencia estética pensada para
            cuidarte, relajarte y hacerte sentir bien desde el primer momento.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ delay: 0.3 }}
            className="mb-12 grid gap-8 text-white/85 md:grid-cols-3"
          >
            <div className="text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-pink-300/80">
                Ubicación
              </p>
              <p className="font-display mt-2 text-xl">Buenos Aires</p>
            </div>

            <div className="text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-pink-300/80">
                Teléfono
              </p>
              <p className="font-display mt-2 text-xl">+54 11 1234 5678</p>
            </div>

            <div className="text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-pink-300/80">
                Email
              </p>
              <p className="font-display mt-2 text-xl">
                contacto@bellaskin.com
              </p>
            </div>
          </motion.div>

          <motion.a
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ delay: 0.4 }}
            href="https://wa.me/541112345678"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-[#d46a92] px-8 py-3 font-medium text-white shadow-[0_14px_40px_rgba(212,106,146,0.3)] transition duration-300 hover:-translate-y-1 hover:bg-[#c45882]"
          >
            Sacar turno por WhatsApp
          </motion.a>
        </div>
      </section>

      {/* FLOAT BUTTON */}
      <a
        href="https://wa.me/541112345678"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 rounded-full bg-green-500 px-5 py-3 text-sm font-medium text-white shadow-lg transition duration-300 hover:scale-110"
      >
        WhatsApp
      </a>

      {/* MODAL SERVICIO */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/55 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[32px] bg-[#fffafc] shadow-[0_30px_100px_rgba(0,0,0,0.25)]"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-xl text-zinc-700 shadow-md transition hover:scale-105"
              >
                ×
              </button>

              <div className="grid md:grid-cols-2">
                <div className="relative min-h-[320px] md:min-h-full">
                  <Image
                    src={selectedService.image}
                    alt={selectedService.title}
                    fill
                    className="object-cover md:rounded-l-[32px]"
                  />
                </div>

                <div className="p-8 md:p-10">
                  <div className="mb-4 inline-flex rounded-full bg-[#fff2f6] px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-[#d46a92]">
                    BellaSkin
                  </div>

                  <h3 className="font-display mb-4 text-4xl font-semibold text-zinc-900">
                    {selectedService.title}
                  </h3>

                  <p className="mb-6 leading-7 text-zinc-600">
                    {selectedService.longDescription}
                  </p>

                  <div className="mb-6">
                    <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#d46a92]">
                      Duración
                    </p>
                    <p className="text-zinc-700">{selectedService.duration}</p>
                  </div>

                  <div className="mb-6">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#d46a92]">
                      Incluye
                    </p>
                    <ul className="space-y-2 text-zinc-600">
                      {selectedService.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1 text-[#d46a92]">✦</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#d46a92]">
                      Beneficios
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {selectedService.benefits.map((item) => (
                        <span
                          key={item}
                          className="rounded-full bg-[#fff2f6] px-4 py-2 text-sm text-[#b84f78]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href="#contacto"
                    onClick={() => setSelectedService(null)}
                    className="inline-block rounded-full bg-[#d46a92] px-5 py-2.5 text-sm md:px-7 md:py-3 md:text-base font-medium text-white shadow-[0_14px_40px_rgba(212,106,146,0.25)] transition duration-300 hover:-translate-y-1 hover:bg-[#c45882]"
                  >
                    Reservar este servicio
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FOOTER */}
      {/* FOOTER */}
      <footer className="border-t border-[#f3dce5] bg-[#fffafc] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          {/* GRID */}
          <div className="grid gap-12 text-center md:grid-cols-3">
            {/* MARCA */}
            <div className="flex flex-col items-center">
              <h4 className="font-display mb-4 text-2xl font-semibold text-[#d46a92]">
                BellaSkin
              </h4>
              <p className="max-w-xs text-sm leading-6 text-zinc-500">
                Estética enfocada en bienestar, cuidado personal y una
                experiencia sensorial delicada.
              </p>
            </div>

            {/* NAVEGACIÓN */}
            <div className="flex flex-col items-center">
              <p className="mb-4 text-[11px] uppercase tracking-[0.3em] text-[#d46a92]">
                Navegación
              </p>
              <ul className="space-y-2 text-sm text-zinc-600">
                <li>
                  <a
                    href="#servicios"
                    className="transition hover:text-[#d46a92]"
                  >
                    Servicios
                  </a>
                </li>
                <li>
                  <a
                    href="#beneficios"
                    className="transition hover:text-[#d46a92]"
                  >
                    Beneficios
                  </a>
                </li>
                <li>
                  <a
                    href="#contacto"
                    className="transition hover:text-[#d46a92]"
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            {/* CONTACTO */}
            <div className="flex flex-col items-center">
              <p className="mb-4 text-[11px] uppercase tracking-[0.3em] text-[#d46a92]">
                Contacto
              </p>
              <div className="space-y-2 text-sm text-zinc-500">
                <p>Buenos Aires · Argentina</p>
                <p>+54 11 1234 5678</p>
                <p>contacto@bellaskin.com</p>
              </div>
            </div>
          </div>

          {/* BOTTOM */}
          <div className="mt-16 text-center text-xs text-zinc-400">
            © 2026 BellaSkin
          </div>
        </div>
      </footer>
    </main>
  );
}
