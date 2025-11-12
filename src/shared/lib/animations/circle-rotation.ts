import gsap from 'gsap';
import { ANIMATION_CONFIG } from '../../config/animation.config';

export const animateCircleRotation = (
  element: HTMLElement,
  activePeriod: number,
  totalPeriods: number
): void => {
  const angle = (360 / totalPeriods) * activePeriod;
  
  gsap.to(element, {
    rotation: -angle,
    duration: ANIMATION_CONFIG.circleRotation.duration,
    ease: ANIMATION_CONFIG.circleRotation.ease,
  });
};

export const calculateCompensationAngle = (
  activePeriod: number,
  totalPeriods: number
): number => {
  return (360 / totalPeriods) * activePeriod;
};

