import { projects } from '../data/portfolio.js'
import { Section, Chip, StatusBadge } from './ui.jsx'
import { GitHubIcon, ArrowIcon } from './Icons.jsx'

function ProjectCard({ project }) {
  return (
    <article className="reveal flex flex-col rounded-xl border border-slate-200 bg-white p-6 transition-shadow hover:shadow-lg hover:shadow-slate-900/5 sm:p-7 dark:border-slate-800 dark:bg-slate-900/40 dark:hover:shadow-black/20">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">
            {project.name}
          </h3>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-500">
            {project.tagline}
          </p>
        </div>
        <StatusBadge status={project.status} label={project.statusLabel} />
      </div>

      <p className="mt-2 text-xs font-medium uppercase tracking-wider text-slate-400 dark:text-slate-600">
        {project.kind}
        {project.period && ` · ${project.period}`}
      </p>

      <p className="mt-4 text-[15px] leading-relaxed text-slate-600 dark:text-slate-400">
        {project.description}
      </p>

      {project.building?.length > 0 && (
        <ul className="mt-5 grid gap-2 sm:grid-cols-2">
          {project.building.map((item) => (
            <li
              key={item}
              className="flex gap-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400"
            >
              <span
                aria-hidden="true"
                className="mt-[0.5rem] h-1 w-1 shrink-0 rounded-full bg-indigo-500"
              />
              {item}
            </li>
          ))}
        </ul>
      )}

      {project.tech?.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <Chip key={t}>{t}</Chip>
          ))}
        </div>
      )}

      {project.note && (
        <p className="mt-5 rounded-lg bg-slate-100 p-3.5 text-sm leading-relaxed text-slate-600 dark:bg-slate-900/70 dark:text-slate-400">
          {project.note}
        </p>
      )}

      {/* Links render only when a genuine URL exists in the data file. */}
      {(project.demo || project.repo || project.links?.length > 0) && (
        <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 border-t border-slate-200 pt-5 dark:border-slate-800">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400"
            >
              Live site
              <ArrowIcon width={15} height={15} />
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
            >
              <GitHubIcon width={15} height={15} />
              {project.repoLabel ?? 'Source code'}
            </a>
          )}
          {project.links?.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
            >
              <GitHubIcon width={15} height={15} />
              {link.label}
            </a>
          ))}
        </div>
      )}
    </article>
  )
}

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Things I have built"
      intro="A mix of client work, professional software and engineering projects. Some of it is proprietary and some is still in development — each card says exactly where it stands."
    >
      <div className="grid gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </div>
    </Section>
  )
}
