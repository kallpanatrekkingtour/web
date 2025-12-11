"use client"

import { Button } from "@/components/ui/button"
// Importando iconos de lucide-react para los demás elementos
import {
  Mountain,
  Users,
  Star,
  Shield,
  Globe,
  Camera,
  Compass,
  Heart,
  Zap,
  ChevronLeft,
  ChevronRight,
  Eye,
  Target,
} from "lucide-react"
// Importando iconos de react-icons/fa6 para las redes sociales
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaTiktok } from "react-icons/fa6"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState, useRef } from "react"

export default function KallpanaTrekkingTour() {
  const [scrollY, setScrollY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const paradiseCards = [
    { id: 1, src: "/images/quilotoa-lagoon.jpeg" },
    { id: 2, src: "/images/mitad-del-mundo.jpeg" },
    { id: 3, src: "/images/green-valleys.jpeg" },
    { id: 4, src: "/images/volcano-city-dusk.jpeg" },
    { id: 5, src: "/images/quito-colonial-church.jpeg" },
    { id: 6, src: "/images/waterfall-canyon.jpeg" },
  ]

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const scrollToSlide = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const cardWidth = 400
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth
      container.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      {/* Background Effects */}
      <div className="fixed inset-0 opacity-30">
        <div
          className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-blue-500/10"
          style={{
            backgroundImage: `
          linear-gradient(rgba(16, 185, 129, 0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(16, 185, 129, 0.05) 1px, transparent 1px)
        `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Floating Shapes */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-20 animate-pulse"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 12}%`,
              transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
              animationDelay: `${i * 0.5}s`,
            }}
          >
            <div className={`w-8 h-8 bg-emerald-500/20 rounded-full blur-sm`} />
          </div>
        ))}
      </div>

      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative group">
          <div className="absolute inset-0 bg-green-500 rounded-full blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500 animate-pulse"></div>
          <Button
            className="relative w-16 h-16 rounded-full bg-[#25D366] hover:bg-[#128C7E] shadow-2xl transition-all duration-500 hover:scale-110 border-2 border-green-400/30"
            onClick={() => window.open("https://wa.me/593939448398", "_blank")}
          >
            <svg className="h-9 w-9 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
            </svg>
          </Button>
        </div>
      </div>

      {/* Simplified Modern Header */}
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-700">
        <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-xl"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-blue-500/5"></div>

        <div className="relative px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-4 group">
            <div className="relative w-20 h-20">
              <Image src="/kallpana-logo-bird.png" alt="Kallpana Logo" fill className="object-contain" />
            </div>

            <div className="flex flex-col">
              <span className="text-xl font-bold text-white group-hover:text-emerald-200 transition-colors duration-500">
                KALLPANA
              </span>
              <span className="text-xs text-emerald-400 font-medium tracking-wider">AGENCIA DE VIAJES</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {[
              { name: "Inicio", href: "#inicio" },
              { name: "Paraísos", href: "#paraisos" },
              { name: "Nosotros", href: "#nosotros" },
              { name: "Contacto", href: "#contacto" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative group px-4 py-2 rounded-lg transition-all duration-500"
              >
                <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                <span className="relative text-sm font-medium text-white/80 group-hover:text-white transition-colors duration-300">
                  {item.name}
                </span>

                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-px bg-emerald-400 group-hover:w-6 transition-all duration-500"></div>
              </Link>
            ))}
          </nav>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex flex-col gap-1">
                <div className="w-4 h-px bg-white/80"></div>
                <div className="w-4 h-px bg-white/80"></div>
                <div className="w-4 h-px bg-white/80"></div>
              </div>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 relative z-10 pt-20">
        {/* Hero Section */}
        <section id="inicio" className="relative w-full py-32 md:py-40 lg:py-48 overflow-hidden">
          <div className="container px-6 md:px-8 mx-auto relative">
            <div className="flex flex-col items-center space-y-12 text-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-emerald-500/10 backdrop-blur-xl border border-emerald-400/30 text-emerald-300 text-sm font-medium">
                  <Globe className="h-5 w-5" />
                  Experiencias Extraordinarias de Viaje
                </div>

                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none">
                  <span className="bg-gradient-to-r from-white via-emerald-200 to-blue-200 bg-clip-text text-transparent">
                    Vive lo
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-emerald-300 via-blue-300 to-rose-300 bg-clip-text text-transparent">
                    Imposible
                  </span>
                </h1>

                <p className="mx-auto max-w-3xl text-xl md:text-2xl text-white/80 leading-relaxed font-light">
                  Descubre destinos que desafían la imaginación. Cada viaje es una historia épica esperando ser vivida.
                  Conectamos almas aventureras con los rincones más extraordinarios del planeta.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-8">
                <Button
                  size="lg"
                  className="px-10 py-5 text-xl font-semibold bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white border-0 shadow-2xl transition-all duration-500 hover:scale-105"
                >
                  <Heart className="mr-3 h-6 w-6" />
                  Explorar Aventuras
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-10 py-5 text-xl font-semibold bg-white/5 backdrop-blur-xl border-2 border-emerald-400/50 text-white hover:bg-emerald-400/10 transition-all duration-500 hover:scale-105"
                >
                  <Compass className="mr-3 h-6 w-6" />
                  Descubrir Mundos
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Paradise Cards Section */}
        <section id="paraisos" className="w-full py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/50 to-blue-950/50"></div>

          <div className="container px-6 md:px-8 mx-auto relative">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-emerald-500/10 backdrop-blur-xl border border-emerald-400/30 text-emerald-300 text-sm font-medium mb-8">
                <Camera className="h-5 w-5" />
                Paraísos Inexplorados
              </div>

              <h2 className="text-5xl md:text-6xl font-bold mb-8">
                <span className="bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
                  Descubre Paraísos
                </span>
                <br />
                <span className="bg-gradient-to-r from-emerald-300 to-rose-300 bg-clip-text text-transparent">
                  Que No Existen en Mapas
                </span>
              </h2>

              <p className="mx-auto max-w-4xl text-xl text-white/70 leading-relaxed">
                Cada destino que ofrecemos es una joya oculta, un secreto guardado por la naturaleza durante milenios.
                Lugares donde el tiempo se detiene, donde cada paso es una revelación.
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 z-30">
                <Button
                  onClick={() => scrollToSlide("left")}
                  className="w-16 h-16 rounded-2xl bg-black/60 backdrop-blur-2xl border-2 border-emerald-400/40 hover:bg-emerald-600/30 transition-all duration-500 hover:scale-110"
                >
                  <ChevronLeft className="h-8 w-8 text-white" />
                </Button>
              </div>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 z-30">
                <Button
                  onClick={() => scrollToSlide("right")}
                  className="w-16 h-16 rounded-2xl bg-black/60 backdrop-blur-2xl border-2 border-emerald-400/40 hover:bg-emerald-600/30 transition-all duration-500 hover:scale-110"
                >
                  <ChevronRight className="h-8 w-8 text-white" />
                </Button>
              </div>

              <div
                ref={scrollContainerRef}
                className="flex gap-12 overflow-x-auto scrollbar-hide pb-12 px-20"
                style={{ scrollSnapType: "x mandatory" }}
              >
                {paradiseCards.map((card) => (
                  <div
                    key={card.id}
                    className="flex-shrink-0 w-[420px] h-[680px] relative group cursor-pointer"
                    style={{ scrollSnapAlign: "center" }}
                  >
                    <div className="relative w-full h-full rounded-3xl overflow-hidden bg-black/50 backdrop-blur-2xl border-2 border-white/30 group-hover:border-white/60 transition-all duration-1000 group-hover:scale-105 shadow-2xl">
                      <div className="absolute inset-0">
                        <Image
                          src={card.src || "/placeholder.svg"}
                          alt={`Paraíso ${card.id}`}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/20"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* About Section - Mission */}
        <section id="nosotros" className="w-full py-32 relative">
          <div className="container px-6 md:px-8 mx-auto relative">
            <div className="grid gap-20 lg:grid-cols-2 items-center">
              <div className="space-y-10">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-emerald-500/10 backdrop-blur-xl border border-emerald-400/30 text-emerald-300 text-sm font-medium">
                  <Target className="h-5 w-5" />
                  Nuestra Misión
                </div>

                <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
                    Turismo Rural
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-emerald-300 to-blue-300 bg-clip-text text-transparent">
                    Sostenible
                  </span>
                </h2>

                <div className="space-y-6 text-lg text-white/80 leading-relaxed">
                  <p>
                    Promovemos turismo rural sostenible conectando a visitantes nacionales y extranjeros con la vida
                    local, la naturaleza y la observación responsable de aves, fomentando conservación ambiental y
                    empoderamiento comunitario.
                  </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  {[
                    { icon: Shield, text: "Conservación" },
                    { icon: Heart, text: "Comunidad" },
                    { icon: Users, text: "Autenticidad" },
                    { icon: Mountain, text: "Aviturismo" },
                  ].map((item) => (
                    <div
                      key={item.text}
                      className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-emerald-400/20 hover:bg-white/10 hover:border-emerald-400/40 transition-all duration-500"
                    >
                      <item.icon className="h-7 w-7 text-emerald-400" />
                      <span className="font-semibold text-white text-base">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-8 bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-rose-500/20 rounded-3xl blur-3xl"></div>
                <div className="relative p-2 rounded-3xl bg-gradient-to-r from-emerald-600/30 to-blue-600/30 backdrop-blur-sm border border-emerald-400/30 w-full aspect-square max-w-lg mx-auto lg:mx-0">
                  <Image
                    src="/images/mountain-cow-landscape.png"
                    alt="Kallpana Experience"
                    fill
                    className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-1000 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/50 to-blue-950/50"></div>

          <div className="container px-6 md:px-8 mx-auto relative space-y-32">
            {/* Vision */}
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-emerald-500/10 backdrop-blur-xl border border-emerald-400/30 text-emerald-300 text-sm font-medium mb-6">
                <Eye className="h-5 w-5" />
                Visión
              </div>
              <h2 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
                  Líderes en Turismo Rural Sostenible
                </span>
              </h2>
              <p className="text-lg text-white/70">
                Ser la agencia referente en Ecuador por nuestro compromiso con la sostenibilidad, biodiversidad y
                desarrollo comunitario.
              </p>
            </div>

            {/* Values */}
            <div>
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-emerald-500/10 backdrop-blur-xl border border-emerald-400/30 text-emerald-300 text-sm font-medium">
                  <Star className="h-5 w-5" />
                  Valores
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-3 max-w-5xl mx-auto">
                {[
                  { title: "Respeto", desc: "Naturaleza y culturas locales" },
                  { title: "Excelencia", desc: "Servicio personalizado" },
                  { title: "Sostenibilidad", desc: "Impacto positivo" },
                  { title: "Colaboración", desc: "Trabajo ético" },
                  { title: "Innovación", desc: "Experiencias únicas" },
                ].map((value) => (
                  <div
                    key={value.title}
                    className="p-6 rounded-xl bg-white/5 backdrop-blur-xl border border-emerald-400/20 hover:bg-white/10 transition-all"
                  >
                    <h3 className="font-semibold text-white mb-2">{value.title}</h3>
                    <p className="text-sm text-white/60">{value.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ODS */}
            <div>
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-emerald-500/10 backdrop-blur-xl border border-emerald-400/30 text-emerald-300 text-sm font-medium">
                  <Globe className="h-5 w-5" />
                  Comprometidos con los ODS 2030
                </div>
              </div>
              <div className="max-w-4xl mx-auto grid gap-4 md:grid-cols-2">
                {[
                  {
                    title: "Igualdad de Género",
                    desc: "Empoderamos a mujeres y hombres de nuestras comunidades aliadas.",
                  },
                  {
                    title: "Reducción de Desigualdades",
                    desc: "Desarrollamos estrategias de turismo sostenible regional.",
                  },
                  {
                    title: "Consumo Responsable",
                    desc: "Promovemos prácticas responsables que benefician comunidades y visitantes.",
                  },
                  {
                    title: "Ecosistemas Terrestres",
                    desc: "Somos guardianes de la flora y fauna para futuras generaciones.",
                  },
                ].map((sdg) => (
                  <div
                    key={sdg.title}
                    className="p-6 rounded-xl bg-white/5 backdrop-blur-xl border border-emerald-400/20 hover:bg-white/10 transition-all"
                  >
                    <h3 className="font-semibold text-white mb-2">{sdg.title}</h3>
                    <p className="text-sm text-white/60">{sdg.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contacto" className="w-full py-32 relative">
          <div className="container px-6 md:px-8 mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-emerald-500/10 backdrop-blur-xl border border-emerald-400/30 text-emerald-300 text-sm font-medium mb-8">
                <Zap className="h-5 w-5" />
                Conecta con Nosotros
              </div>

              <h2 className="text-5xl md:text-6xl font-bold mb-8">
                <span className="bg-gradient-to-r from-white to-rose-200 bg-clip-text text-transparent">
                  Tu Aventura
                </span>
                <br />
                <span className="bg-gradient-to-r from-rose-300 to-emerald-300 bg-clip-text text-transparent">
                  Comienza Aquí
                </span>
              </h2>

              <p className="mx-auto max-w-3xl text-xl text-white/70 leading-relaxed">
                Cada gran aventura comienza con una conversación. Cuéntanos tus sueños más audaces.
              </p>
            </div>

            <div className="mt-16">
              <div className="max-w-4xl mx-auto">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-emerald-400/20">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.234567890123!2d-79.0!3d-3.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwMDAnMDAuMCJTIDc5wrAwMCcwMC4wIlc!5e0!3m2!1ses!2sec!4v1234567890123!5m2!1ses!2sec"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full"
                  ></iframe>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <h3 className="text-3xl font-bold text-white mb-8">Síguenos en Nuestras Redes</h3>
              <div className="flex justify-center gap-6">
                <Button
                  onClick={() => window.open("https://www.instagram.com/kallpanatrekkingtours/", "_blank")}
                  className="w-14 h-14 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 p-0 transition-all duration-300 hover:scale-110 shadow-lg flex items-center justify-center"
                >
                  <FaInstagram className="w-7 h-7 text-white" />
                </Button>
                <Button
                  onClick={() => window.open("https://www.facebook.com/kallpanatrekkingtours/", "_blank")}
                  className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 p-0 transition-all duration-300 hover:scale-110 shadow-lg flex items-center justify-center"
                >
                  <FaFacebookF className="w-7 h-7 text-white" />
                </Button>
                <Button
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/company/kallpana-trekking-tours-travel-agency/?trk=public_post_feed-actor-name&originalSubdomain=ec",
                      "_blank",
                    )
                  }
                  className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-800 hover:to-blue-900 p-0 transition-all duration-300 hover:scale-110 shadow-lg flex items-center justify-center"
                >
                  <FaLinkedinIn className="w-7 h-7 text-white" />
                </Button>
                <Button
                  onClick={() => window.open("https://www.tiktok.com/@kallpanatours", "_blank")}
                  className="w-14 h-14 rounded-full bg-gradient-to-r from-gray-800 to-black hover:from-black hover:to-gray-900 p-0 transition-all duration-300 hover:scale-110 shadow-lg flex items-center justify-center"
                >
                  <FaTiktok className="w-7 h-7 text-white" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-16 relative border-t border-emerald-400/20 bg-black/30 backdrop-blur-2xl">
        <div className="container px-6 md:px-8 mx-auto relative">
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-col items-center gap-6 text-center">
              <div className="relative w-16 h-16">
                <Image src="/kallpana-logo-bird.png" alt="Kallpana Logo" fill className="object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-2xl bg-gradient-to-r from-emerald-300 to-blue-300 bg-clip-text text-transparent">
                  KALLPANA
                </span>
                <span className="text-sm text-emerald-400 tracking-widest font-medium">AGENCIA DE VIAJES</span>
                <span className="text-xs text-white/50 mt-1">Turismo Rural Sostenible</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        ::-webkit-scrollbar {
          width: 10px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(15, 23, 42, 0.8);
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #10b981, #3b82f6, #f43f5e);
          border-radius: 5px;
        }
      `}</style>
    </div>
  )
}
