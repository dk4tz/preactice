import React from 'react';
import { json, redirect, useRouteLoaderData } from 'react-router-dom';

import EventItem from '../components/EventItem';

const EventDetailPage = () => {
  const data = useRouteLoaderData('event-detail');
  return (
    <>
      <EventItem event={data.event} />
    </>
  );
};

export default EventDetailPage;

export const eventDetailLoader = async ({ request, params }) => {
  const id = params.eventId;
  const response = await fetch(`http://localhost:8080/events/${id}`);
  if (!response.ok) {
    throw json(
      { message: 'Could not fetch details for selected event...' },
      { status: 500 }
    );
  } else {
    return response;
  }
};

export const deleteEventAction = async ({ request, params }) => {
  const id = params.eventId;
  console.log(request.method);
  const response = await fetch(`http://localhost:8080/events/${id}`, {
    method: request.method,
  });
  console.log(response);
  if (!response.ok) {
    throw json(
      { message: 'Could not delete the selected event...' },
      { status: 500 }
    );
  }
  return redirect('/events');
};
