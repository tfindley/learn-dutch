import { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { leerpadGroups } from '../lib/content';
import { GithubIcon } from './icons';

export default function MobileDrawer({ open, onClose, showEnglish, onToggleEnglish, resolvedTheme, onToggleTheme }) {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!open) return null;

  const navLinkClass = ({ isActive }) =>
    `block px-4 py-3 text-base font-medium rounded-md transition-colors ${
      isActive
        ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100'
        : 'text-gray-600 dark:text-gray-400'
    }`;

  return (
    <>
      <div
        className="fixed inset-0 z-50 bg-black/50 md:hidden"
        onClick={onClose}
      />
      <div className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-white dark:bg-gray-900 shadow-xl md:hidden flex flex-col">
        <div className="flex items-center justify-between px-4 h-14 border-b border-gray-200 dark:border-gray-800">
          <span className="font-mono text-sm font-bold tracking-wider">MENU</span>
          <button
            onClick={onClose}
            className="p-2 rounded-md text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto p-4 space-y-1">
          <NavLink to="/" end className={navLinkClass} onClick={onClose}>Home</NavLink>
          <NavLink to="/woordjes" className={navLinkClass} onClick={onClose}>Woordjes</NavLink>

          <div className="pt-2 pb-1 px-4 text-xs font-semibold text-gray-400 dark:text-gray-600 uppercase tracking-wider">
            Leerpaden
          </div>
          {leerpadGroups.map(g => (
            <NavLink key={g.id} to={`/leerpaden/${g.id}`} className={navLinkClass} onClick={onClose}>
              Leerpad {g.id}
            </NavLink>
          ))}

          <div className="pt-2 pb-1 px-4 text-xs font-semibold text-gray-400 dark:text-gray-600 uppercase tracking-wider">
            Grammar
          </div>
          <NavLink to="/grammar/reference" className={navLinkClass} onClick={onClose}>Grammar Reference</NavLink>
          <NavLink to="/grammar/uitspraak" className={navLinkClass} onClick={onClose}>Uitspraak</NavLink>

          <NavLink to="/tests" className={navLinkClass} onClick={onClose}>Tests</NavLink>
          <NavLink to="/changelog" className={navLinkClass} onClick={onClose}>Changelog</NavLink>
        </nav>

        <div className="p-4 border-t border-gray-200 dark:border-gray-800 space-y-3">
          <button
            onClick={onToggleEnglish}
            className={`w-full flex items-center justify-between px-4 py-2.5 rounded-md text-sm font-medium border transition-colors ${
              showEnglish
                ? 'border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-400'
                : 'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400'
            }`}
          >
            <span>English translations</span>
            <span>{showEnglish ? 'ON' : 'OFF'}</span>
          </button>

          <button
            onClick={onToggleTheme}
            className="w-full flex items-center justify-between px-4 py-2.5 rounded-md text-sm font-medium border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 transition-colors hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            <span>Theme</span>
            <span>{resolvedTheme === 'dark' ? '☾ Dark' : '☀ Light'}</span>
          </button>

          <div className="flex gap-3 pt-1">
            <a
              href="https://github.com/tfindley/learn-dutch"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-md text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <GithubIcon />
              GitHub
            </a>
            <a
              href="https://ko-fi.com/tfindley"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-md text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              Ko-fi
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
