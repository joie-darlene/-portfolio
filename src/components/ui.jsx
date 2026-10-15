import { LockIcon, ClockIcon, CheckIcon } from './Icons.jsx'

export function Section({ id, eyebrow, title, intro, children, tint = false }) {
  return (
    <section
      id={id}
      className={
        tint
          ? 'border-y border-slate-200/70 bg-white/60 dark:border-slate-800/70 dark:bg-slate-900/30'
          : ''
      }
    >
      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="reveal">
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
              {eyebrow}
            </p>
          )}
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            {title}
          </h2>
          {intro && (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
              {intro}
            </p>
          )}
        </div>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  )
}

export function Chip({ children }) {
  return (
    <span className="inline-flex items-center rounded-md border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-300">
      {children}
    </span>
  )
}

const statusStyles = {
  'in-progress': {
    Icon: ClockIcon,
    className:
      'border-amber-300/70 bg-amber-50 text-amber-800 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-300',
  },
  private: {
    Icon: LockIcon,
    className:
      'border-slate-300 bg-slate-100 text-slate-700 dark:border-slate-600/60 dark:bg-slate-700/30 dark:text-slate-300',
  },
  complete: {
    Icon: CheckIcon,
    className:
      'border-emerald-300/70 bg-emerald-50 text-emerald-800 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300',
  },
}

export function StatusBadge({ status, label }) {
  const { Icon, className } = statusStyles[status] ?? statusStyles.complete
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${className}`}
    >
      <Icon width={13} height={13} />
      {label}
    </span>
  )
}

export function Dots({ level, total = 5 }) {
  return (
    <span className="flex gap-1" aria-hidden="true">
      {Array.from({ length: total }, (_, i) => (
        <span
          key={i}
          className={`h-1.5 w-1.5 rounded-full ${
            i < level
              ? 'bg-indigo-500 dark:bg-indigo-400'
              : 'bg-slate-300 dark:bg-slate-700'
          }`}
        />
      ))}
    </span>
  )
}
