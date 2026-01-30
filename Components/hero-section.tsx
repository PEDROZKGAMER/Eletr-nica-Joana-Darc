"use client"

import { Button } from "@/Components/ui/button"
import { ArrowRight, ChevronDown, Shield, Clock, Award, Tv, Zap } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import Image from "next/image"

export function HeroSection() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 })

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: "1.5s" }}
        />
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">Manutenção e Venda de TVs e Micro-ondas</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-foreground leading-tight text-balance">
              <span className="text-primary">Consertamos</span> e <span className="text-accent">Vendemos</span> TVs e
              Micro-ondas
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Especialistas em manutenção de TVs e micro-ondas, com peças originais e garantia. Também trabalhamos com
              venda de aparelhos novos e seminovos com a melhor qualidade do mercado.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 text-base"
                onClick={() => {
                  const element = document.getElementById('orcamento-form')
                  element?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Solicitar Orçamento
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">Garantia de 90 dias</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">Atendimento Rápido</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">Peças Originais</span>
              </div>
            </div>
          </div>

          {/* Right Content - Visual */}
          <div
            className={`relative flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative">
              {/* Main Visual Element */}
              <div className="relative w-72 h-96 sm:w-80 sm:h-105 lg:w-96 lg:h-125 animate-float">
                <div className="absolute inset-0 bg-card border border-border rounded-3xl overflow-hidden">
                  <Image
                    src="/office_loja.png"
                    alt="Técnico reparando Smart TV"
                    fill
                    className="object-cover opacity-80"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent" />
                </div>

                {/* Floating Cards */}
                <div className="absolute -right-8 top-1/4 bg-card border border-border rounded-xl p-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                      <Tv className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">TVs & Micro-ondas</p>
                      <p className="text-xs text-muted-foreground">Reparo especializado</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -left-8 top4 bottom-1/3 bg-card border border-border rounded-xl p-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                      <Zap className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Venda</p>
                      <p className="text-xs text-muted-foreground">Novos e Seminovos</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-muted-foreground tracking-widest uppercase">Role para descobrir</span>
          <ChevronDown className="w-5 h-5 text-primary" />
        </div>
      </div>
    </section>
  )
}
