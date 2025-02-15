// src/components/FlipCountdown.jsx
import React, { useEffect } from 'react';
import '@pqina/flip/dist/flip.min.css';

const FlipCountdown = () => {
  useEffect(() => {
    const init = async () => {
      // Dynamically import Tick to ensure it loads after DOM is ready
      const { default: Tick } = await import('@pqina/flip');
      
      const targetDate = new Date('2025-02-27T00:00:00');
      
      function handleTickInit(tick) {
        // create counter
        const counter = Tick.count.down(targetDate, {
          format: ['d', 'h', 'm', 's']
        });

        // handle counter updates
        counter.onupdate = function(value) {
          tick.value = value;
        };
      }

      // Initialize all counters
      const elements = document.querySelectorAll('.tick');
      elements.forEach(element => {
        const tickInstance = Tick.DOM.create(element);
        handleTickInit(tickInstance);
      });
    };

    init();
  }, []);

  return (
    <div className="tick">
      <div data-repeat="true" data-layout="horizontal fit" data-transform="preset(d, h, m, s) -> delay">
        <div className="tick-group">
          <div data-key="value" data-repeat="true" data-transform="pad(00) -> split -> delay">
            <span data-view="flip"></span>
          </div>
          <span data-key="label" data-view="text" className="tick-label"></span>
        </div>
      </div>
    </div>
  );
};

export default FlipCountdown;