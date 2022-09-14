import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-micro';

import { buildSchema, Resolver, Query, Arg, ObjectType, Field, ID } from 'type-graphql';


const queryUser = `
  query {
      user {
      name
      email
    }
  }
`

@ObjectType()
class User {
  @Field(() => ID)
  name: string;
  email: string;
}


@Resolver() 
class UserResolver {
  @Query(() => [User])
  users(): User[] {
    // const handler = server.createHandler({ path: 'http://localhost:4000/' });
    // const response = server.executeOperation(handler, queryUser);

    return [
      { name: 'Iuri', email: 'iuripires.work@gmail.com' }
    ];
  } 
}

const schema = await buildSchema({
  resolvers: [UserResolver]
});


const server = new ApolloServer({
  schema,
});

export const config = {
  api: {
    bodyParser: false,
  }
}

const startServer = server.start();

export default async function handler(req, res) {
  await startServer;
  await server.createHandler({ path: '/api/graphql' })(req, res);
}
