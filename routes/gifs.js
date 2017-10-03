var express = require('express');
var router = express.Router();
//var axio = require('axio');

var admin = require("firebase-admin");

var serviceAccount = require("../gif4z0-0-firebase-adminsdk");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://gif4z0-0.firebaseio.com"
});

/*
 var firebase = require('firebase');

firebase.initializeApp({
    apiKey: "AIzaSyAtprBrjbnwA-DLoC9YkROOWIOVuw5jYkI",
    authDomain: "gif4z0-0.firebaseapp.com",
    databaseURL: "https://gif4z0-0.firebaseio.com",
    projectId: "gif4z0-0",
    storageBucket: "gif4z0-0.appspot.com",
    messagingSenderId: "603563612327"
});
*/
var dataBase = admin.database();

/* GET gifs listing. */
router.get('/', (req, res, next) => {
    let collection = dataBase.ref().child('gifs');
    
    if (req.query.desc){
        collection.orderByChild('desc').equalTo(req.query.desc).once('value').then((snapshot) => {
            res.status(200).jsonp(snapshot.val());
        });
    } else {
        collection.once('value').then((snapshot) => {
            res.status(200).jsonp(snapshot.val());
        });/* .error((err) => {
            res.status(301).jsonp([]);
        }) */
    }        
});

 router.get('/:id', (req, res, next) => {
    dataBase.ref().child('gifs')
    .orderByChild('id').equalTo(req.params.id)
        .once('value').then((snapshot) => {            
            res.status(200).jsonp(snapshot.val());
        });
});
module.exports = router;
