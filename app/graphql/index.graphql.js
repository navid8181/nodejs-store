

const { GraphQLObjectType, GraphQLInt, GraphQLSchema, GraphQLString, GraphQLList } = require('graphql');
const { BlogType } = require('./typeDefs/blog.type');
const {BlogResolver} = require('./Query/blog.resolver');
const { ProductResolver } = require('./Query/product.resolver');
const rootQuery = new GraphQLObjectType({

    name: "rootQuery",
    fields: {

        blogs : BlogResolver,
        products : ProductResolver
        
    }

})

const rootMutation = new GraphQLObjectType({


    name: "Mutation",
    fields: {

    }
})

const graphqlSchema = new GraphQLSchema({
    query: rootQuery,
    
    // mutation : rootMutation
})

module.exports = { graphqlSchema }