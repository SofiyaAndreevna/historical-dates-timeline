import React from 'react';
import './PeriodDots.scss';

export interface PeriodDotsProps {
  totalPeriods: number;
  activePeriod: number;
  onPeriodChange: (period: number) => void;
}

export const PeriodDots: React.FC<PeriodDotsProps> = ({
  totalPeriods,
  activePeriod,
  onPeriodChange,
}) => {
  return (
    <div className="period-dots">
      {Array.from({ length: totalPeriods }).map((_, index) => (
        <button
          key={index}
          className={`period-dots__dot ${
            index === activePeriod ? 'period-dots__dot--active' : ''
          }`}
          onClick={() => onPeriodChange(index)}
          aria-label={`Перейти к периоду ${index + 1}`}
          aria-current={index === activePeriod ? 'true' : 'false'}
        />
      ))}
    </div>
  );
};

