//calling nedb
const dataStore = require('nedb');

var records = new dataStore({filename : './src/dataStore/record.json', autoload : true});

//document for outputing no of questions done
var quant = document.getElementById("showCount");
