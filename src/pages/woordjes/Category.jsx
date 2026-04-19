import { useState, useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { categories, pronunciationTips } from '../../lib/content';
import { useLanguage } from '../../providers/LanguageProvider';

function FlipCard({ word }) {
  const [flipped, setFlipped] = useState(false);
  const { showEnglish } = useLanguage();

  return (
    <button
      onClick={() => setFlipped(f => !f)}
      className="relative w-full aspect-[3/2] rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 cursor-pointer group transition-shadow hover:shadow-md focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:outline-none overflow-hidden"
      title="Tap to flip"
    >
      {!flipped ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 gap-2">
          <span className="text-xl font-bold font-mono text-gray-900 dark:text-gray-100">{word.nl}</span>
          <span className="text-sm text-gray-500 dark:text-gray-400 font-mono">{word.phonetic}</span>
          {showEnglish && (
            <span className="text-xs text-gray-400 dark:text-gray-500 mt-1">{word.en}</span>
          )}
          <span className="absolute bottom-2 right-3 text-xs text-gray-300 dark:text-gray-600">tap</span>
        </div>
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 gap-2 bg-amber-50 dark:bg-amber-950/30">
          <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 text-center">{word.tip}</span>
          <span className="text-xs text-amber-600 dark:text-amber-400 font-mono mt-1">{word.en}</span>
          <span className="absolute bottom-2 right-3 text-xs text-gray-300 dark:text-gray-600">tap</span>
        </div>
      )}
    </button>
  );
}

export default function WoordjesCategory() {
  const { categoryId } = useParams();
  const [search, setSearch] = useState('');
  const [showTips, setShowTips] = useState(false);
  const { showEnglish } = useLanguage();

  const cat = categories.find(c => c.id === categoryId);
  if (!cat) return <Navigate to="/woordjes" replace />;

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return cat.words;
    return cat.words.filter(w => w.nl.toLowerCase().includes(q) || w.en.toLowerCase().includes(q));
  }, [search, cat.words]);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-6">
        <Link to="/woordjes" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">Woordjes</Link>
        <span>/</span>
        <span className="text-gray-900 dark:text-gray-100">{cat.emoji} {cat.title.nl}</span>
      </div>

      <div className="flex flex-wrap items-center gap-3 mb-6">
        <div className="flex-1">
          <h1 className="text-2xl font-bold">{cat.emoji} {cat.title.nl}</h1>
          <p className="text-sm text-gray-400 dark:text-gray-500">{cat.title.en}</p>
        </div>
        <button
          onClick={() => setShowTips(t => !t)}
          className="text-xs px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-400"
        >
          {showTips ? 'Hide' : 'Show'} pronunciation guide
        </button>
      </div>

      {showTips && (
        <div className="mb-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-4">
          <h2 className="text-sm font-semibold mb-3 text-gray-700 dark:text-gray-300">Pronunciation Guide</h2>
          <div className="grid gap-2 sm:grid-cols-2">
            {pronunciationTips.map((tip, i) => (
              <div key={i} className="flex gap-3 text-sm">
                <span className="font-mono text-amber-600 dark:text-amber-400 shrink-0 w-16">{tip.sound}</span>
                <span className="text-gray-600 dark:text-gray-400">{tip.rule}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <input
        type="search"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search words…"
        className="w-full mb-6 px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 dark:focus:ring-amber-600"
      />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {filtered.map((word, i) => (
          <FlipCard key={i} word={word} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-500 py-12">No results for "{search}"</p>
      )}
    </div>
  );
}
