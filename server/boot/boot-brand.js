module.exports = async function (app) {
  let {Brand,Car,Tyre} = app.models;
  // define a custom scope
  // app.dataSources.db.automigrate('Brand', function (err) {
    // if (err) throw err;

    // var brands = [
    //   { name: 'brand A', type: 'Car', code: '1121212' },
    //   { name: 'brand B', type: 'Tyre', code: '1121212' },
    //   { name: 'brand C', type: 'Car', code: '1121212' },
    //   { name: 'brand D', type: 'Tyre', code: '1121212' },
    //   { name: 'brand AA', type: 'Car', code: '1121212' },
    //   { name: 'brand BB', type: 'Tyre', code: '1121212' },
    //   { name: 'brand CC', type: 'Car', code: '1121212' },
    //   { name: 'brand DD', type: 'Tyre', code: '1121212' },
    //   { name: 'brand AA', type: 'Car', code: '1121212' },
    //   { name: 'brand BB', type: 'Tyre', code: '1121212' },
    //   { name: 'brand CC', type: 'Car', code: '1121212' },
    //   { name: 'brand DD', type: 'Tyre', code: '1121212' },
    // ];
    // var cars=[
    //    {model:"Car1",code:"116116","tyreId":1},
    //    {model:"Car2",code:"116116","tyreId":1},
    //    {model:"Car3",code:"116116","tyreId":1},
    //    {model:"Car4",code:"116116","tyreId":1},
    //    {model:"Car5",code:"116116","tyreId":1},
    //    {model:"Car6",code:"116116","tyreId":1},
    // ]

    // var tyres=[



    // ]

    // for (brand of brands) {
    //    Brand.create(brand,(err)=>{
    //     if(err) return console.log(err);
    //     console.log('Brand Created');
    //    });
    // }
    // Create customers and orders
    // Brand.create(brands[0], function (err, instance) {
    //   if (err) return console.error(err);
    //   console.log('Customer created: ', instance);
    //   orders[0].customerId = instance.id;
    //   orders[1].customerId = instance.id;
    //   Order.create(orders[0], function (err, instance) {
    //     if (err) return console.error(err);
    //     console.log('Order created: ', instance);
    //   });
    //   Order.create(orders[1], function (err, instance) {
    //     if (err) return console.error(err);
    //     console.log('Order created: ', instance);
    //   });
    // });


  // });
};
