import type { TimingSet } from '@/content/types'
import styles from './timing-chart.module.css'

interface TimingChartProperties {
  timingSet: TimingSet
}

interface SecondsArguments {
  seconds: number
}

const SCALE_MINIMUM_SECONDS = 0.05
const SCALE_MAXIMUM_SECONDS = 20

function widthPercent({ seconds }: SecondsArguments): number {
  const span = Math.log10(SCALE_MAXIMUM_SECONDS) - Math.log10(SCALE_MINIMUM_SECONDS)
  return ((Math.log10(seconds) - Math.log10(SCALE_MINIMUM_SECONDS)) / span) * 100
}

export function formatSeconds({ seconds }: SecondsArguments): string {
  return seconds < 1 ? `${Math.round(seconds * 1000)} ms` : `${seconds} s`
}

export function TimingChart({ timingSet }: TimingChartProperties) {
  const summary = timingSet.timings
    .map(
      (timing) =>
        `${timing.action}: ${formatSeconds({ seconds: timing.legacySeconds })} before, ${formatSeconds({ seconds: timing.rebuiltSeconds })} after`,
    )
    .join('; ')

  return (
    <figure className={styles.figure}>
      <figcaption className={styles.caption}>
        <strong>{timingSet.layer}.</strong> {timingSet.description}
      </figcaption>
      <ul className={styles.legend} aria-hidden="true">
        <li className={styles.legacy}>Legacy (WordPress)</li>
        <li className={styles.rebuilt}>Rebuild</li>
      </ul>
      <div role="img" aria-label={`${timingSet.layer}, logarithmic scale. ${summary}.`} className={styles.rows}>
        {timingSet.timings.map((timing) => (
          <div key={timing.action} className={styles.row}>
            <p className={styles.action}>
              {timing.action}
              <span className={styles.factor}>{Math.floor(timing.legacySeconds / timing.rebuiltSeconds)}× faster</span>
            </p>
            <div className={styles.track} title={`Legacy: ${formatSeconds({ seconds: timing.legacySeconds })}`}>
              <span
                className={`${styles.bar} ${styles.legacyBar}`}
                style={{ width: `${widthPercent({ seconds: timing.legacySeconds })}%` }}
              />
              <span className={styles.value}>{formatSeconds({ seconds: timing.legacySeconds })}</span>
            </div>
            <div className={styles.track} title={`Rebuild: ${formatSeconds({ seconds: timing.rebuiltSeconds })}`}>
              <span
                className={`${styles.bar} ${styles.rebuiltBar}`}
                style={{ width: `${widthPercent({ seconds: timing.rebuiltSeconds })}%` }}
              />
              <span className={styles.value}>{formatSeconds({ seconds: timing.rebuiltSeconds })}</span>
            </div>
          </div>
        ))}
      </div>
      <p className={styles.scale}>Logarithmic scale, 50 ms to 20 s.</p>
    </figure>
  )
}
