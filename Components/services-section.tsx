"use client"

import { Tv, Microwave, Wrench, ShoppingBag, ArrowRight, CheckCircle } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function ServicesSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal({ threshold: 0.2 })
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollReveal({ threshold: 0.1 })

  const services = [
    {
      icon: Tv,
      title: "Manutenção de TVs",
      description:
        "Reparo completo de TVs de todas as marcas: LED, LCD, OLED, QLED. Consertamos tela, placa, fonte e problemas de software.",
      features: ["Todas as marcas", "Peças originais", "Garantia 90 dias"],
      type: "repair",
    },
    {
      icon: Microwave,
      title: "Manutenção de Micro-ondas",
      description: "Conserto especializado de micro-ondas. Magnetron, transformador, placa, painel e muito mais.",
      features: ["Todas as marcas", "Diagnóstico rápido", "Orçamento grátis"],
      type: "repair",
    },
    {
      icon: ShoppingBag,
      title: "Venda de TVs",
      description: "TVs novas e seminovas com garantia. Smart TVs das melhores marcas com preços competitivos.",
      features: ["Novas e seminovas", "Garantia inclusa", "Melhores preços"],
      type: "sales",
    },
    {
      icon: ShoppingBag,
      title: "Venda de Micro-ondas",
      description:
        "Micro-ondas novos e seminovos revisados. Aparelhos em perfeito estado com garantia de funcionamento.",
      features: ["Novos e seminovos", "Revisados", "Pronta entrega"],
      type: "sales",
    },
  ]

  return (
    <section id="servicos" className="relative py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={headerRef}
          className={`max-w-3xl mb-16 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-primary text-sm tracking-widest uppercase mb-4">Nossos Serviços</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground text-balance">
            Manutenção e venda de TVs e Micro-ondas
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Oferecemos serviços completos: consertamos seu aparelho com qualidade e garantia, ou vendemos um
            novo/seminovo para você.
          </p>
        </div>

        {/* Repair Section */}
        <div className="mb-12">
          <div
            className={`flex items-center gap-3 mb-6 transition-all duration-500 ${
              cardsVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
            }`}
          >
            <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
              <Wrench className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Manutenção</h3>
          </div>

          <div ref={cardsRef} className="grid sm:grid-cols-2 gap-6 mb-12">
            {services
              .filter((s) => s.type === "repair")
              .map((service, index) => (
                <div
                  key={index}
                  className={`group relative bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-500 ${
                    cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Icon */}
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.description}</p>

                  {/* Features */}
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Link */}
                  <a
                    href="#contato"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all"
                  >
                    Solicitar orçamento
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              ))}
          </div>
        </div>

        {/* Sales Section */}
        <div>
          <div
            className={`flex items-center gap-3 mb-6 transition-all duration-500 delay-300 ${
              cardsVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
            }`}
          >
            <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
              <ShoppingBag className="w-5 h-5 text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Vendas</h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {services
              .filter((s) => s.type === "sales")
              .map((service, index) => (
                <div
                  key={index}
                  className={`group relative bg-card border border-accent/30 rounded-2xl p-6 hover:border-accent/50 transition-all duration-500 ${
                    cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${(index + 2) * 150}ms` }}
                >
                  {/* Badge */}
                  <div className="absolute top-4 right-4 bg-accent/20 text-accent text-xs px-3 py-1 rounded-full">
                    Venda
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                    <service.icon className="w-7 h-7 text-accent" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.description}</p>

                  {/* Features */}
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Link */}
                  <a
                    href="#contato"
                    className="inline-flex items-center gap-2 text-sm text-accent hover:gap-3 transition-all"
                  >
                    Ver disponibilidade
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}
