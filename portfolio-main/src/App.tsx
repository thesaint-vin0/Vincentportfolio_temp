import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import { AudioProvider } from './context/AudioContext';
import { CustomCursor } from './components/ui/CustomCursor';
import { ScrollProgress } from './components/ui/ScrollProgress';
import { Loader } from './components/ui/Loader';
import { Navbar } from './components/Navbar';
import { Footer, BackToTop } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { useLenis } from './hooks/useLenis';
import { AnimatedBlobs } from './components/ui/AnimatedBlobs';

function AppContent() {
  useLenis();
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <ScrollProgress />
          <CustomCursor />
          <Navbar />

          {/* Global ambient background */}
          <div className="pointer-events-none fixed inset-0 -z-50">
            <div className="absolute inset-0 bg-bg" />
            <div className="absolute inset-0 bg-grid opacity-[0.04]" />
            <AnimatedBlobs />
          </div>

          <main className="relative">
            <HomePage />
          </main>

          <Footer />
          <BackToTop />
        </>
      )}
    </>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <AudioProvider>
          <AppContent />
        </AudioProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}
