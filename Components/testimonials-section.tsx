"use client"

import { useState } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/Components/ui/button"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import Image from "next/image"

export function TestimonialsSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal({ threshold: 0.2 })
  const { ref: cardRef, isVisible: cardVisible } = useScrollReveal({ threshold: 0.1 })

  const testimonials = [
    {
      name: "Alcione",
      role: "Cliente desde 2019",
      image: "/alcione_cliente.png",
      content:
        "Levei minha tv que estava com problema na tela, por sinal é da marca AOC (não comprem!!!) e com pouco mais de um ano de uso, e o pessoal da assistência me informou que se tivesse que trocar a tela seria difícil de encontrar. Infelizmente era esse o problema!!! :( Mas eles foram maravilhosos, conseguiram dar um jeitinho e nem cobraram o serviço. Super honestos e comprometidos!!!",
      rating: 5,
      device: 'TV Smart',
    },
    {
      name: "Eledi",
      role: "Cliente desde 2021",
      image: "/Eledi_cliente.png",
      content:
        "Levei a porta do meu microondas para colocar a mola que quebrou… deu um trabalhão para tirar o encaixe da porta e por a mola. No final não queriam cobrar… meu marido não aceitou, é claro! Parabéns pelo profissionalismo. Deus os abençoe.",
      rating: 5,
      device: "Micro-ondas",
    },
    {
      name: "Júnior",
      role: "Cliente desde 2018",
      image: "/Junior_cliente.png",
      content:
        "Me surpreendeu muito, Levei uma tv, enfim não compensava comparada o preço da tela nova por uma tv nova. Mas a eletrônica Joana Dark foi super atenciosa, nos explicou tudo direitinho, nos mostrou valores de peças, enfim foram super honestos. Não quero que uma nova tv estrague, mas se acontecer eu já sei que é lá que levarei, e indico. Se quer levar a um lugar de confiança: leve neles!. E isso é tão bom quando acontece, a gente encontra tanta gente querendo tirar vantagem, que a gente tem que dar parabéns pra elogiar quando faz um bom trabalho Parabéns !!!",
      rating: 5,
      device: 'TV Smart',
    },
    {
      name: "Maria",
      role: "Cliente desde 2022",
      image: "/Maria_cliente.png",
      content:
        "Levei minha TV LG 47 para conserto. Foram atenciosos e rápidos no diagnostico. Logo providenciaram a peça para substituição. Senti honestidade no atendimento e o preço, acredito que justo haja vista ser um aparelho de boa qualidade e que nunca havia tido problema antes e estar bem conservado e cuidado. Recomendo, sem dúvida.",
      rating: 5,
      device: "Micro-ondas",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="depoimentos" className="relative py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-primary text-sm tracking-widest uppercase mb-4">Depoimentos</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground text-balance">
            O que nossos clientes dizem
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A satisfação dos nossos clientes é nosso maior orgulho. Veja o que eles têm a dizer.
          </p>
        </div>

        {/* Testimonial Card */}
        <div
          ref={cardRef}
          className={`relative max-w-4xl mx-auto transition-all duration-700 delay-200 ${
            cardVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-card border border-border rounded-3xl p-8 sm:p-12 relative overflow-hidden">
            {/* Quote Icon */}
            <Quote className="absolute top-8 right-8 w-16 h-16 text-primary/10" />

            {/* Content */}
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl sm:text-2xl text-foreground leading-relaxed mb-8 font-serif">
                {`"${testimonials[currentIndex].content}"`}
              </blockquote>

              {/* Device Tag */}
              <div className="inline-block bg-secondary px-4 py-2 rounded-full mb-6">
                <span className="text-sm text-secondary-foreground">{testimonials[currentIndex].device}</span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <Image
                  src={testimonials[currentIndex].image || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  width={56}
                  height={56}
                  className="rounded-full object-cover border-2 border-primary/30"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonials[currentIndex].name}</p>
                  <p className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="border-border hover:bg-card bg-transparent"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? "w-8 bg-primary" : "bg-border hover:bg-muted-foreground"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="border-border hover:bg-card bg-transparent"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
