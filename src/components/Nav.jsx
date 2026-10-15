import { useEffect, useState } from 'react'
import { nav, profile } from '../data/portfolio.js'
import { MenuIcon, CloseIcon, SunIcon, MoonIcon } from './Icons.jsx'

function useTheme() {
  const [dark, setDark] = useState(() =>
    document.documentElement.classList.contains('dark'),
  )

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    try {
      localStorage.setItem('theme', dark ? 'dark' : 'light')
    } catch (e) {
      // Storage can be unavailable (private mode); the toggle still works.
    }
  }, [dark])

  return [dark, () => setDark((d) => !d)]
}

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dark, toggleTheme] = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-colors ${
        scrolled
          ? 'border-b border-slate-200/80 bg-slate-50/85 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-950/85'
          : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="#top"
          className="text-sm font-bold tracking-tight text-slate-900 dark:text-white"
        >
          {profile.shortName}
          <span className="text-indigo-500">.</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-200/60 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/60 dark:hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="rounded-md p-2 text-slate-600 transition-colors hover:bg-slate-200/60 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/60 dark:hover:text-white"
          >
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="rounded-md p-2 text-slate-600 transition-colors hover:bg-slate-200/60 hover:text-slate-900 md:hidden dark:text-slate-400 dark:hover:bg-slate-800/60 dark:hover:text-white"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-slate-200/80 bg-slate-50/95 backdrop-blur-md md:hidden dark:border-slate-800/80 dark:bg-slate-950/95">
          <div className="mx-auto flex max-w-5xl flex-col px-5 py-2 sm:px-8">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-200/60 dark:text-slate-300 dark:hover:bg-slate-800/60"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
