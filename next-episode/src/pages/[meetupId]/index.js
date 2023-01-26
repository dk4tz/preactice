// domain.com/[meetupId]
import { ObjectId } from 'mongodb';
import MeetupDetail from '@/components/meetups/MeetupDetail';
import { connectToMongoDb } from '@/utils/database';

const MeetupDetailsPage = (props) => {
  return (
    <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
};

export const getStaticPaths = async () => {
  const client = await connectToMongoDb(
    'mongodb+srv://test:test@cluster0.cqgkvcv.mongodb.net/meetups?retryWrites=true&w=majority'
  );

  const db = client.db('next-episode');
  const meetupsCollection = db.collection('meetups');

  const meetupIds = await meetupsCollection
    .find({}, { projection: { _id: 1 } })
    .toArray();

  client.close();

  return {
    paths: meetupIds.map((id) => ({
      params: { meetupId: id._id.toString() },
    })),
    fallback: 'blocking',
  };
};

export const getStaticProps = async (context) => {
  // fetch data for single meetup
  // this code is run on the server!! not exposed

  const meetupId = context.params.meetupId;
  const client = await connectToMongoDb(
    'mongodb+srv://test:test@cluster0.cqgkvcv.mongodb.net/meetups?retryWrites=true&w=majority'
  );

  const db = client.db('next-episode');
  const meetupsCollection = db.collection('meetups');

  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });

  const {
    _id: id,
    data: { title, image, address, description },
  } = selectedMeetup;

  const meetupPayload = {
    id: id.toString(),
    title,
    image,
    address,
    description,
  };

  console.log(meetupPayload);

  return {
    props: {
      meetupData: meetupPayload,
    },
  };
};

export default MeetupDetailsPage;
