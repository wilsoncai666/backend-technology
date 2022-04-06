'use strict';

/**
 *  restaurant controller
 */

const {
  createCoreController
} = require('@strapi/strapi').factories;

module.exports = createCoreController('api::restaurant.restaurant', ({
  strapi
}) => ({
  async find(ctx) {
    // some logic here
    const {
      data,
      meta
    } = await super.find(ctx);
    // some more logic

    return {
      data,
      meta
    };
  },
  async findOne(ctx) {
    // some logic here
    const response = await super.findOne(ctx);
    // console.log("----",ctx);
    // some more logic

    return response;
  },
  async create(ctx) {
    // some logic here
    const response = await super.create(ctx);
    // some more logic

    return response;
  },
  async update(ctx) {
    // some logic here
    const response = await super.update(ctx);
    // some more logic

    return response;
  },
  async delete(ctx) {
    // some logic here
    const response = await super.delete(ctx);
    // some more logic

    return response;
  }

}));
