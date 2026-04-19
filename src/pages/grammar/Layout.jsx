import { NavLink, Outlet } from 'react-router-dom';

const tabs = [
  { to: '/grammar/reference', label: 'Grammar' },
  { to: '/grammar/uitspraak', label: 'Uitspraak' },
];

export default function GrammarLayout() {
  return (
    <div>
      <div className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 sticky top-14 z-30">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex gap-1">
            {tabs.map(tab => (
              <NavLink
                key={tab.to}
                to={tab.to}
                className={({ isActive }) =>
                  `px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                    isActive
                      ? 'border-green-500 text-green-700 dark:text-green-400'
                      : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:border-gray-300 dark:hover:border-gray-600'
                  }`
                }
              >
                {tab.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
