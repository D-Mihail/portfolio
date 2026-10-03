export const CV_VARIANTS = ['general', 'hornetsecurity'] as const

export function isCvVariant(value: string): value is (typeof CV_VARIANTS)[number] {
  return (CV_VARIANTS as readonly string[]).includes(value)
}
