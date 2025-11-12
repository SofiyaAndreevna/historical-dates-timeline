import React from 'react';
import { formatPeriodNumber } from '@/entities/timeline';
import './PeriodCounter.scss';

export interface PeriodCounterProps {
  currentPeriod: number;
  totalPeriods: number;
}

export const PeriodCounter: React.FC<PeriodCounterProps> = ({
  currentPeriod,
  totalPeriods,
}) => {
  const currentNumber = formatPeriodNumber(currentPeriod + 1);
  const totalNumber = formatPeriodNumber(totalPeriods);

  return (
    <div className="period-counter">
      <span className="period-counter__current">{currentNumber}</span>
      <span className="period-counter__separator">/</span>
      <span className="period-counter__total">{totalNumber}</span>
    </div>
  );
};

