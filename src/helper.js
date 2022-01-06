//requiring fs
const fs = require('fs');

const filePath = './src/dataStore/record.json';

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
    if (rn.getMinutes()!==startupDate.getMinutes()) {
        var file = fs.readFileSync(filePath);
        var dat = [];
        dat.push(JSON.parse(file));
        let data= {
                "date" : startupDate.toLocaleDateString("en-US"),
                "tasks" : localStorage.clickcount
            };
        dat.push(data);
        var nextData = JSON.stringify(dat);
        fs.writeFile( filePath, nextData, (err) => {
            if (err) throw err;
            console.log("New data added");
        });

        localStorage.clickcount = 1;
        startupDate = rn;
    }
}
