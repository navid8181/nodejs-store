
const { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLInt } = require('graphql');
const { FeaturesType, CategoryType, UserType } = require('./public.types');


const ProductType = new GraphQLObjectType({

    name: "ProductType",

    fields: {
        title: { type:  GraphQLString },
        short_text: { type:  GraphQLString },
        text: { type:  GraphQLString },
        image: { type:  new GraphQLList(GraphQLString) },
        tags: { type: new GraphQLList(GraphQLString) },
        category: { type: CategoryType },
        price: { type:  GraphQLInt },
        discount: { type:  GraphQLInt },
        count: { type:  GraphQLInt },
        type: { type:  GraphQLString },
        supplier: { type:  UserType },
        features: { type: FeaturesType },
        ImageURL : {type : new GraphQLList(GraphQLString)}
    }


})

module.exports = {ProductType}
