import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EventList from "./pages/EventList";
import EventDetails from "./pages/EventDetails";
import HomePage from "./pages/HomePage";
import TeamPage from "./pages/TeamPage";

const App = () => {
  useEffect(() => {
    // Force scroll to top on page load/reload
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<HomePage/>} />
        {/* Event List Page */}
        <Route path="/events" element={<EventList />} />
        {/* Event Details Page */}
        <Route path="/event/:id" element={<EventDetails />} />
        {/* Team Page */}
        <Route path="/teams" element={<TeamPage/>} />
      </Routes>
    </Router>
  );
};

export default App;
