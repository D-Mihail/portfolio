import { ContactBlock } from '@/components/contact-block'
import { ExperienceList } from '@/components/experience-list'
import { FlagshipCard } from '@/components/flagship-card'
import { Hero } from '@/components/hero'
import { PracticeList } from '@/components/practice-list'
import { Section } from '@/components/section'
import { StackList } from '@/components/stack-list'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Section id="work" eyebrow="Selected work" title="A rebuild I designed, shipped and run">
        <FlagshipCard />
      </Section>
      <Section id="experience" eyebrow="Experience" title="Where I’ve been building">
        <ExperienceList />
      </Section>
      <Section id="practice" eyebrow="How I work" title="Habits that keep things correct">
        <PracticeList />
      </Section>
      <Section id="stack" eyebrow="Stack" title="What I work with">
        <StackList />
      </Section>
      <Section id="contact" eyebrow="Contact" title="Let’s talk">
        <ContactBlock />
      </Section>
    </>
  )
}
