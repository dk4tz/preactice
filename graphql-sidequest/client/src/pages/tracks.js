import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Layout } from '../components';
import { QueryResult } from '../components';

const SPACECATS = gql`
  query GetSpaceCats {
    getSpaceCat {
      id
      name
      age
      equipment {
        id
        size
        photo
      }
      thumbnail
    }
  }
`;

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const { loading, error, data } = useQuery(SPACECATS);

  return (
    <Layout grid>
      <QueryResult error={error} loading={loading} data={data}>
        {data?.getSpaceCat?.map((cat) => (
          <ul key={cat.id}>{JSON.stringify(cat.name)}</ul>
        ))}
      </QueryResult>
    </Layout>
  );
};

export default Tracks;
