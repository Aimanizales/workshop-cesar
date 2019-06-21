const { makeExecutableSchema } = require('graphql-tools');

const schema = makeExecutableSchema({
  typeDefs: `
    type User {
      id: Int
      name: String!
      lastname: String!
      email: String!
    }
    type Post {
      id: Int!
      title: String
    }
    type Query {
      posts: [Post]
      users: [User]!
    }
  `,
  resolvers: {
    Query: {
      posts: () => [{
        id: 1,
        title: 'post title 1',
      }],
      users: () => [{
        id: 1,
        name: 'Mi nombre 1',
        lastname: 'Apellido 1',
        email: 'email1@gmail.com',
      },
      {
        id: 2,
        name: 'Mi nombre 2',
        lastname: '',
        email: 'email2@gmail.com',
      },
      {
        name: 'Mi nombre 3 sin id',
        lastname: 'Apellido 3',
        email: 'email3@gmail.com',
      },
      {
        id: 4,
        name: 'Mi nombre 4',
        lastname: 'Apellido 4',
        email: 'email4@gmail.com',
      }],
    },
  },
});

module.exports = schema;
