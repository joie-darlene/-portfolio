import { useState } from "react";
import { profile } from "../data/portfolio.js";
import { GitHubIcon, MailIcon, PinIcon, ArrowIcon } from "./Icons.jsx";

// Shows the photo from public/, falling back to initials if it is missing.
function Avatar() {
  const [failed, setFailed] = useState(false);
  const showPhoto = profile.photo && !failed;

  return (
    <div className="relative shrink-0">
      <div
        aria-hidden="true"
        className="absolute -inset-2 rounded-[1.75rem] bg-gradient-to-br from-indigo-500/20 to-cyan-400/20 blur-xl"
      />
      <div className="relative h-32 w-32 overflow-hidden rounded-3xl ring-1 ring-slate-900/10 sm:h-44 sm:w-44 dark:ring-white/10">
        {showPhoto ? (
          <img
            src={profile.photo}
            alt={profile.name}
            onError={() => setFailed(true)}
            // Focal point sits high so a square crop keeps the face centred
            // rather than cutting it off the top of a full-length portrait.
            className="h-full w-full object-cover object-[center_15%]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-indigo-500 to-cyan-500 text-4xl font-bold text-white sm:text-5xl">
            {profile.initials}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Soft gradient wash behind the hero. */}
      <div
        aria-hidden="true"
        className="hero-glow pointer-events-none absolute inset-x-0 -top-40 h-[32rem]"
      />

      <div className="relative mx-auto max-w-5xl px-5 pb-20 pt-20 sm:px-8 sm:pb-28 sm:pt-28">
        <div className="reveal flex flex-col-reverse gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-14">
          <div className="min-w-0">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/70 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Open to opportunities
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-6xl dark:text-white">
              {profile.name}
            </h1>

            <p className="mt-4 text-xl font-semibold text-indigo-600 sm:text-2xl dark:text-indigo-400">
              {profile.title}
            </p>
            <p className="mt-1 text-sm font-medium uppercase tracking-[0.15em] text-slate-500 dark:text-slate-500">
              {profile.subtitle}
            </p>

            <p className="mt-7 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400">
              {profile.summary}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
              >
                View my work
                <ArrowIcon width={16} height={16} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                <MailIcon width={16} height={16} />
                Get in touch
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                <GitHubIcon width={16} height={16} />
                GitHub
              </a>
            </div>

            <p className="mt-6 inline-flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-500">
              <PinIcon width={15} height={15} />
              {profile.location}
            </p>
          </div>

          <div className="lg:pt-2">
            <Avatar />
          </div>
        </div>

        <dl className="reveal mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-slate-200 bg-slate-200 sm:grid-cols-3 dark:border-slate-800 dark:bg-slate-800">
          {profile.highlights.map((h) => (
            <div
              key={h.label}
              className="bg-slate-50 px-6 py-6 dark:bg-slate-950"
            >
              <dt className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                {h.value}
              </dt>
              <dd className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                {h.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
