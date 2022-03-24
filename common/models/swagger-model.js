

// module.exports = function(SwaggerModel) {

// /**
//  * Returns all Brands from the system that the user has access to
//  * @param {string[]} tags tags to filter by
//  * @param {number} limit maximum number of results to return
//  * @callback {Function} callback Callback function
//  * @param {Error|string} err Error object
//  * @param {Brand} result Result object
//  */
// SwaggerModel.find = function(tags, limit, callback) {

//   // Replace the code below with your implementation.
//   // Please make sure the callback is invoked.
//   process.nextTick(function() {
//     var err = new Error('Not implemented');
//     callback(err);
//   });

//   /*
//   var err0 = new Error('unexpected error');
//   err0.statusCode = default;
//   return cb(err0);
//   */
// }


// /**
//  * Creates a new Brand in the store.  Duplicates are allowed
//  * @param {NewBrand} name Brand to add to the store
//  * @callback {Function} callback Callback function
//  * @param {Error|string} err Error object
//  * @param {Brand} result Result object
//  */
// SwaggerModel.addBrand = function(name, callback) {

//   // Replace the code below with your implementation.
//   // Please make sure the callback is invoked.
//   process.nextTick(function() {
//     var err = new Error('Not implemented');
//     callback(err);
//   });

//   /*
//   var err0 = new Error('unexpected error');
//   err0.statusCode = default;
//   return cb(err0);
//   */
// }


// /**
//  * Returns a user based on a single ID, if the user does not have access to the Brand
//  * @param {number} id ID of Brand to fetch
//  * @callback {Function} callback Callback function
//  * @param {Error|string} err Error object
//  * @param {Brand} result Result object
//  */
// SwaggerModel.findBrandById = function(id, callback) {

//   // Replace the code below with your implementation.
//   // Please make sure the callback is invoked.
//   process.nextTick(function() {
//     var err = new Error('Not implemented');
//     callback(err);
//   });

//   /*
//   var err0 = new Error('unexpected error');
//   err0.statusCode = default;
//   return cb(err0);
//   */
// }


// /**
//  * deletes a single Brand based on the ID supplied
//  * @param {number} id ID of Brand to delete
//  * @callback {Function} callback Callback function
//  * @param {Error|string} err Error object
//  * @param {any} result Result object
//  */
// SwaggerModel.delete = function(id, callback) {

//   // Replace the code below with your implementation.
//   // Please make sure the callback is invoked.
//   process.nextTick(function() {
//     var err = new Error('Not implemented');
//     callback(err);
//   });

//   /*
//   var err0 = new Error('unexpected error');
//   err0.statusCode = default;
//   return cb(err0);
//   */
// }




// SwaggerModel.remoteMethod('find',
//   {
//   isStatic: true,
//   produces: [ 'application/json', 'application/xml', 'text/xml', 'text/html' ],
//   accepts: [
//     {
//       arg: 'tags',
//       type: [ 'string' ],
//       description: 'tags to filter by',
//       required: false,
//       http: { source: 'query' }
//     },
//     {
//       arg: 'limit',
//       type: 'number',
//       description: 'maximum number of results to return',
//       required: false,
//       http: { source: 'query' }
//     }
//   ],
//   returns: [
//     {
//       description: 'Brand response',
//       type: [ 'Brand' ],
//       arg: 'data',
//       root: true
//     }
//   ],
//   http: { verb: 'get', path: '/Brands' },
//   description: 'Returns all Brands from the system that the user has access to'
// }
// );

// SwaggerModel.remoteMethod('addBrand',
//   {
//   isStatic: true,
//   produces: [ 'application/json' ],
//   accepts: [
//     {
//       arg: 'name',
//       type: 'NewBrand',
//       description: 'Brand to add to the store',
//       required: true,
//       http: { source: 'body' }
//     }
//   ],
//   returns: [
//     {
//       description: 'Brand response',
//       type: 'Brand',
//       arg: 'data',
//       root: true
//     }
//   ],
//   http: { verb: 'post', path: '/Brands' },
//   description: 'Creates a new Brand in the store.  Duplicates are allowed'
// }
// );

// SwaggerModel.remoteMethod('findBrandById',
//   {
//   isStatic: true,
//   produces: [ 'application/json', 'application/xml', 'text/xml', 'text/html' ],
//   accepts: [
//     {
//       arg: 'id',
//       type: 'number',
//       description: 'ID of Brand to fetch',
//       required: true,
//       http: { source: 'path' }
//     }
//   ],
//   returns: [
//     {
//       description: 'Brand response',
//       type: 'Brand',
//       arg: 'data',
//       root: true
//     }
//   ],
//   http: { verb: 'get', path: '/Brand/:id' },
//   description: 'Returns a user based on a single ID, if the user does not have access to the Brand'
// }
// );

// SwaggerModel.remoteMethod('delete',
//   {
//   isStatic: true,
//   accepts: [
//     {
//       arg: 'id',
//       type: 'number',
//       description: 'ID of Brand to delete',
//       required: true,
//       http: { source: 'path' }
//     }
//   ],
//   returns: [],
//   http: { verb: 'delete', path: '/Brand/:id' },
//   description: 'deletes a single Brand based on the ID supplied'
// }
// );

// }
