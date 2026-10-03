import type { Highlight, SelectHighlightsArguments } from './types'

export function selectHighlights({ highlights, variant }: SelectHighlightsArguments): Highlight[] {
  return highlights.filter((highlight) => highlight.variants === undefined || highlight.variants.includes(variant))
}
