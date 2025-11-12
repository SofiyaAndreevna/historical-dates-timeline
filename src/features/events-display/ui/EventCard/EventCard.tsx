import React from 'react';
import { TimelineEvent } from '@/entities/timeline';
import './EventCard.scss';

export interface EventCardProps {
  event: TimelineEvent;
}

export const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className="event-card">
      <div className="event-card__year">{event.year}</div>
      <div className="event-card__description">{event.description}</div>
    </div>
  );
};

