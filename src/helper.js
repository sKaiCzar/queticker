//requiring pouchdb
//var PouchDB = require('pouchdb');

//creating variable with name db_name as a param for DB Name
//const db_name = new Date().toISOString().slice(0, 19).replace('T', '');

//creating db_name with date as parameter
//const db = new PouchDb(db_name);

//document for outputing no of questions done
var quant = document.getElementById("showCount");

//setting it to 0
quant.innerHTML = 0;

//getting new date
var today = new Date();

//creating new doc or default value in database
// var doc = {
//     "_id" : db_name,
//     "ques": localStorage.clickcount
//}

//input the value in database
//db.put(doc);

//array of colors
var colors = [
    "#FF0000",
    "#DC143C",
    "#FF7F00",
    "#FFFF00",
    "#DFFF00",
    "#00FF00",
    "#00FF80",
    "#00FFFF",
    "#007FFF",
    "#0000FF",
    "#ADD8E6"
];

//calling function for increasing value
function positive() {
    incr();
    bgCol();
    var nextDay = new Date();
    if (!sameDay(today, nextDay)) {
        localStorage.clickcount=0;
        //const db = new PouchDb(db_name);
    }
}


//calling function for decreasing the value
function nega() {
    decr();
    bgCol();
    var nextDay = new Date();
    if (!sameDay(today, nextDay)) {
        localStorage.clickcount=0;
        //const db = new PouchDb(new Date().toISOString().slice(0, 19).replace('T', ''));
    }
}

//increment function
function incr() {
    if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount) + 1;
    }
    else {
        localStorage.clickcount = 0;
    }
    quant.innerHTML = localStorage.clickcount;
    //update doc in pouchdb
    // db.get(db_name).catch(function (err) {
    //     if (err.name === 'not_found') {
    //         return {
    //             _id: db_name,
    //             ques : localStorage.clickcount
    //         };
    //     } else { // hm, some other error
    //         throw err;
    //     }
    // }).then(function (configDoc) {
    //     // sweet, here is our configDoc
    // }).catch(function (err) {
    //     // handle any errors
    // });
}


//decrement function
function decr() {
    if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount) - 1;
    }
    else {
        localStorage.clickcount = 0;
    }
    quant.innerHTML = localStorage.clickcount;
    //update doc in pouchdb
    // db.get(db_name).catch(function (err) {
    //     if (err.name === 'not_found') {
    //         return {
    //             _id: db_name,
    //             ques : localStorage.clickcount
    //         };
    //     } else { // hm, some other error
    //         throw err;
    //     }
    // }).then(function (configDoc) {
    //     // sweet, here is our configDoc
    // }).catch(function (err) {
    //     // handle any errors
    // });
}

//function to check for same day
function sameDay(d1, d2) {
  return (
        d1.getFullYear() === d2.getFullYear() &&
        d1.getMonth() === d2.getMonth() &&
        d1.getDate() === d2.getDate()
    );
}

//function to change background Color
function bgCol() {
    document.body.style.backgroundColor = colors[localStorage.clickcount];
}
