import React, { Suspense, lazy, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";

const Navbar = lazy(() => import("./components/Navbar"));
const HomePage = lazy(() => import("./pages/HomePage"));
const EventList = lazy(() => import("./pages/EventList"));
const EventDetails = lazy(() => import("./pages/EventDetails"));
const TeamPage = lazy(() => import("./pages/TeamPage"));
const Footer = lazy(() => import("./components/Footer"));
const Loading = lazy(() => import("./components/Loading"));
const IntroLogo = lazy(() => import("./components/IntroLogo"));

const App = () => {
  const [showIntro, setShowIntro] = useState(true);

  // Hide intro logo after 5.5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 5500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Suspense fallback={<Loading />}>
        {showIntro ? (
          <IntroLogo />
        ) : (
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/events" element={<EventList />} />
              <Route path="/event/:id" element={<EventDetails />} />
              <Route path="/teams" element={<TeamPage />} />
            </Routes>
            <Footer />
          </>
        )}
      </Suspense>
      <ScrollToTop />
    </Router>
  );
};

export default App;
