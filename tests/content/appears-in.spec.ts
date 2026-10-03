import { expect, test } from 'bun:test'
import { appearsIn } from '@/content/select-highlights'

test('an item scoped to other variants is hidden from this one', () => {
  expect(appearsIn({ variants: ['hornetsecurity'], variant: 'general' })).toBe(false)
  expect(appearsIn({ variants: undefined, variant: 'general' })).toBe(true)
})
