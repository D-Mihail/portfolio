import { expect, test } from 'bun:test'
import { publishedCvVariants } from '@/content/variants'

test('a deployed build publishes only the general CV, so one employer never sees a CV tailored to another', () => {
  expect(publishedCvVariants({ includeTailored: false })).toEqual(['general'])
})

test('the export build renders every variant', () => {
  expect(publishedCvVariants({ includeTailored: true })).toEqual(['general', 'hornetsecurity'])
})
