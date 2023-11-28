
const { GraphQLObjectType, GraphQLList } = require('graphql');
const { ProductType } = require('../typeDefs/product.Type');
const { ProductModel } = require('../../models/product');

const ProductResolver = {

    type: new GraphQLList(ProductType),

    resolve: async () => {
        return await ProductModel.find({}).populate([{path :"category"},{path : "supplier"}])
    }



}

module.exports = {ProductResolver}