import { ImageResponse } from 'next/og'

export const alt = 'Mihail Dimoski — full-stack engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 72,
        background: '#fbfaf7',
        color: '#16191d',
        fontFamily: 'sans-serif',
      }}
    >
      <div style={{ display: 'flex', fontSize: 28, color: '#0b6f81', letterSpacing: 2 }}>MIHAILDIMOSKI.DEV</div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05 }}>Mihail Dimoski</div>
        <div style={{ fontSize: 36, marginTop: 18, color: '#5b6168' }}>
          Full-stack engineer · backend reliability, security, AI-assisted engineering
        </div>
      </div>
      <div style={{ display: 'flex', fontSize: 34, color: '#b4552f' }}>
        Rebuilt a recruiting platform: 15.2 s → 0.63 s, measured in production
      </div>
    </div>,
    size,
  )
}
