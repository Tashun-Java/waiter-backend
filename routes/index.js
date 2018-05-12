var express = require('express');
var FoodItem = require('../models/foodItem');
var BeverageItem =require('../models/beverageItem');
var DessertItem=require('../models/dessertItem');
var JuiceItem=require('../models/juiceItem');
var KottuItem=require('../models/kottuItem');
var NoodlesItem=require('../models/noodleItem');
var RiceAndCurryItem=require('../models/riceAndCurryItem');
var ShortEatItem=require('../models/shortEatItem');
var SpecialItem=require('../models/specialItem');

var InventoryItem = require('../models/inventoryItem');
var router = express.Router();
var mongoose = require("mongoose");


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

//get all data from database
router.get('/FoodItems', function (req, res, next) {
    FoodItem.find(function (err, FoodItems) {
        res.send(FoodItems);
    });
});

//add a new Item to intentory
router.post('/addInventory', function (request, response) {
    var inventoryItem = new InventoryItem({
        name: request.body.name,
        stock: request.body.stock

    });
    inventoryItem.save(function (err) {
        if (err) {
            throw err;
        }
        else {
            response.send("Data Saved Successfully!");
        }
    });
});



router.post("/updateInventoryItem", function (req, res, next) {
    InventoryItem.findOneAndUpdate(
        {name: req.body.name},
        {$set: {stock: req.body.stock}},
        {returnOriginal: false})
        .then(function (result) {
            res.send(result);
        });


});
// add a new food Item from Chef app
router.post('/addFoodItem',function (request,response) {
    var foodSent=request.body.obj;
    var foodObj=JSON.parse(foodSent);

        var foodItem = new FoodItem({
            name: foodObj.name,
            image:foodObj.image,
            price:foodObj.price,
            ingredients: foodObj.ingredients



        });
        console.log(foodItem);
   foodItem.save(function (err) {
        if (err) {
            throw err;
        }
        else {
            response.send("Data Saved Successfully!");
        }
    });

});
//add a beverage
router.post('/addBeverageItem',function (request,response) {
    var beverageSent=request.body.obj;
    var beverageObj=JSON.parse(beverageSent);

    var beverageItem = new BeverageItem({
        name: beverageObj.name,
        image:beverageObj.image,
        price:beverageObj.price,
        ingredients: beverageObj.ingredients



    });
    console.log(beverageItem);
    beverageItem.save(function (err) {
        if (err) {
            throw err;
        }
        else {
            response.send("Data Saved Successfully!");
        }
    });

});

//add a dessert
router.post('/addDessertItem',function (request,response) {
    var dessertSent=request.body.obj;
    var dessertObj=JSON.parse(dessertSent);

    var dessertItem = new DessertItem({
        name: dessertObj.name,
        image:dessertObj.image,
        price:dessertObj.price,
        ingredients: dessertObj.ingredients


    });
    console.log(dessertItem);
    dessertItem.save(function (err) {
        if (err) {
            throw err;
        }
        else {
            response.send("Data Saved Successfully!");
        }
    });

});

// add a Juice
router.post('/addJuiceItem',function (request,response) {
    var juiceSent=request.body.obj;
    var juiceObj=JSON.parse(juiceSent);

    var juiceItem = new JuiceItem({
        name: juiceObj.name,
        image:juiceObj.image,
        price:juiceObj.price,
        ingredients: juiceObj.ingredients



    });
    console.log(juiceItem);
    juiceItem.save(function (err) {
        if (err) {
            throw err;
        }
        else {
            response.send("Data Saved Successfully!");
        }
    });

});
//add Kottu
router.post('/addKottuItem',function (request,response) {
    var kottuSent=request.body.obj;
    var kottuObj=JSON.parse(kottuSent);

    var kottuItem = new KottuItem({
        name: kottuObj.name,
        image:kottuObj.image,
        price:kottuObj.price,
        ingredients: kottuObj.ingredients



    });
    console.log(kottuItem);
    kottuItem.save(function (err) {
        if (err) {
            throw err;
        }
        else {
            response.send("Data Saved Successfully!");
        }
    });

});
//add noodles
router.post('/addNoodlesItem',function (request,response) {
    var noodlesSent=request.body.obj;
    var noodlesObj=JSON.parse(noodlesSent);

    var noodlesItem = new NoodlesItem({
        name: noodlesObj.name,
        image:noodlesObj.image,
        price:noodlesObj.price,
        ingredients: noodlesObj.ingredients



    });
    console.log(noodlesItem);
    noodlesItem.save(function (err) {
        if (err) {
            throw err;
        }
        else {
            response.send("Data Saved Successfully!");
        }
    });

});

//add rice and curry
router.post('/addRiceAndCurryItem',function (request,response) {
    var riceAndCurrySent=request.body.obj;
    var riceAndCurryObj=JSON.parse(riceAndCurrySent);

    var riceAndCurryItem = new RiceAndCurryItem({
        name: riceAndCurryObj.name,
        image:riceAndCurryObj.image,
        price:riceAndCurryObj.price,
        ingredients: riceAndCurryObj.ingredients



    });
    console.log(riceAndCurryItem);
    riceAndCurryItem.save(function (err) {
        if (err) {
            throw err;
        }
        else {
            response.send("Data Saved Successfully!");
        }
    });

});


//add a short Eat
router.post('/addShortEatItem',function (request,response) {
    var shortEatSent=request.body.obj;
    var shortEatObj=JSON.parse(shortEatSent);

    var shortEatItem = new ShortEatItem({
        name: shortEatObj.name,
        image:shortEatObj.image,
        price:shortEatObj.price,
        ingredients: shortEatObj.ingredients



    });
    console.log(shortEatItem);
    shortEatItem.save(function (err) {
        if (err) {
            throw err;
        }
        else {
            response.send("Data Saved Successfully!");
        }
    });

});
// add special item
router.post('/addSpecialItem',function (request,response) {
    var specialSent=request.body.obj;
    var specialObj=JSON.parse(specialSent);

    var specialItem = new SpecialItem({
        name: specialObj.name,
        image:specialObj.image,
        price:specialObj.price,
        ingredients: specialObj.ingredients



    });
    console.log(specialItem);
    specialItem.save(function (err) {
        if (err) {
            throw err;
        }
        else {
            response.send("Data Saved Successfully!");
        }
    });

});


// get Inventory
router.get('/GetInventory', function (req, res, next) {
    InventoryItem.find(function (err, InventoryItems) {
        res.send(InventoryItems);
    });

});

//update a item in inventory
router.get('/updateInventory', function (request, response) {
    InventoryItem.count({name: request.body.name}, function (err, count) {
        if (count > 0) {
            response.send({validity: true});
        }
    });

});


module.exports = router;

