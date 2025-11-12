import { TIMELINE_CONFIG } from '@/shared/config';

export interface CirclePointCoordinates {
  x: number;
  y: number;
}

export const calculatePointPosition = (
  index: number,
  totalPoints: number
): CirclePointCoordinates => {
  const { circleRadius, startAngle } = TIMELINE_CONFIG;
  
  const angleStep = 360 / totalPoints;

  const angle = angleStep * index + startAngle;

  const angleInRadians = (angle * Math.PI) / 180;
  
  const x = circleRadius * Math.cos(angleInRadians);
  const y = circleRadius * Math.sin(angleInRadians);
  
  return { x, y };
};

export const calculateRotationAngle = (
  index: number,
  totalPoints: number
): number => {
  return (360 / totalPoints) * index;
};

export const formatPeriodNumber = (num: number): string => {
  return String(num).padStart(2, '0');
};

