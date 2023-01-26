import React from 'react';
import Head from 'next/head';
import MeetupList from '@/components/meetups/MeetupList';
import { connectToMongoDb } from '@/utils/database';

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta
          name='description'
          content='i love meeting up with people who are different'
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
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

// export const getServerSideProps = async (context) => {
//   const request = context.req;
//   const response = context.res;
//   return {
//     props: {
//       meetups: DUM_DUM_MEETUP,
//     },
//   };
// };
