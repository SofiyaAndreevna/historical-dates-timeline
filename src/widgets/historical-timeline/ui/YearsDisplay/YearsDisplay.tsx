import React, { useEffect, useRef } from 'react';
import { animateYearRange } from '@/shared/lib';
import './YearsDisplay.scss';

export interface YearsDisplayProps {
  startYear: number;
  endYear: number;
}

export const YearsDisplay: React.FC<YearsDisplayProps> = ({
  startYear,
  endYear,
}) => {
  const startYearRef = useRef<HTMLDivElement>(null);
  const endYearRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (startYearRef.current && endYearRef.current) {
      if (isFirstRender.current) {
        startYearRef.current.innerText = startYear.toString();
        endYearRef.current.innerText = endYear.toString();
        isFirstRender.current = false;
      } else {
        animateYearRange(
          startYearRef.current,
          endYearRef.current,
          startYear,
          endYear
        );
      }
    }
  }, [startYear, endYear]);

  return (
    <div className="years-display">
      <div className="years-display__year years-display__year--start" ref={startYearRef} />
      <div className="years-display__year years-display__year--end" ref={endYearRef} />
    </div>
  );
};

