const { GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql');

const FeaturesType = new GraphQLObjectType({


    name: "FeatureType",
    fields: {

        length: { type: GraphQLString },
        height: { type: GraphQLString },
        with: { type: GraphQLString },
        weight: { type: GraphQLString },
        colors: { type: new GraphQLList(GraphQLString) },
        model: { type: new GraphQLList(GraphQLString) },
        made_in: { type: GraphQLString }


    }


})

const AuthorType = new GraphQLObjectType({
    name: "AuthorType",
    fields: {
        _id: { type: GraphQLString },
        first_name: { type: GraphQLString },
        last_name: { type: GraphQLString }
    }


})

const UserType = new GraphQLObjectType({
    name: "UserType",
    fields: {
        _id: { type: GraphQLString },
        first_name: { type: GraphQLString },
        last_name: { type: GraphQLString }
    }


})
const CategoryType = new GraphQLObjectType({
    name: "CategoryType",
    fields: {
        _id: { type: GraphQLString },
        title: { type: GraphQLString },

    }


})

module.exports = { AuthorType, CategoryType,FeaturesType,UserType }