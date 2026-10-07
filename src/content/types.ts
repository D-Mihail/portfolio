import type { CV_VARIANTS } from './variants'

export type CvVariant = (typeof CV_VARIANTS)[number]

export interface Highlight {
  text: string
  variants?: CvVariant[]
}

export interface SelectHighlightsArguments {
  highlights: Highlight[]
  variant: CvVariant
}

export interface AppearsInArguments {
  variants: CvVariant[] | undefined
  variant: CvVariant
}

export interface ContactLink {
  label: string
  href: string
}

export interface Profile {
  name: string
  location: string
  headline: Record<CvVariant, string>
  summary: Record<CvVariant, string>
  links: ContactLink[]
}

export interface Role {
  organisation: string
  title: string
  period: string
  context?: string
  highlights: Highlight[]
}

export interface Project {
  name: string
  role: string
  period: string
  stack: string
  highlights: Highlight[]
}

export interface SkillGroup {
  label: string
  items: string
}

export interface Education {
  institution: string
  qualification: string
  period: string
}

export interface Practice {
  title: string
  body: string
}

export interface HeadlineFigure {
  value: string
  label: string
}

export interface Timing {
  action: string
  legacySeconds: number
  rebuiltSeconds: number
}

export interface TimingSet {
  layer: string
  description: string
  timings: Timing[]
}

export interface Approach {
  name: string
  verdict: string
  reason: string
}

export interface CodeExcerpt {
  title: string
  file: string
  language: string
  code: string
  note: string
}

export interface Decision {
  question: string
  options: string[]
  chosen: string
  reason: string
}
