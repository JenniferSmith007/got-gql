import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import fetch from 'node-fetch'
import { gql } from 'apollo-server';


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

getCharacters: [Character!]!
getCharacter(id: Int): Character!
}
`;


const resolvers = {
  Query: {
     
   
    getCharacters:async () => {
      const charactersResponse = await fetch(`https://anapioficeandfire.com/api/characters`)
      return charactersResponse.json()
    },
    getCharacter: async (_,{id},) => {
const characterResponse = await fetch(`https://anapioficeandfire.com/api/characters/${id}`) 
return characterResponse.json()
    }
  }
}


 
const server = new ApolloServer({typeDefs, resolvers})





const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);