import { skills, softSkills, languages } from '../data/portfolio.js'
import { Section, Chip, Dots } from './ui.jsx'

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="What I work with"
      intro="Tools and technologies I use regularly, grouped by area."
      tint
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {skills.map((group) => (
          <div
            key={group.group}
            className="reveal rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/40"
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                {group.group}
              </h3>
              <Dots level={group.level} />
            </div>
            <div className="mt-3.5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Chip key={item}>{item}</Chip>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="reveal mt-5 grid gap-5 sm:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/40">
          <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
            Soft skills
          </h3>
          <div className="mt-3.5 flex flex-wrap gap-2">
            {softSkills.map((s) => (
              <Chip key={s}>{s}</Chip>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/40">
          <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
            Languages
          </h3>
          <ul className="mt-3.5 space-y-2.5">
            {languages.map((l) => (
              <li key={l.name} className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">
                  {l.name}
                </span>
                <Dots level={l.level} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
