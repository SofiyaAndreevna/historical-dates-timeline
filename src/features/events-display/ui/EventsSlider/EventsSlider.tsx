import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { TimelineEvent } from '@/entities/timeline';
import { TIMELINE_CONFIG } from '@/shared/config';
import { EventCard } from '../EventCard';
import 'swiper/css';
import './EventsSlider.scss';

export interface EventsSliderProps {
  events: TimelineEvent[];
  resetKey: number;
}

export const EventsSlider: React.FC<EventsSliderProps> = ({
  events,
  resetKey,
}) => {
  const { swiper } = TIMELINE_CONFIG;
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <div className="events-slider">
      <button
        className="events-slider__nav events-slider__nav--prev"
        onClick={handlePrev}
        disabled={isBeginning}
        aria-label="Previous slide"
      >
        <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.5 1L2 7L8.5 13" stroke="#42567A" strokeWidth="2"/>
        </svg>
      </button>
      
      <Swiper
        modules={[Navigation]}
        spaceBetween={swiper.spaceBetween}
        slidesPerView={swiper.slidesPerView}
        centeredSlides={false}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        breakpoints={{
          [swiper.breakpoints.mobile.width]: {
            slidesPerView: 1.5,
            spaceBetween: swiper.breakpoints.mobile.spaceBetween,
            centeredSlides: false,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
          },
          [swiper.breakpoints.tablet.width]: {
            slidesPerView: swiper.breakpoints.tablet.slidesPerView,
            spaceBetween: swiper.breakpoints.tablet.spaceBetween,
            centeredSlides: false,
          },
          [swiper.breakpoints.desktop.width]: {
            slidesPerView: swiper.breakpoints.desktop.slidesPerView,
            spaceBetween: swiper.breakpoints.desktop.spaceBetween,
            centeredSlides: false,
          },
        }}
        key={resetKey}
      >
        {events.map((event, index) => (
          <SwiperSlide key={`${event.year}-${index}`}>
            <EventCard event={event} />
          </SwiperSlide>
        ))}
      </Swiper>
      
      <button
        className="events-slider__nav events-slider__nav--next"
        onClick={handleNext}
        disabled={isEnd}
        aria-label="Next slide"
      >
        <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.5 1L8 7L1.5 13" stroke="#42567A" strokeWidth="2"/>
        </svg>
      </button>
    </div>
  );
};

