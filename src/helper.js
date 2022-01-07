//calling nedb
const dataStore = require('nedb');

var records = new dataStore({filename : './src/dataStore/record.json', autoload : true});

//document for outputing no of questions done
var quant = document.getElementById("showCount");

//const initVal = localStorage.clickcount === undefined ? 0 : localStorage.clickcount;

//setting it to 0
quant.innerHTML = localStorage.clickcount;

//date at start of program
let startupDate = new Date();

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
    dateChangeCheck();
    incr();
    bgCol();
}

//calling function for decreasing the value
function nega() {
    dateChangeCheck();
    decr();
    bgCol();
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

}

//function to change background Color
function bgCol() {
    document.body.style.backgroundColor = colors[localStorage.clickcount];
}

//function to date change
function dateChangeCheck() {
    //checking date at the moment
    const rn = new Date();
    if (rn.getDate()!==startupDate.getDate()) {
        let data= {
                "date" : startupDate.toLocaleDateString("en-US"),
                "tasks" : localStorage.clickcount
            };
            records.insert(data, function(err, doc) {
                console.log('Inserted', doc.name, 'with ID', doc._id);
            });

        localStorage.clickcount = 0;
        startupDate = rn;
    }
}
