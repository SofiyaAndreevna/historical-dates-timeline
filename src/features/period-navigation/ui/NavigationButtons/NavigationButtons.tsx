import React from 'react';
import './NavigationButtons.scss';
import { ArrowLeft, ArrowRight } from '@/shared/ui/icons';

export interface NavigationButtonsProps {
  onPrevious: () => void;
  onNext: () => void;
  isPreviousDisabled: boolean;
  isNextDisabled: boolean;
}

export const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  onPrevious,
  onNext,
  isPreviousDisabled,
  isNextDisabled,
}) => {
  return (
    <div className="navigation-buttons">
      <button
        className="navigation-buttons__button"
        onClick={onPrevious}
        disabled={isPreviousDisabled}
        aria-label="Предыдущий период"
      >
        <ArrowLeft />
      </button>
      <button
        className="navigation-buttons__button"
        onClick={onNext}
        disabled={isNextDisabled}
        aria-label="Следующий период"
      >
        <ArrowRight />
      </button>
    </div>
  );
};

