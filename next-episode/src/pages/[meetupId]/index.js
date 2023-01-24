// domain.com/[meetupId]

import MeetupDetail from '@/components/meetups/MeetupDetail';

const MeetupDetailsPage = () => {
  return (
    <MeetupDetail
      image='https://upload.wikimedia.org/wikipedia/commons/9/93/Siege-alesia-vercingetorix-jules-cesar.jpg'
      title='dis title'
      address='dis address'
      description='dis desc'
    />
  );
};

export default MeetupDetailsPage;
