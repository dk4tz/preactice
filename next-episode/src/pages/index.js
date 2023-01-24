import React from 'react';
import MeetupList from '@/components/meetups/MeetupList';

const DUM_DUM_MEETUP = [
  {
    id: 'm1',
    title: 'one one one',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/9/93/Siege-alesia-vercingetorix-jules-cesar.jpg',
    address: 'eiffel tower',
    description: 'desc',
  },
  {
    id: 'm2',
    title: 'two two',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/9/93/Siege-alesia-vercingetorix-jules-cesar.jpg',
    address: 'eiffel tower',
    description: 'desc',
  },
  {
    id: 'm3',
    title: 'threee',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/9/93/Siege-alesia-vercingetorix-jules-cesar.jpg',
    address: 'eiffel tower',
    description: 'desc',
  },
];

const HomePage = () => {
  return <MeetupList meetups={DUM_DUM_MEETUP} />;
};

export default HomePage;
