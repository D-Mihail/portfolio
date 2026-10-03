import { expect, test } from 'bun:test'
import { isCvVariant } from '@/content/variants'

test('only known variants are accepted, so an unknown URL cannot fall back to a default CV', () => {
  expect(isCvVariant('hornetsecurity')).toBe(true)
  expect(isCvVariant('general')).toBe(true)
  expect(isCvVariant('anything-else')).toBe(false)
})
