'use strict';

// load deps
const Joi = require('joi');

const ProductValidator = {
  list,
  read,
  create,
  update,
  destroy
};

module.exports = ProductValidator;

const schema = {
  reference: Joi
    .string()
    .max(8)
    .trim(),
  description: Joi
    .string()
    .default(''),
  unitPrice: Joi
    .number()
    .precision(2)
    .positive(),
  category: Joi
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
      reference: schema
        .reference
        .required(),
      description: schema
        .description
        .required(),
      unitPrice: schema
        .unitPrice
        .required(),
      category: schema
        .category
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
      reference: schema
        .reference
        .optional(),
      description: schema
        .description
        .optional(),
      unitPrice: schema
        .unitPrice
        .optional(),
      category: schema
        .category
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

