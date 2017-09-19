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

console.log(dataBase.ref().child('gifs'));

/* GET users listing. */
router.get('/', function(req, res, next) {
    dataBase.ref().child('gifs')
        .once('value').then( function(snapshot) {
            console.log(snapshot.val());
            res.send('respond with a resource',snapshot.val());
        });
});

module.exports = router;
