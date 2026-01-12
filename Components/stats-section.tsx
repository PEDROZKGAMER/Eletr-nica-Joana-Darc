"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function StatsSection() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 })

  const stats = [
    { value: "15+", label: "Anos de experiência", sublabel: "no mercado" },
    { value: "5.000+", label: "Reparos realizados", sublabel: "com sucesso" },
    { value: "98%", label: "Clientes satisfeitos", sublabel: "comprovados" },
    { value: "2 em 1", label: "Manutenção + Venda", sublabel: "tudo em um só lugar" },
  ]

  return (
    <section ref={ref} className="relative py-20 border-y border-border bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`relative text-center lg:text-left group transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Divider for desktop */}
              {index > 0 && (
                <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-16 bg-border" />
              )}
              <div className="lg:pl-8">
                <p className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-primary">{stat.value}</p>
                <p className="mt-2 text-sm sm:text-base text-foreground font-medium">{stat.label}</p>
                <p className="text-xs sm:text-sm text-muted-foreground">{stat.sublabel}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
