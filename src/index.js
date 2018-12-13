const { GraphQLServer }  = require('graphql-yoga')
let data = require('./testdata');

  const resolvers = {
    Query: {
      ad: () => data.Ad,
      ads: () => data.Ads,
    },
 
    AdInfo: {
      id: (root) => root.id,
      title: (root) => root.title,
      text: (root) => root.text,
      category: (root) => root.category,
      url: (root) => root.url,
    }
  }


const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
})
server.start(() => console.log(`Server is running on http://localhost:4000`))