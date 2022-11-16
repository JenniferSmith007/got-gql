export const resolvers = {
    Query: {
        movie: async (_, { id }, { dataSources }) => {
            return dataSources.gotAPI.getCharacters(id);
        },
    }
};
