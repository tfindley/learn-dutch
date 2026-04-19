import { useLanguage } from '../providers/LanguageProvider';

export default function EnglishText({ children, className = '' }) {
  const { showEnglish } = useLanguage();
  if (!showEnglish) return null;
  return <span className={className}>{children}</span>;
}
