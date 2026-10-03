import { describe, expect, test } from 'bun:test'
import { selectHighlights } from '@/content/select-highlights'
import type { Highlight } from '@/content/types'

describe('selectHighlights', () => {
  const highlights: Highlight[] = [{ text: 'shared' }, { text: 'design system first', variants: ['hornetsecurity'] }]

  test('a highlight without variants appears in every variant', () => {
    expect(selectHighlights({ highlights, variant: 'general' }).map((highlight) => highlight.text)).toEqual(['shared'])
  })

  test('a variant-scoped highlight appears only in its variant', () => {
    expect(selectHighlights({ highlights, variant: 'hornetsecurity' })).toHaveLength(2)
  })
})
