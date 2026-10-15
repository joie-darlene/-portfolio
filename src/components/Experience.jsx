import { experience } from '../data/portfolio.js'
import { Section, Chip } from './ui.jsx'
import { LockIcon, ArrowIcon } from './Icons.jsx'

function Entry({ job, isLast }) {
  return (
    <li className="reveal relative pl-8 sm:pl-10">
      {/* Timeline rail and node — the rail stops at the final entry. */}
      {!isLast && (
        <span
          aria-hidden="true"
          className="absolute left-[7px] top-3 h-full w-px bg-slate-200 dark:bg-slate-800"
        />
      )}
      <span
        aria-hidden="true"
        className={`absolute left-0 top-2 h-[15px] w-[15px] rounded-full border-2 ${
          job.current
            ? 'border-indigo-500 bg-indigo-500 ring-4 ring-indigo-500/15'
            : 'border-slate-300 bg-slate-50 dark:border-slate-700 dark:bg-slate-950'
        }`}
      />

      <div className="pb-12">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            {job.role}
          </h3>
          {job.current && (
            <span className="rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-semibold text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-300">
              Current
            </span>
          )}
        </div>

        <p className="mt-1 text-sm font-medium text-indigo-600 dark:text-indigo-400">
          {job.company}
          {job.period && (
            <span className="font-normal text-slate-500 dark:text-slate-500">
              {' · '}
              {job.period}
            </span>
          )}
          {job.location && (
            <span className="font-normal text-slate-500 dark:text-slate-500">
              {' · '}
              {job.location}
            </span>
          )}
        </p>

        {job.needsDetails ? (
          <p className="mt-3 text-sm italic text-slate-500 dark:text-slate-500">
            Details coming soon.
          </p>
        ) : (
          <>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-600 dark:text-slate-400">
              {job.summary}
            </p>

            {job.bullets?.length > 0 && (
              <ul className="mt-4 space-y-2">
                {job.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex gap-3 text-[15px] leading-relaxed text-slate-600 dark:text-slate-400"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-indigo-500"
                    />
                    {b}
                  </li>
                ))}
              </ul>
            )}

            {job.institutions?.length > 0 && (
              <div className="mt-5 rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900/40">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-500">
                  Institutions served
                </p>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {job.institutions.map((i) => (
                    <Chip key={i}>{i}</Chip>
                  ))}
                </div>
              </div>
            )}

            {job.tech?.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-2">
                {job.tech.map((t) => (
                  <Chip key={t}>{t}</Chip>
                ))}
              </div>
            )}

            {job.links?.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-4">
                {job.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400"
                  >
                    {link.label}
                    <ArrowIcon width={15} height={15} />
                  </a>
                ))}
              </div>
            )}

            {job.confidential && (
              <p className="mt-5 flex gap-2.5 rounded-lg bg-slate-100 p-3.5 text-sm leading-relaxed text-slate-600 dark:bg-slate-900/60 dark:text-slate-400">
                <LockIcon
                  width={16}
                  height={16}
                  className="mt-0.5 shrink-0 text-slate-400 dark:text-slate-500"
                />
                {job.confidentialNote}
              </p>
            )}
          </>
        )}
      </div>
    </li>
  )
}

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I have worked"
      intro="Professional roles and the teams I have built with, most recent first."
      tint
    >
      <ol className="relative">
        {experience.map((job, i) => (
          <Entry
            key={`${job.company}-${i}`}
            job={job}
            isLast={i === experience.length - 1}
          />
        ))}
      </ol>
    </Section>
  )
}
