'use strict';
var Inflector = require('inflected');

module.exports = {
  caserize: function (attribute, opts) {
    if (opts.keyForAttribute) {
      attribute = Inflector.underscore(attribute);

        switch (opts.keyForAttribute) {
          case 'dash-case':
          case 'lisp-case':
          case 'spinal-case':
          case 'kebab-case':
            return Inflector.dasherize(attribute);
          case 'underscore_case':
          case 'snake_case':
            return attribute;
          case 'CamelCase':
            return Inflector.camelize(attribute);
          case 'camelCase':
            return Inflector.camelize(attribute, false);
          default:
            return Inflector.dasherize(attribute);
        }
    } else {
      return(attribute)
    }

  },
  pluralize: function (type) {
    return Inflector.pluralize(type);
  }
};
