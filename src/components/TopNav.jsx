import { useState, useRef, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useTheme } from '../providers/ThemeProvider';
import { useLanguage } from '../providers/LanguageProvider';
import { leerpadGroups } from '../lib/content';
import MobileDrawer from './MobileDrawer';
import { GithubIcon, KofiIcon } from './icons';

function Dropdown({ open, onClose, items }) {
  const ref = useRef(null);

  useEffect(() => {
    function handler(e) {
      if (ref.current && !ref.current.contains(e.target)) onClose();
    }
    if (open) document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      ref={ref}
      className="absolute top-full left-0 mt-1 w-44 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-lg z-50 py-1"
    >
      {items.map(item => (
        <Link
          key={item.to}
          to={item.to}
          onClick={onClose}
          className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}

const chevron = open => (
  <svg className={`w-3 h-3 transition-transform ${open ? 'rotate-180' : ''}`} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M2 4l4 4 4-4"/>
  </svg>
);

const leerpadeItems = leerpadGroups.map(g => ({ to: `/leerpaden/${g.id}`, label: `Leerpad ${g.id}` }));
const grammarItems = [
  { to: '/grammar/reference', label: 'Grammar' },
  { to: '/grammar/uitspraak', label: 'Uitspraak' },
];

export default function TopNav() {
  const { resolvedTheme, toggle: toggleTheme } = useTheme();
  const { showEnglish, toggle: toggleEnglish } = useLanguage();
  const [leerpadeOpen, setLeerpadeOpen] = useState(false);
  const [grammarOpen, setGrammarOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  const isLeerpadeActive = location.pathname.startsWith('/leerpaden');
  const isGrammarActive = location.pathname.startsWith('/grammar');

  const navBtn = (label, isActive, open, setOpen, items) => (
    <div className="relative">
      <button
        onClick={() => setOpen(o => !o)}
        className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors flex items-center gap-1 ${
          isActive
            ? 'bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-400'
            : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700'
        }`}
      >
        {label}
        {chevron(open)}
      </button>
      <Dropdown open={open} onClose={() => setOpen(false)} items={items} />
    </div>
  );

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 h-14 border-b border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-gray-950/90 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 h-full flex items-center gap-6">
          <Link
            to="/"
            className="font-mono text-sm font-bold text-gray-900 dark:text-gray-100 tracking-wider shrink-0 flex items-center gap-1.5"
          >
            <span className="font-emoji">🇧🇪</span>
            <span>LEER NL</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1 flex-1">
            <NavLink
              to="/woordjes"
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-400'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`
              }
            >
              Woordjes
            </NavLink>

            {navBtn('Leerpaden', isLeerpadeActive, leerpadeOpen, setLeerpadeOpen, leerpadeItems)}
            {navBtn('Grammar', isGrammarActive, grammarOpen, setGrammarOpen, grammarItems)}

            <NavLink
              to="/tests"
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-400'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`
              }
            >
              Tests
            </NavLink>
          </nav>

          <div className="ml-auto flex items-center gap-2">
            <button
              onClick={toggleEnglish}
              title={showEnglish ? 'Hide English' : 'Show English'}
              className={`hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition-colors border ${
                showEnglish
                  ? 'border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-400'
                  : 'border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              EN {showEnglish ? 'on' : 'off'}
            </button>

            <button
              onClick={toggleTheme}
              title={resolvedTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              className="hidden md:flex p-2 rounded-md text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {resolvedTheme === 'dark' ? (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd"/>
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
                </svg>
              )}
            </button>

            <a
              href="https://github.com/tfindley/learn-dutch"
              target="_blank"
              rel="noopener noreferrer"
              title="View source on GitHub"
              className="hidden md:flex p-2 rounded-md text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <GithubIcon />
            </a>

            <a
              href="https://ko-fi.com/tfindley"
              target="_blank"
              rel="noopener noreferrer"
              title="Support on Ko-fi"
              className="hidden md:flex p-2 rounded-md text-gray-500 dark:text-gray-400 hover:text-rose-500 dark:hover:text-rose-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <KofiIcon />
            </a>

            <button
              onClick={() => setDrawerOpen(true)}
              className="md:hidden p-2 rounded-md text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Open menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
        </div>
      </header>

      <MobileDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        showEnglish={showEnglish}
        onToggleEnglish={toggleEnglish}
        resolvedTheme={resolvedTheme}
        onToggleTheme={toggleTheme}
      />
    </>
  );
}
