import type { AppearsInArguments, Highlight, SelectHighlightsArguments } from './types'

export function appearsIn({ variants, variant }: AppearsInArguments): boolean {
  return variants === undefined || variants.includes(variant)
}

export function selectHighlights({ highlights, variant }: SelectHighlightsArguments): Highlight[] {
  return highlights.filter((highlight) => appearsIn({ variants: highlight.variants, variant }))
}
