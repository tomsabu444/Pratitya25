import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EventList from "./pages/EventList";
import EventDetails from "./pages/EventDetails";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<HomePage/>} />
        {/* Event List Page */}
        <Route path="/events" element={<EventList />} />
        {/* Event Details Page */}
        <Route path="/event/:id" element={<EventDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
