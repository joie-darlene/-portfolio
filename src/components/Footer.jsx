import { profile } from '../data/portfolio.js'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-5 py-8 text-sm text-slate-500 sm:flex-row sm:px-8 dark:text-slate-500">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>Built with React and Tailwind CSS.</p>
      </div>
    </footer>
  )
}
