"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/Components/ui/button"
import { Input } from "@/Components/ui/input"
import { Textarea } from "@/Components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, ChevronDown, MessageCircle } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [selectedValue, setSelectedValue] = useState("")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const serviceOptions = [
    { value: "repair-tv", label: "Manutenção de TV" },
    { value: "repair-microwave", label: "Manutenção de Micro-ondas" },
    { value: "buy-tv", label: "Comprar TV" },
    { value: "buy-microwave", label: "Comprar Micro-ondas" },
  ]

  const { ref: infoRef, isVisible: infoVisible } = useScrollReveal({ threshold: 0.1 })
  const { ref: formRef, isVisible: formVisible } = useScrollReveal({ threshold: 0.1 })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // 1. Captura os dados usando FormData (mais limpo)
    const formData = new FormData(e.currentTarget)
    const name = formData.get("name")
    const phone = formData.get("phone")
    const email = formData.get("email")
    const device = formData.get("device")
    const problem = formData.get("problem")
    const serviceLabel = serviceOptions.find(o => o.value === selectedValue)?.label || "Não informado"

    // 2. Formatação da mensagem para o WhatsApp
    const message = `*Nova Solicitação de Orçamento*%0A` +
      `----------------------------------%0A` +
      `*Nome:* ${name}%0A` +
      `*Telefone:* ${phone}%0A` +
      `*E-mail:* ${email}%0A` +
      `*Serviço:* ${serviceLabel}%0A` +
      `*Aparelho:* ${device}%0A` +
      `*Necessidade:* ${problem}%0A` +
      `----------------------------------`

    const whatsappNumber = "558388692960"
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`

    // 3. Abre o WhatsApp e mostra sucesso no site
    window.open(whatsappUrl, "_blank")
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const isOpen = () => {
    const now = new Date()
    const day = now.getDay()
    const hour = now.getHours()
    const minute = now.getMinutes()
    const currentTime = hour * 60 + minute

    if (day === 0) return false // Domingo fechado
    if (day >= 1 && day <= 5) { // Seg - Sex
      const openTime = 8 * 60 + 30 // 8:30
      const closeTime = 17 * 60 // 17:00
      return currentTime >= openTime && currentTime < closeTime
    }
    if (day === 6) { // Sábado
      const openTime = 8 * 60 // 8:00
      const closeTime = 12 * 60 // 12:00
      return currentTime >= openTime && currentTime < closeTime
    }
    return false
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      content: "Av. Monteiro da Franca, 516 A - Manaíra",
      subcontent: "Joana Pessoa - PB, 58038-151",
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "(83) 98869-2960",
      subcontent: "(83) 3247-2703",
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "darkgaldino2016@gmail.com",
      subcontent: "eletronicajoanaDark@hotmail.com",
    },
    {
      icon: Clock,
      title: "Horário",
      content: "Seg - Sex: 08:30 às 17h",
      subcontent: "Sábado: 9h às 12h",
    },
  ]

  return (
    <section id="contato" className="relative py-24 bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Contact Info */}
          <div
            ref={infoRef}
            className={`space-y-8 transition-all duration-700 ${
              infoVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div>
              <p className="text-primary text-sm tracking-widest uppercase mb-4">Entre em Contato</p>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground text-balance">
                Estamos prontos para ajudar
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Precisa de um orçamento para reparo ou quer saber sobre nossos aparelhos à venda? Preencha o formulário
                ou entre em contato pelos nossos canais.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className={`flex gap-4 transition-all duration-500 ${
                    infoVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${(index + 2) * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.content}</p>
                    <p className="text-sm text-muted-foreground">{item.subcontent}</p>
                    {item.icon === Clock && (
                      <p className={`text-sm font-medium ${isOpen() ? "text-green-600" : "text-red-600"}`}>
                        {isOpen() ? "Aberto agora" : "Fechado agora"}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div
              className={`aspect-video rounded-2xl overflow-hidden border border-border transition-all duration-700 delay-500 ${
                infoVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.1380812991256!2d-34.83331078945882!3d-7.109992292863869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7acdd3d18b2ee67%3A0x1f361a32372fee05!2sEletr%C3%B4nica%20Joana%20Dark!5e0!3m2!1spt-BR!2sbr!4v1768236633051!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{border:0}}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl"
              ></iframe>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div
            id="orcamento-form"
            ref={formRef}
            className={`transition-all duration-700 delay-200 ${
              formVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="bg-background border border-border rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">Solicite seu orçamento</h3>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-accent" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Mensagem enviada!</h4>
                  <p className="text-muted-foreground">Entraremos em contato em breve.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">
                        Nome completo
                      </label>
                      <Input id="name" name="name" placeholder="Seu nome" className="bg-card border-border" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-foreground">
                        Telefone
                      </label>
                      <Input id="phone" name="phone" placeholder="(11) 99999-9999" className="bg-card border-border" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      E-mail
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="seu@email.com"
                      className="bg-card border-border"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium text-foreground">
                      Tipo de Serviço
                    </label>
                    <div className="relative" ref={dropdownRef}>
                      <button
                        type="button"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="w-full h-10 px-3 rounded-md bg-card border border-border text-foreground text-sm flex items-center justify-between"
                      >
                        <span>{serviceOptions.find(o => o.value === selectedValue)?.label || "Selecione..."}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isDropdownOpen && (
                        <div className="absolute top-full left-0 right-0 mt-1 bg-card border border-border rounded-md shadow-lg z-10 max-h-60 overflow-y-auto transition-all duration-200 ease-in-out">
                          {serviceOptions.map((option) => (
                            <button
                              key={option.value}
                              type="button"
                              onClick={() => {
                                setSelectedValue(option.value)
                                setIsDropdownOpen(false)
                              }}
                              className="w-full px-3 py-2 text-left text-sm hover:bg-accent/10 transition-colors"
                            >
                              {option.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                    <input type="hidden" name="service" value={selectedValue} required />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="device" className="text-sm font-medium text-foreground">
                      Equipamento / Modelo desejado
                    </label>
                    <Input
                      id="device"
                      name="device"
                      placeholder="Ex: TV Samsung 55 polegadas ou Micro-ondas 30L"
                      className="bg-card border-border"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="problem" className="text-sm font-medium text-foreground">
                      Descreva sua necessidade
                    </label>
                    <Textarea
                      id="problem"
                      name="problem"
                      placeholder="Conte-nos mais sobre o reparo necessário ou o aparelho que procura..."
                      className="bg-card border-border min-h-30"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#25D366] text-white hover:bg-[#128C7E] gap-2 font-bold py-6 text-lg transition-colors"
                  >
                    <MessageCircle className="w-6 h-6" />
                    Enviar Orçamento via WhatsApp
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    Ao enviar, você concorda com nossa política de privacidade.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
