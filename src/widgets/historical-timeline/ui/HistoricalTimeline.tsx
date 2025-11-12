import React, { useRef } from 'react';
import { TimelineData } from '@/entities/timeline';
import {
  CircleNavigation,
  NavigationButtons,
  PeriodCounter,
  usePeriodNavigation,
} from '@/features/period-navigation';
import { EventsSlider } from '@/features/events-display';
import { YearsDisplay } from './YearsDisplay';
import './HistoricalTimeline.scss';

export interface HistoricalTimelineProps {
  data: TimelineData;
}

export const HistoricalTimeline: React.FC<HistoricalTimelineProps> = ({ data }) => {
  const totalPeriods = data.periods.length;
  
  const {
    activePeriod,
    goToNext,
    goToPrevious,
    goToPeriod,
    canGoPrevious,
    canGoNext,
  } = usePeriodNavigation(totalPeriods);

  const prevButtonRef = useRef<HTMLButtonElement>(null);
  const nextButtonRef = useRef<HTMLButtonElement>(null);

  const currentPeriod = data.periods[activePeriod];

  return (
    <div className="historical-timeline">
      <div className="historical-timeline__container">
        <div className="historical-timeline__header">
          <div className="historical-timeline__border-line"></div>
          <h1 className="historical-timeline__title">
            Исторические
            <br />
            даты
          </h1>
        </div>

        <div className="historical-timeline__main">
          <YearsDisplay
            startYear={currentPeriod.startYear}
            endYear={currentPeriod.endYear}
          />

          <CircleNavigation
            periods={data.periods}
            activePeriod={activePeriod}
            onPeriodChange={goToPeriod}
          />
        </div>

        <div className="historical-timeline__controls">
          <PeriodCounter
            currentPeriod={activePeriod}
            totalPeriods={totalPeriods}
          />
          <NavigationButtons
            onPrevious={goToPrevious}
            onNext={goToNext}
            isPreviousDisabled={!canGoPrevious}
            isNextDisabled={!canGoNext}
            prevButtonRef={prevButtonRef}
            nextButtonRef={nextButtonRef}
          />
        </div>

        <EventsSlider
          events={currentPeriod.events}
          resetKey={activePeriod}
          prevButtonRef={prevButtonRef}
          nextButtonRef={nextButtonRef}
        />
      </div>
    </div>
  );
};

