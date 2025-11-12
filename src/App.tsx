import React from 'react';
import { timelineData } from './data/timelineData';
import { HistoricalTimeline } from '@/widgets/historical-timeline';

const App: React.FC = () => {
  return (
    <div className="app">
      <HistoricalTimeline data={timelineData} />
    </div>
  );
};

export default App;

