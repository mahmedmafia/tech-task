module.exports = async function (app) {
  let {Brand,Car,Tyre} = app.models;
  //Un Comment This File To Addd Demo Data
  /*
  app.dataSources.db.automigrate('Brand', function (err) {
    if (err) throw err;

    var brands = [
      { name: 'brand A', type: 'Car', code: '414124124' },
      { name: 'brand B', type: 'Tyre', code: '12312' },
      { name: 'brand C', type: 'Car', code: '1121312212' },
      { name: 'brand D', type: 'Tyre', code: '11232212' },
      { name: 'brand AA', type: 'Car', code: '1121312212' },
      { name: 'brand BB', type: 'Tyre', code: '312121212' },
    ];
    var cars=[
       {model:"Car1"},
       {model:"Car2"},
       {model:"Car3"},
       {model:"Car4"},
       {model:"Car5"},
       {model:"Car6"},
       {model:"Car3"},
       {model:"Car6"},
       {model:"Car32"},
       {model:"Car1",},
       {model:"Car2",},
       {model:"Car7"},
    ]

    var tyres=[
       {model:"Tyre1",size:"xs"},
       {model:"Tyre2",size:"lg"},
       {model:"Tyre3",size:"s"},
       {model:"Tyre4",size:"xlg"},
       {model:"Tyre5",size:"ss"},
       {model:"Tyre6",size:"md"},
    ]
    const brandTypeCars=brands.filter(res=> res.type=='Car');
    const brandTypeTyre=brands.filter(res=> res.type=='Tyre');
    for (let brand of brandTypeTyre) {
       Brand.create(brand,(err,newBrand)=>{
        if(err) return console.log(err);
          for(let i=0;i<3;i++){
            const randomId=Math.floor(Math.random()*tyres.length);
            tyres[randomId].brandId=newBrand.id;
            Tyre.create(tyres[randomId],(err,newTyre)=>{
            if(err) return console.log(err);
              const isCreateCaronRandom=newTyre.id*randomId *(Math.floor(Math.random())+1)
              if(isCreateCaronRandom %3 !=0) return;
              for(let i=0;i<=2;i++){
                const randomCarId=Math.floor(Math.random()*cars.length);
                cars[randomCarId].tyreId=newTyre.id;
                const randomBrandCarTypeId=Math.floor(Math.random()*brandTypeCars.length);
                Brand.create(brandTypeCars[randomBrandCarTypeId],(err,newBrand)=>{
                  if(err) return console.log(err);
                  cars[randomCarId].brandId=newBrand.id;
                  Car.create(cars[randomCarId],(err,newCar)=>{
                    if(err) return console.log(err);
                  })
                })
              }
            });
          }
        });
    };
  });
  */
};
