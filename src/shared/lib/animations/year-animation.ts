import gsap from 'gsap';
import { ANIMATION_CONFIG } from '../../config/animation.config';

export const animateYear = (element: HTMLElement, targetYear: number): void => {
  gsap.to(element, {
    innerText: targetYear,
    duration: ANIMATION_CONFIG.yearAnimation.duration,
    snap: { innerText: 1 }, 
    ease: ANIMATION_CONFIG.yearAnimation.ease,
    onUpdate: function() {
      const currentValue = Math.round(Number(this.targets()[0].innerText));
      element.innerText = currentValue.toString();
    },
  });
};

export const animateYearRange = (
  startYearElement: HTMLElement,
  endYearElement: HTMLElement,
  startYear: number,
  endYear: number
): void => {
  animateYear(startYearElement, startYear);
  animateYear(endYearElement, endYear);
};

