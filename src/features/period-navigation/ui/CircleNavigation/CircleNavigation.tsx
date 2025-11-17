import React, { useEffect, useRef, useState } from 'react';
import { TimelinePeriod, calculatePointPosition } from '@/entities/timeline';
import { animateCircleRotation, calculateCompensationAngle } from '@/shared/lib';
import { ANIMATION_CONFIG } from '@/shared/config';
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
  const [visibleLabelPeriod, setVisibleLabelPeriod] = useState<number | null>(0);

  useEffect(() => {
    if (circleRef.current) {
      setVisibleLabelPeriod(null);
      
      animateCircleRotation(circleRef.current, activePeriod, totalPeriods);
      
      const timer = setTimeout(() => {
        setVisibleLabelPeriod(activePeriod);
      }, ANIMATION_CONFIG.circleRotation.duration * 1000);
      
      return () => clearTimeout(timer);
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
                  <span 
                    className={`circle-navigation__point-label ${
                      visibleLabelPeriod === index ? 'circle-navigation__point-label--visible' : ''
                    }`}
                  >
                    {period.category}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

