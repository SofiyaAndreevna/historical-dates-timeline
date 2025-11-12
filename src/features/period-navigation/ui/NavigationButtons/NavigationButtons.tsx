import React from 'react';
import './NavigationButtons.scss';

export interface NavigationButtonsProps {
  onPrevious: () => void;
  onNext: () => void;
  isPreviousDisabled: boolean;
  isNextDisabled: boolean;
  prevButtonRef?: React.RefObject<HTMLButtonElement>;
  nextButtonRef?: React.RefObject<HTMLButtonElement>;
}

export const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  onPrevious,
  onNext,
  isPreviousDisabled,
  isNextDisabled,
  prevButtonRef,
  nextButtonRef,
}) => {
  return (
    <div className="navigation-buttons">
      <button
        ref={prevButtonRef}
        className="navigation-buttons__button"
        onClick={onPrevious}
        disabled={isPreviousDisabled}
        aria-label="Предыдущий период"
      >
        <svg width="10" height="14" viewBox="0 0 10 14" fill="none">
          <path d="M8.49988 0.999999L2.99988 7L8.49988 13" stroke="currentColor" strokeWidth="2"/>
        </svg>
      </button>
      <button
        ref={nextButtonRef}
        className="navigation-buttons__button"
        onClick={onNext}
        disabled={isNextDisabled}
        aria-label="Следующий период"
      >
        <svg width="10" height="14" viewBox="0 0 10 14" fill="none">
          <path d="M1.50012 1L7.00012 7L1.50012 13" stroke="currentColor" strokeWidth="2"/>
        </svg>
      </button>
    </div>
  );
};

