import express from "express";
import compression from "compression";
import cors from "cors";
import { createServer} from 'http';
import schema from './schema';
import {ApolloServer} from 'apollo-server-express';

const app = express();

app.use(cors());

app.use(compression());



/* app.use('/', graphqlHTTP({
    schema,
    graphiql: true
})); */

const server = new ApolloServer({
    schema,
    introspection: true
});

server.applyMiddleware({ app });

const PORT = 5400;
const httpServer = createServer(app);


httpServer.listen(
    { port : PORT},
    () => console.log(`hola mundo api graphql http://localhost:${PORT}/graphql`)
);