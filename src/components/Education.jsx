import { education, certificates } from '../data/portfolio.js'
import { Section } from './ui.jsx'

export default function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education & Certificates"
      title="How I got here"
    >
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-500">
            Education
          </h3>
          <div className="mt-5 space-y-5">
            {education.map((e) => (
              <div
                key={e.school}
                className="reveal rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/40"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h4 className="font-semibold text-slate-900 dark:text-white">
                    {e.level}
                  </h4>
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-500">
                    {e.period}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-indigo-600 dark:text-indigo-400">
                  {e.school}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-500">
                  {e.location}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {e.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-500">
            Certificates
          </h3>
          <div className="mt-5 space-y-5">
            {certificates.map((c) => (
              <div
                key={c.name}
                className="reveal rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/40"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h4 className="font-semibold text-slate-900 dark:text-white">
                    {c.name}
                  </h4>
                  {c.date && (
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-500">
                      {c.date}
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm font-medium text-indigo-600 dark:text-indigo-400">
                  {c.issuer}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {c.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
