const { ApolloServer, gql } = require('apollo-server');
const typeDefs = gql `
 
#character general information 
type Character {
id: ID!
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
getCharacters: [Character!]!
}
`;
const mocks = {
    Character: () => ({
        id: () => '583',
        name: () => 'Jon Snow',
        gender: () => 'Male',
        born: () => '283 AD',
        died: () => '',
        culture: () => 'Northmen',
        //  title: () => 
        //    'King of the north'
        //  ,
        //  aliases: () => 
        //     'Lord commander'
        //  ,
    })
};
const server = new ApolloServer({ typeDefs, mocks });
server.listen().then(() => {
    console.log(`
      🚀  Server is running!
      🔉  Listening on port 4000
      📭  Query at http://localhost:4000
    `);
});
