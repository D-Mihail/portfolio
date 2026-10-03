import { chromium } from 'playwright'
import { CV_VARIANTS } from '../src/content/variants'
import { countPdfPages } from './count-pdf-pages'

const baseUrl = process.env.CV_BASE_URL ?? 'http://localhost:3100'

const browser = await chromium.launch()
try {
  const page = await browser.newPage()
  await page.emulateMedia({ media: 'print', colorScheme: 'light' })

  for (const variant of CV_VARIANTS) {
    await page.goto(`${baseUrl}/cv/${variant}`, { waitUntil: 'networkidle' })
    const pdf = await page.pdf({ preferCSSPageSize: true, printBackground: true })
    const pageCount = countPdfPages({ pdf })
    if (pageCount !== 1) throw new Error(`${variant} prints ${pageCount} pages, expected exactly one`)
    await Bun.write(`public/cv/mihail-dimoski-${variant}.pdf`, pdf)
    console.log(`${variant}: 1 page`)
  }
} finally {
  await browser.close()
}
