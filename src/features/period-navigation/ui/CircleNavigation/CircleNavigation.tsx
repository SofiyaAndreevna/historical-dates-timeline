import React, { useEffect, useRef } from 'react';
import { TimelinePeriod, calculatePointPosition } from '@/entities/timeline';
import { animateCircleRotation, calculateCompensationAngle } from '@/shared/lib';
import './CircleNavigation.scss';

export interface CircleNavigationProps {
  periods: TimelinePeriod[];
  activePeriod: number;
  onPeriodChange: (index: number) => void;
}

export const CircleNavigation: React.FC<CircleNavigationProps> = ({
  periods,
  activePeriod,
  onPeriodChange,
}) => {
  const circleRef = useRef<HTMLDivElement>(null);
  const totalPeriods = periods.length;

  useEffect(() => {
    if (circleRef.current) {
      animateCircleRotation(circleRef.current, activePeriod, totalPeriods);
    }
  }, [activePeriod, totalPeriods]);

  const handlePeriodClick = (index: number) => {
    onPeriodChange(index);
  };

  return (
    <div className="circle-navigation">
      <div className="circle-navigation__border"></div>
      <div className="circle-navigation__circle" ref={circleRef}>
        {periods.map((period, index) => {
          const { x, y } = calculatePointPosition(index, totalPeriods);
          
          const compensationAngle = calculateCompensationAngle(activePeriod, totalPeriods);

          return (
            <div
              key={period.id}
              className={`circle-navigation__point ${
                index === activePeriod ? 'circle-navigation__point--active' : ''
              }`}
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
              onClick={() => handlePeriodClick(index)}
            >
              <div
                className="circle-navigation__point-inner"
                style={{
                  transform: `rotate(${compensationAngle}deg)`,
                }}
              >
                <span className="circle-navigation__point-number">{index + 1}</span>
                {index === activePeriod && (
                  <span className="circle-navigation__point-label">{period.category}</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

