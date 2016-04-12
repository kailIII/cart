'use strict';

// load deps
const Joi = require('joi');

const OrderValidator = {
  list,
  read,
  create,
  update,
  destroy
};

module.exports = OrderValidator;

const schema = {
  code: Joi
    .string()
    .max(5),
  emission: Joi
    .date(),
  delivery: Joi
    .date(),
  client: Joi
    .number()
    .integer()
};

function list () {
  return {
    query: {
      page: Joi
        .number()
        .integer()
        .optional(),
      search: Joi
        .string()
        .optional()
    }
  };
}

function read () {
  return {
    params: {
      id: Joi
        .number()
        .integer()
        .positive()
        .required()
    }
  };
}

function create () {
  return {
    payload: {
      code: schema
        .code
        .required(),
      emission: schema
        .emission
        .required(),
      delivery: schema
        .delivery
        .required(),
      client: schema
        .client
        .required()
    }
  };
}

function update () {
  return {
    params: {
      id: Joi
        .number()
        .integer()
        .positive()
        .required()
    },
    payload: {
      code: schema
        .code
        .optional(),
      emission: schema
        .emission
        .optional(),
      delivery: schema
        .delivery
        .optional(),
      client: schema
        .client
        .optional()
    }
  };
}

function destroy () {
  return {
    params: {
      id: Joi
        .number()
        .integer()
        .positive()
        .required()
    }
  };
}

