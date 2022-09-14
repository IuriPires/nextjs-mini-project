import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-micro';

import { buildSchema, Resolver, Query, ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
class User {
  @Field(() => ID)
  name: string;

  @Field(() => String)
  email: string;

  @Field(() => Number)
  age: number
}


@Resolver() 
class UserResolver {
  @Query(() => [User])
  users(): User[] {
    // const handler = server.createHandler({ path: 'http://localhost:4000/' });
    // const response = server.executeOperation(handler, queryUser);

    return [
      { name: 'Iuri', email: 'iuripires.work@gmail.com', age: Math.round(Math.random() * 10) }
    ];
  } 
}

const schema = await buildSchema({
  resolvers: [UserResolver]
});


export const server = new ApolloServer({
  schema,
});

export const config = {
  api: {
    bodyParser: false,
  }
}

const startServer = server.start();

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
      "Access-Control-Allow-Origin",
      "https://studio.apollographql.com"
  );
  res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Methods, Access-Control-Allow-Origin, Access-Control-Allow-Credentials, Access-Control-Allow-Headers"
  );
  res.setHeader(
      "Access-Control-Allow-Methods",
      "POST, GET, PUT, PATCH, DELETE, OPTIONS, HEAD"
  );
  if (req.method === "OPTIONS") {
      res.end();
      return false;
  }
  await startServer;
  await server.createHandler({ path: '/api/graphql' })(req, res);
}
