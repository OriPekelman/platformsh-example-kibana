'use strict';

var _ = require('lodash');

module.exports = function unzipPairs(timeValObject) {
  var paired = _.chain(timeValObject).pairs().map(function (point) {
    return [parseInt(point[0], 10), point[1]];
  }).sortBy(function (point) {
    return point[0];
  }).value();
  return paired;
};
