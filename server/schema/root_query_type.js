const mongoose = require('mongoose');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLList, GraphQLID, 
    GraphQLNonNull } = graphql;
const waterBottleType = require('./bottle_type');
const Bottle = require('../models/bottles');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    bottles: {
      type: new GraphQLList(waterBottleType),
      args:{id:{type:GraphQLID}},
      resolve(parent, args) {
        return Bottle.find({});
      }
    },
    bottle: {
      type: waterBottleType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parent, args) {
        return Bottle.findById(args.id);
      }
    },
  })
});

module.exports = RootQuery;
