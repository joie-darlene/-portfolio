import { about } from '../data/portfolio.js'
import { Section } from './ui.jsx'

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="A little background">
      <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-14">
        <div className="reveal space-y-5">
          {about.paragraphs.map((p) => (
            <p
              key={p.slice(0, 32)}
              className="text-[15px] leading-relaxed text-slate-600 sm:text-base dark:text-slate-400"
            >
              {p}
            </p>
          ))}
        </div>

        <aside className="reveal h-fit rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900/40">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-500">
            Currently
          </h3>
          <ul className="mt-4 space-y-3">
            {about.focus.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400"
              >
                <span
                  aria-hidden="true"
                  className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500"
                />
                {item}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </Section>
  )
}
