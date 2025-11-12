import { useState, useCallback } from 'react';

export interface UsePeriodNavigationReturn {
  activePeriod: number;
  goToNext: () => void;
  goToPrevious: () => void;
  goToPeriod: (index: number) => void;
  canGoPrevious: boolean;
  canGoNext: boolean;
}

export const usePeriodNavigation = (
  totalPeriods: number,
  initialPeriod: number = 0
): UsePeriodNavigationReturn => {
  const [activePeriod, setActivePeriod] = useState(initialPeriod);

  const goToNext = useCallback(() => {
    setActivePeriod((prev) => (prev < totalPeriods - 1 ? prev + 1 : prev));
  }, [totalPeriods]);

  const goToPrevious = useCallback(() => {
    setActivePeriod((prev) => (prev > 0 ? prev - 1 : prev));
  }, [totalPeriods]);

  const goToPeriod = useCallback((index: number) => {
    if (index >= 0 && index < totalPeriods) {
      setActivePeriod(index);
    }
  }, [totalPeriods]);

  const canGoPrevious = activePeriod > 0;
  const canGoNext = activePeriod < totalPeriods - 1;

  return {
    activePeriod,
    goToNext,
    goToPrevious,
    goToPeriod,
    canGoPrevious,
    canGoNext,
  };
};

