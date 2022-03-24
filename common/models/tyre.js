'use strict';

module.exports = function(Tyre) {
  // Tyre.afterRemote('find',async(ctx,instance)=>{
  //   try{
  //   if(!instance) ctx.result=[];
  //   const result=ctx.result;
  //   let response=[];
  //   for(let i=0;i<result.length;i++){
  //     let tyre=await result[i].tyre.get();
  //     let newCarResponse={...result[i].__data,tyreSize:tyre?.tyreSize || {}};
  //     response.push(newCarResponse);
  //   }

  //   ctx.result=response;
  // }catch(err){
  //   console.log(err);
  // }
  // })
  Tyre.afterRemoteError('find',(ctx,next)=>{
    if(!ctx.result.length) ctx.res.end('no Tyres Found');
    next('Error');
  });
  Tyre.remoteMethod('create', {
    http: {
      path: '/',
      verb: 'post'
    },
    accepts:{
      arg: 'data',
      type: 'inputTyre',
      description: 'Tyre to add to the store',
      required: true,
      http: { source: 'body' }
    },
    returns: { arg: Tyre.args, type: Tyre, root: true },
  });
  Tyre.remoteMethod('find',{
    http:{
      path:'/',
      verb:'get'
    },
    returns: {arg: 'Tyres', type:[Tyre],root:true},
  });
  Tyre.remoteMethod('upsert',{
    http:{
      path:'/',
      verb:'put'
    },
    accepts:{
      arg: 'data',
      type: 'inputCar',
      description: 'Tyre to update  the store',
      required: true,
      http: { source: 'body' }
    },
    returns: {arg: 'Tyres', type: Tyre, root: true},
  });
  Tyre.remoteMethod('deleteById',{
    http:{
      path:'/:id',
      verb:'delete'
    },
    accepts:{
      arg: 'id',
      type: 'number',
      description: 'tyre id to delete',
      required: true,
      http: { source: 'path' }
    },
    returns: {arg: 'message', type: 'string', root: true},

  });
  Tyre.findCars=async(ctx,next)=>{
    // Tyre.findById(ctx);
    let tyre=await Tyre.findById(ctx);
    const cars=await tyre.cars.find();
    return cars || {message:'no Car Found'};
  }
  Tyre.remoteMethod('findCars',{
    description:'Get Compatitble Cars',
    http:{
      path:'/:id/cars',
      verb:'get'
    },
    accepts:{
      arg: 'id',
      type: 'number',
      description: 'tyre id',
      required: true,
      http: { source: 'path' }
    },
    returns: {arg: 'data', type: ['Car'], root: true},

  });
  Tyre.disableRemoteMethodByName("prototype.__get__brand");
  Tyre.disableRemoteMethodByName("prototype.__get__cars");
  Tyre.disableRemoteMethodByName("prototype.__update__cars");
  Tyre.disableRemoteMethodByName("prototype.__delete__cars");
  Tyre.disableRemoteMethodByName("prototype.__create__cars");
  Tyre.disableRemoteMethodByName("prototype.__findById__cars");
  Tyre.disableRemoteMethodByName("prototype.__updateById__cars");
  Tyre.disableRemoteMethodByName("prototype.__destroyById__cars");
  Tyre.disableRemoteMethodByName("prototype.__count__cars");



};
