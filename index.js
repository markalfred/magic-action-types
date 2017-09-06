/**
 * Automagically generates strings equivalent to the variables to which
   they'll be assigned, with an optional namespace prepended.

 * @param {String} namespace
 * @return {Object} Object returned has keys equivalent to the variables which
 *   will be receiving the assignments, and values equivalent to those variable
 *   names, prepended with the namespace, if provided, and joined with a slash.

 * @example
 *   const { INCREMENT, DECREMENT } = types('app/counter')
 *   INCREMENT === "app/counter/INCREMENT"
 *   DECREMENT === "app/counter/DECREMENT"

 */

const _ = require('lodash/fp');

function createActionTypes(namespace) {
  return new Proxy(
    {},
    { get: (target, key) => _.pipe(_.compact, _.join('/'))([namespace, key]) }
  );
}

module.exports = createActionTypes;
