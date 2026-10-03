export const CV_VARIANTS = ['general', 'hornetsecurity'] as const

interface PublishedCvVariantsArguments {
  includeTailored: boolean
}

export function isCvVariant(value: string): value is (typeof CV_VARIANTS)[number] {
  return (CV_VARIANTS as readonly string[]).includes(value)
}

export function publishedCvVariants({ includeTailored }: PublishedCvVariantsArguments): (typeof CV_VARIANTS)[number][] {
  return includeTailored ? [...CV_VARIANTS] : ['general']
}
