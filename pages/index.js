import React from 'react';
import { gql } from 'apollo-boost';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import client from '../apollo/client';

function Home() {
  client
    .query({
      query: gql`
      {
        users {
            id
            name
            email
        }
      }
    `,
    })
    .then(result => console.log(result));

  console.log('CLIENT', client, gql);

  return (
    <div>
      <Typography variant="h1">Welcome to Next.js!</Typography>
      <Button variant="contained" color="primary">
        Primary
      </Button>
    </div>
  );
}

export default Home;
