import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import BrandWorld from "./components/BrandWorld.jsx";
import ProductCollection from "./components/ProductCollection.jsx";
import ColorPalette from "./components/ColorPalette.jsx";
import Rituals from "./components/Rituals.jsx";
import FounderStory from "./components/FounderStory.jsx";
import Waitlist from "./components/Waitlist.jsx";
import Footer from "./components/Footer.jsx";
import { content } from "./data/siteContent.js";

export default function App() {
  const [language, setLanguage] = useState(() => {
    if (typeof window === "undefined") return "en";
    return window.location.hash === "#es" ? "es" : "en";
  });

  const copy = content[language];

  useEffect(() => {
    function syncLanguageFromHash() {
      setLanguage(window.location.hash === "#es" ? "es" : "en");
    }

    syncLanguageFromHash();
    window.addEventListener("hashchange", syncLanguageFromHash);

    return () => window.removeEventListener("hashchange", syncLanguageFromHash);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = copy.metaTitle;
  }, [copy.metaTitle, language]);

  function handleLanguageChange(nextLanguage) {
    setLanguage(nextLanguage);
    window.history.replaceState(null, "", nextLanguage === "es" ? "#es" : "#en");
  }

  return (
    <div className="min-h-screen overflow-hidden bg-ivory text-cacao">
      <Navbar content={copy.nav} language={language} onLanguageChange={handleLanguageChange} />
      <main>
        <Hero content={copy.hero} />
        <BrandWorld content={copy.world} />
        <ProductCollection content={copy.products} />
        <ColorPalette content={copy.palette} />
        <Rituals content={copy.rituals} />
        <FounderStory content={copy.founder} />
        <Waitlist content={copy.waitlist} />
      </main>
      <Footer content={{ ...copy.footer, brand: copy.nav.brand, category: copy.nav.category }} />
    </div>
  );
}
