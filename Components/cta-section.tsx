"use client"

import { Button } from "@/Components/ui/button"
import { Phone, MessageCircle } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import Link from "next/link"

export function CTASection() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 })

  return (
    <section ref={ref} className="relative py-24 bg-primary overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-background/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center max-w-3xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-primary-foreground text-balance">
            Precisa consertar ou comprar TV ou Micro-ondas?
          </h2>
          <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
            Entre em contato agora e receba um orçamento gratuito para reparo ou confira nossa seleção de aparelhos
            novos e seminovos com os melhores preços!
          </p>

          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Button size="lg" className="bg-background text-foreground hover:bg-background/90 gap-2 w-full sm:w-auto">
              <Phone className="w-5 h-5" />
              (83) 3247-2703
            </Button>
            <Link href="https://wa.me/558388692960">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 gap-2 w-full sm:w-auto bg-transparent"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </Button>
            </Link>
          </div>

          <p
            className={`mt-8 text-sm text-primary-foreground/60 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Atendimento de Segunda a Sábado, das 8h às 18h
          </p>
        </div>
      </div>
    </section>
  )
}
