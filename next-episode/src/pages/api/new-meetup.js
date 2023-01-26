// domain.com/api/new-meetup
import { MongoClient } from 'mongodb';
import { connectToMongoDb } from '@/utils/database';

const handler = async (req, res) => {
  switch (req.method) {
    case 'POST': {
      const data = req.body;
      console.log(data);

      const client = await connectToMongoDb(
        'mongodb+srv://test:test@cluster0.cqgkvcv.mongodb.net/meetups?retryWrites=true&w=majority'
      );

      const db = client.db('next-episode');
      const meetupsCollection = db.collection('meetups');
      const result = await meetupsCollection.insertOne({ data });
      console.log(result);
      client.close();

      res.status(201).json({ message: 'Meetup inserted! Good job.' });
    }
  }
};

export default handler;
