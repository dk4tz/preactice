import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import EditEventPage from './pages/EditEvent';
import ErrorPage from './pages/Error';
import EventDetailPage, { eventDetailLoader } from './pages/EventDetail';
import EventsPage, { eventsLoader } from './pages/Events';
import HomePage from './pages/Home';
import NewEventPage from './pages/NewEvent';
import RootLayout from './pages/Root';
import EventsRootLayout from './pages/EventsRoot';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events',
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ':eventId',
            element: <EventDetailPage />,
            loader: eventDetailLoader,
          },
          { path: 'new', element: <NewEventPage /> },
          { path: ':eventId/edit', element: <EditEventPage /> },
        ],
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
