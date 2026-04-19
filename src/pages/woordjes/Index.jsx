import { useState } from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../../lib/content';

export default function WoordjesIndex() {
  const [search, setSearch] = useState('');

  const filtered = search.trim()
    ? categories.filter(c => {
        const q = search.trim().toLowerCase();
        return c.words.some(w => w.nl.toLowerCase().includes(q) || w.en.toLowerCase().includes(q))
          || c.title.nl.toLowerCase().includes(q)
          || c.title.en.toLowerCase().includes(q);
      })
    : categories;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-1">Woordjes</h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          {categories.length} categories · {categories.reduce((n, c) => n + c.words.length, 0)} words
        </p>
      </div>

      <input
        type="search"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search Dutch or English…"
        className="w-full mb-6 px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 dark:focus:ring-amber-600"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map(cat => (
          <Link
            key={cat.id}
            to={`/woordjes/${cat.id}`}
            className="group rounded-lg border border-gray-200 dark:border-gray-800 p-4 hover:border-amber-400 dark:hover:border-amber-600 transition-colors bg-white dark:bg-gray-900"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">{cat.emoji}</span>
              <div className="min-w-0">
                <div className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors leading-snug">
                  {cat.title.nl}
                </div>
                <div className="text-xs text-gray-400 dark:text-gray-500 leading-snug">{cat.title.en}</div>
              </div>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-500">
              {cat.words.length} words
            </p>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-500 dark:text-gray-400 py-12">No results for "{search}"</p>
      )}
    </div>
  );
}
