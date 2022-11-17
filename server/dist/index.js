import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import fetch from 'node-fetch';
import { gql } from 'apollo-server';
const typeDefs = gql `
 
#character general information 
type Character {

name: String!
gender: String 
born: String
died: String
culture: String
# titles: Title
# aliases: Aliase
}
#characters title
# type Title {
   
# titles: String 
# }
# #different titles Character goes by
# type Aliase {
# aliases: String
# }

type Query {
#Get characters for homepage
hello(name: String) : String!
getCharacters(id: Int): Character!
}
`;
const resolvers = {
    Query: {
        hello: (_, { name }) => `hello ${name || `world`}`,
        getCharacters: async (_, { id }) => {
            const response = await fetch(`https://anapioficeandfire.com/api/characters/${id}`);
            return response.json();
        }
    }
};
const server = new ApolloServer({ typeDefs, resolvers });
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});
console.log(`🚀  Server ready at: ${url}`);
