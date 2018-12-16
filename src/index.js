const { GraphQLServer }  = require('graphql-yoga')
let data = require('./testdata');

let idCount = data.Ads.length;

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
    },

    Mutation: {
      post: (root, args) => {
         const ad = {
          id: `ad-${idCount++}`,
          title: args.description,
          text: args.text,
          category: args.category,
          url: args.url,
        }
        data.Ads.push(ad);
        return ad;
      }
    },
  }


const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
})
server.start(() => console.log(`Server is running on http://localhost:4000`))