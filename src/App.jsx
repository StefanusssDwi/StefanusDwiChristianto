import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [isHeroReady, setIsHeroReady] = useState(false);

  useEffect(() => {
    if (showSplash) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      const timer = setTimeout(() => {
        setIsHeroReady(true);
      }, 1000); 
      
      return () => clearTimeout(timer);
    }
  }, [showSplash]);

  return (
    <>
      <AnimatePresence>
        {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}
      </AnimatePresence>
      <div className="min-h-screen bg-neutral">
        <Navbar />
        <Home isHeroReady={isHeroReady} />
        <Footer />
      </div>
    </>
  );
}

export default App;