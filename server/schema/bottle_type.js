const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, 
        GraphQLID,GraphQLInt,GraphQLFloat } = graphql;


const waterBottleType = new GraphQLObjectType({
  name:  'waterBottleType',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    price:{type:GraphQLFloat},
    quantity:{type:GraphQLInt}    
  })
});

module.exports = waterBottleType;