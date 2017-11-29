'use strict';

const fp = module.exports = {};

fp.map = (callback, collection) => {

  if (!Array.isArray(collection))
    throw new TypeError('<collection> should be an array');

  return Array.prototype.map.call(collection, callback);
};

fp.reduce = (callback, collection, initialValue) => {

  if (typeof callback !== 'function')
    throw new TypeError('<callback> should be a function');

  if (!Array.isArray(collection))
    throw new TypeError('<collection> should be an array');

  return Array.prototype.reduce.call(collection, callback, initialValue);
};
