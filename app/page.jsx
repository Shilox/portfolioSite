import Image from 'next/image'
import Hero from '@/components/ui/comps/Hero'
import About from '@/components/ui/comps/About'
import Services from '@/components/ui/comps/Services'
import Cta from '@/components/ui/comps/Cta'
import Work from '@/components/ui/comps/Work'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Work />
      <Cta />
    </main>
  )
}
