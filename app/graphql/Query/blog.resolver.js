const { BlogModel } = require("../../models/blogs");
const { BlogType } = require("../typeDefs/blog.type")
const {GraphQLObjectType, GraphQLString, GraphQLList} = require('graphql');
const BlogResolver = {

    type: new GraphQLList(BlogType),
    resolve: async () => {
        return await BlogModel.find({}).populate([{path : "author"},{path :"category"}])
    }

}

module.exports =  {BlogResolver}