import LandingNavbar from '@/modules/landing/components/LandingNavbar'
import HeroSection from '@/modules/landing/components/HeroSection'
import FeaturesSection from '@/modules/landing/components/FeaturesSection'
import HowItWorksSection from '@/modules/landing/components/HowItWorksSection'
import DataInsightsSection from '@/modules/landing/components/DataInsightsSection'
import CTASectionBottom from '@/modules/landing/components/CTASectionBottom'
import LandingFooter from '@/modules/landing/components/LandingFooter'
import SectionDivider from '@/modules/landing/components/SectionDivider'

export default function LandingPage() {
  return (
    <div className="bg-neutral-950">
      <LandingNavbar />
      <main>
        <HeroSection />
        <SectionDivider />
        <FeaturesSection />
        <SectionDivider />
        <HowItWorksSection />
        <SectionDivider />
        <DataInsightsSection />
        <CTASectionBottom />
      </main>
      <LandingFooter />
    </div>
  )
}
