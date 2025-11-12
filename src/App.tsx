import React from 'react';
import { HistoricalTimeline } from '@/widgets/historical-timeline';
import { timelineData } from '@/entities/timeline';

const App: React.FC = () => {
  return (
    <div className="app">
      <HistoricalTimeline data={timelineData} />
    </div>
  );
};

export default App;

