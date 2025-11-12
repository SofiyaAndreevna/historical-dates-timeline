export const TIMELINE_CONFIG = {
  circleRadius: 265,
  startAngle: -60,

  swiper: {
    spaceBetween: 80,
    slidesPerView: 3,
    breakpoints: {
      mobile: {
        width: 320,
        slidesPerView: 1,
        spaceBetween: 20,
      },
      tablet: {
        width: 768,
        slidesPerView: 2,
        spaceBetween: 40,
      },
      desktop: {
        width: 1024,
        slidesPerView: 3,
        spaceBetween: 80,
      },
    },
  },
} as const;

