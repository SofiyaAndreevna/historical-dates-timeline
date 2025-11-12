import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { TimelineEvent } from '@/entities/timeline';
import { TIMELINE_CONFIG } from '@/shared/config';
import { EventCard } from '../EventCard';
import 'swiper/css';
import 'swiper/css/navigation';
import './EventsSlider.scss';

export interface EventsSliderProps {
  events: TimelineEvent[];
  resetKey: number;
  prevButtonRef?: React.RefObject<HTMLButtonElement>;
  nextButtonRef?: React.RefObject<HTMLButtonElement>;
}

export const EventsSlider: React.FC<EventsSliderProps> = ({
  events,
  resetKey,
  prevButtonRef,
  nextButtonRef,
}) => {
  const { swiper } = TIMELINE_CONFIG;

  return (
    <div className="events-slider">
      <Swiper
        modules={[Navigation]}
        spaceBetween={swiper.spaceBetween}
        slidesPerView={swiper.slidesPerView}
        navigation={{
          prevEl: prevButtonRef?.current,
          nextEl: nextButtonRef?.current,
        }}
        breakpoints={{
          [swiper.breakpoints.mobile.width]: {
            slidesPerView: swiper.breakpoints.mobile.slidesPerView,
            spaceBetween: swiper.breakpoints.mobile.spaceBetween,
          },
          [swiper.breakpoints.tablet.width]: {
            slidesPerView: swiper.breakpoints.tablet.slidesPerView,
            spaceBetween: swiper.breakpoints.tablet.spaceBetween,
          },
          [swiper.breakpoints.desktop.width]: {
            slidesPerView: swiper.breakpoints.desktop.slidesPerView,
            spaceBetween: swiper.breakpoints.desktop.spaceBetween,
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
    </div>
  );
};

