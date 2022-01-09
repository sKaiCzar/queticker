//calling nedb
const dataStore = require('nedb');

var records = new dataStore({filename : './src/dataStore/record.json', autoload : true});

//document for outputing no of questions done
var quant = document.getElementById("showCount");

const formData = document.forms[0];

formData.addEventListener("submit", function(event) {
  event.preventDefault();
  const { name, date, rating, url } = this.elements;
  // or
  // const { name, description, task } = event.target.elements;
  console.log(name.value, date.value, rating.value, url.value);
});
