import { profile } from '../data/portfolio.js'
import { GitHubIcon, MailIcon, PinIcon, PhoneIcon, ArrowIcon } from './Icons.jsx'

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-slate-200/70 bg-white/60 dark:border-slate-800/70 dark:bg-slate-900/30"
    >
      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Let's build something
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">
            Open to freelance work, full-time roles and interesting problems.
            The fastest way to reach me is email.
          </p>

          <a
            href={`mailto:${profile.email}`}
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
          >
            <MailIcon width={17} height={17} />
            {profile.email}
            <ArrowIcon width={16} height={16} />
          </a>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-slate-600 dark:text-slate-400">
            <a
              href={`tel:${profile.phoneLink}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-slate-900 dark:hover:text-white"
            >
              <PhoneIcon width={16} height={16} />
              {profile.phone}
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 transition-colors hover:text-slate-900 dark:hover:text-white"
            >
              <GitHubIcon width={16} height={16} />
              {profile.githubHandle}
            </a>
            <span className="inline-flex items-center gap-2">
              <PinIcon width={16} height={16} />
              {profile.location}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
