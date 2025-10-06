import HomeHero from "@/components/home/home-hero"
import HomeFeatures from "@/components/home/home-features"
import HomeHowItWorks from "@/components/home/home-how-it-works"
import HomeTestimonials from "@/components/home/home-testimonials"
import HomeStats from "@/components/home/home-stats"
import HomeFAQ from "@/components/home/home-faq"
import HomeCTA from "@/components/home/home-cta"
import HomeAbout from "@/components/home/home-about"

export default function HomePage() {
  return (
    <main>
      <HomeHero />
      <HomeAbout />
      <HomeFeatures />
      <HomeHowItWorks />
      <HomeStats />
      <HomeTestimonials />
      <HomeFAQ />
      <HomeCTA />
    </main>
  )
}
