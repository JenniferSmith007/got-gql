const {gql} = require('apollo-server');


const typeDefs = gql`

  "character general information "
Type Character {
id: ID!
name: String!
gender: String 
born: String
died: String
culture: String
titles: [Title]
aliases: [Aliases]
}
"characters title"
Type Title {
titles: String 
}
"different titles Character goes by"
Type Aliases{
aliases: String
}

type Query {
  "Get characters for homepage"
  getCharcters: [Character!]!
}
`;
module.exports = typeDefs;

