import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { HomeHero } from '@/components/home/home-hero'
import { ChooseHelp } from '@/components/home/choose-help'
import { HomeImpact } from '@/components/home/home-impact'

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HomeHero />
        <ChooseHelp />
        <HomeImpact />
      </main>
      <SiteFooter />
    </div>
  )
}
