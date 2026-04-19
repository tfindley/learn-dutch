import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import TopNav from './components/TopNav';
import Landing from './pages/Landing';
import WoordjesIndex from './pages/woordjes/Index';
import WoordjesCategory from './pages/woordjes/Category';
import LeerpadeIndex from './pages/leerpaden/Index';
import LeerpadGroup from './pages/leerpaden/Group';
import LeerpadRule from './pages/leerpaden/Rule';
import GrammarLayout from './pages/grammar/Layout';
import GrammarReference from './pages/grammar/Reference';
import GrammarUitspraak from './pages/grammar/Uitspraak';
import GrammarRule from './pages/grammar/Rule';
import TestsIndex from './pages/tests/Index';
import TestsQuiz from './pages/tests/Quiz';
import TestsResults from './pages/tests/Results';
import Changelog from './pages/Changelog';
import NotFound from './pages/NotFound';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen">
        <TopNav />
        <main className="pt-14">
          <Routes>
            <Route path="/" element={<Landing />} />

            <Route path="/woordjes" element={<WoordjesIndex />} />
            <Route path="/woordjes/:categoryId" element={<WoordjesCategory />} />

            <Route path="/leerpaden" element={<LeerpadeIndex />} />
            <Route path="/leerpaden/:groupId" element={<LeerpadGroup />} />
            <Route path="/leerpaden/:groupId/:ruleId" element={<LeerpadRule />} />

            <Route path="/grammar" element={<GrammarLayout />}>
              <Route index element={<Navigate to="/grammar/reference" replace />} />
              <Route path="reference" element={<GrammarReference />} />
              <Route path="reference/:ruleId" element={<GrammarRule />} />
              <Route path="uitspraak" element={<GrammarUitspraak />} />
              <Route path="uitspraak/:ruleId" element={<GrammarRule />} />
            </Route>

            <Route path="/tests" element={<TestsIndex />} />
            <Route path="/tests/:testId" element={<TestsQuiz />} />
            <Route path="/tests/:testId/results" element={<TestsResults />} />

            <Route path="/changelog" element={<Changelog />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
