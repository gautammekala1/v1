const graphql = require('graphql');
const waterBottleType = require('./bottle_type');
const Bottle = require('../models/bottles');

const { GraphQLObjectType, 
        GraphQLString,GraphQLInt,GraphQLFloat } = graphql;



const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
      addBottle: {
        type: waterBottleType,
        args: {
          title: { type: GraphQLString },
          price:{type:GraphQLFloat},
          quantity:{type:GraphQLInt} 
        },
        resolve(parentValue, args) {
            let bottle = new Bottle({
                title:args.title,
                price:args.price,
                quantity:args.quantity 
            })
            return bottle.save();

        }
      },
    }
});

/*

resolve(root, params) {
    return UserModel.findByIdAndUpdate(
      params.id,
      { $set: { name: params.name } },
      { new: true }
    )
*/
module.exports = mutation;