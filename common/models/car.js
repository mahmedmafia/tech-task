'use strict';
const {genereateRandomNumber} =require('../methods');
module.exports = function(Car) {
  Car.observe('before save',(ctx,next)=>{
    if(ctx.isNewInstance){
      const {model}=ctx.instance.__data;
      ctx.instance.__data.code=genereateRandomNumber(model);
    }

    next();
  });

  Car.afterRemote('find',async(ctx,instance)=>{
    try{
    if(!instance) ctx.result=[];
    const result=ctx.result;
    let response=[];
    for(let i=0;i<result.length;i++){
      let tyre=await result[i].tyre.get();
      let newCarResponse={...result[i].__data,tyreSize:tyre?.tyreSize || {}};
      response.push(newCarResponse);
    }

    ctx.result=response;
  }catch(err){
    console.log(err);
  }
  })
  Car.afterRemoteError('find',(ctx,next)=>{
    if(!ctx.result.length) ctx.res.end('no cars Found');
    next('Error');
  });
  Car.remoteMethod('create', {
    http: {
      path: '/',
      verb: 'post'
    },
    accepts:{
      arg: 'data',
      type: 'inputCar',
      description: 'Car to add to the store',
      required: true,
      http: { source: 'body' }
    },
    returns: { arg: Car.args, type: Car, root: true },
  });
  Car.remoteMethod('find',{
    http:{
      path:'/',
      verb:'get'
    },
    returns: {arg: 'Cars', type:Car,root:true},
  });
  Car.remoteMethod('upsert',{
    http:{
      path:'/',
      verb:'put'
    },
    accepts:{
      arg: 'data',
      type: 'inputCar',
      description: 'Car to update  the store',
      required: true,
      http: { source: 'body' }
    },
    returns: {arg: 'Cars', type: Car, root: true},
  });
  Car.remoteMethod('deleteById',{
    http:{
      path:'/:id',
      verb:'delete'
    },
    accepts:{
      arg: 'id',
      type: 'number',
      description: 'car id to delete',
      required: true,
      http: { source: 'path' }
    },
    returns: {arg: 'message', type: 'string', root: true},

  });
  Car.findTyre=async(ctx,next)=>{
    // Car.findById(ctx);
    let car=await Car.findById(ctx);
    const tyre=await car.tyre.get();
    return tyre || {message:'no Tyre Found'};
  }
  Car.remoteMethod('findTyre',{
    http:{
      path:'/:id/tyre',
      verb:'get'
    },
    accepts:{
      arg: 'id',
      type: 'number',
      description: 'car id',
      required: true,
      http: { source: 'path' }
    },
    returns: {arg: 'data', type: 'Tyre', root: true},

  });
  Car.disableRemoteMethodByName("prototype.__get__brand");
  Car.disableRemoteMethodByName("prototype.__get__tyre");
  Car.disableRemoteMethodByName("prototype.__update__tyre");
  Car.disableRemoteMethodByName("prototype.__destroy__tyre");
  Car.disableRemoteMethodByName("prototype.__create__tyre");


};
