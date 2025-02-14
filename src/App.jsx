import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Navbar = lazy(() => import("./components/Navbar"));
const HomePage = lazy(() => import("./pages/HomePage"));
const EventList = lazy(() => import("./pages/EventList"));
const EventDetails = lazy(() => import("./pages/EventDetails"));
const TeamPage = lazy(() => import("./pages/TeamPage"));
const Footer = lazy(() => import("./components/Footer"));
const Loading = lazy(() => import("./components/Loading"));

const App = () => {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/events" element={<EventList />} />
            <Route path="/event/:id" element={<EventDetails />} />
            <Route path="/teams" element={<TeamPage />} />
          </Routes>
          <Footer />
      </Suspense>
    </Router>
  );
};

export default App;