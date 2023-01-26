import React from 'react';
import MeetupList from '@/components/meetups/MeetupList';
import { connectToMongoDb } from '@/utils/database';

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

export default HomePage;

export const getStaticProps = async () => {
  const client = await connectToMongoDb(
    'mongodb+srv://test:test@cluster0.cqgkvcv.mongodb.net/meetups?retryWrites=true&w=majority'
  );

  const db = client.db('next-episode');
  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray();
  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.data.title,
        address: meetup.data.address,
        image: meetup.data.image,
        id: meetup._id.toString(),
      })),
    },
  };
};

// Utils

// export const connectToMongoDb = async (uri) => {
//   let mongoClient;

//   try {
//     mongoClient = new MongoClient(uri);
//     console.log('Connecting to MongoDB Atlas cluster...');
//     await mongoClient.connect();
//     console.log('Successfully connected to MongoDB Atlas!');

//     return mongoClient;
//   } catch (error) {
//     console.error('Connection to MongoDB Atlas failed!', error);
//     process.exit();
//   }
// };

// export const getServerSideProps = async (context) => {
//   const request = context.req;
//   const response = context.res;
//   return {
//     props: {
//       meetups: DUM_DUM_MEETUP,
//     },
//   };
// };
