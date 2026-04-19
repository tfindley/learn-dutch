const LABELS = {
  easy: 'QUICK WIN',
  medium: 'PRACTICE NEEDED',
  hard: 'TAKES TIME',
};

export default function DifficultyBadge({ difficulty }) {
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-mono font-semibold bg-difficulty-${difficulty}`}>
      {LABELS[difficulty] ?? difficulty}
    </span>
  );
}
