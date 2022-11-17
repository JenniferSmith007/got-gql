import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { gql } from 'apollo-server';
import { RESTDataSource } from '@apollo/datasource-rest';

const typeDefs = gql`
 
#character general information 
type Character {

name: String!
gender: String 
born: String
died: String
culture: String

}


type Query {
#Get characters for homepage

getCharacter(id: Int): Character!
}
`;






 class GotAPI extends RESTDataSource {
  override baseURL = 'https://anapioficeandfire.com/api/';

  async getCharacter(id): Promise <any> {
    return this.get<any>(`characters/${encodeURIComponent(id)}`);
  
  }
  
 
}
 

const resolvers = {
  Query: {
    getCharacter: async (_, { id }, { dataSources }) => {
      return dataSources.gotAPI.getCharacter(id);
    }
  }
    
}

interface ContextValue {
  dataSources: {
    gotAPI: GotAPI;
    
  };
}
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer<ContextValue>({
  typeDefs,
  resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
  context: async () => {
    const { cache } = server;
  
  return{
dataSources: {
  gotAPI: new GotAPI({cache})
  
}
  }
  }
});

console.log(`🚀  Server ready at: ${url}`);



// server.listen().then(() => {
//     console.log(`
//       🚀  Server is running!
//       🔉  Listening on port 4000
//       📭  Query at http://localhost:4000
//     `);
//   });