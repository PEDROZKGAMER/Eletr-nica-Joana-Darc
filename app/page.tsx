import { Header } from "../Components/header"
import { HeroSection } from "../Components/hero-section"
import { StatsSection } from "../Components/stats-section"
import { ServicesSection } from "../Components/services-section"
import { ExpertiseSection } from "../Components/expertise-section"
import { TestimonialsSection } from "../Components/testimonials-section"
import { CTASection } from "../Components/cta-section"
import { ContactSection } from "../Components/contact-section"
import { Footer } from "../Components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <ExpertiseSection />
      <TestimonialsSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </main>
  )
}
