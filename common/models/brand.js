'use strict';
const {genereateRandomNumber} =require('../methods');
module.exports = function (Brand) {
  Brand.beforeRemote('create', (context, unused, next) => {
    const { name } = context.args.data;
    context.args.data.code = genereateRandomNumber(name);
    next();
  })
  Brand.validatesInclusionOf('type', {in: ['Car', 'Tyre'],message:' should be car or tyre'});
  Brand.afterRemoteError('create',(ctx,next)=>{
    delete ctx.error.details;
    delete ctx.error.stack;
    next();
  });
  Brand.remoteMethod('create', {
    http: {
      path: '/',
      verb: 'post'
    },
    accepts:{
      arg: 'data',
      type: 'inputBrand',
      description: 'Brand to add to the store',
      required: true,
      http: { source: 'body' }
    },
    returns: { arg: Brand.args, type: Brand, root: true },
  });
  Brand.remoteMethod('find',{
    http:{
      path:'/',
      verb:'get'
    },
    returns: {arg: 'Brands', type: [Brand], root: true},
  });
  Brand.remoteMethod('upsert',{
    http:{
      path:'/',
      verb:'put'
    },
    accepts:{
      arg: 'data',
      type: 'inputBrand',
      description: 'Brand to update  the store',
      required: true,
      http: { source: 'body' }
    },
    returns: {arg: 'Brands', type: Brand, root: true},
  });
  Brand.remoteMethod('deleteById',{
    http:{
      path:'/:id',
      verb:'delete'
    },
    accepts:{
      arg: 'id',
      type: 'number',
      description: 'brand id to delete',
      required: true,
      http: { source: 'path' }
    },
    returns: {arg: 'message', type: 'string', root: true},

  });

};
