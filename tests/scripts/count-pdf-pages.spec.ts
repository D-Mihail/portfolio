import { expect, test } from 'bun:test'
import { chromium } from 'playwright'
import { countPdfPages } from '../../scripts/count-pdf-pages'

test('counts every printed page, so an overflowing CV cannot pass as one page', async () => {
  const browser = await chromium.launch()
  try {
    const page = await browser.newPage()
    await page.setContent('<div style="height: 1000mm">tall</div>')
    const pdf = await page.pdf({ format: 'A4' })
    expect(countPdfPages({ pdf })).toBeGreaterThan(1)
    await page.setContent('<p>short</p>')
    expect(countPdfPages({ pdf: await page.pdf({ format: 'A4' }) })).toBe(1)
  } finally {
    await browser.close()
  }
}, 30000)
