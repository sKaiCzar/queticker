//calling nedb
const dataStore = require('nedb');

var contests = new dataStore({filename : './src/dataStore/contests.json', autoload : true});

const express = require(“express”);
const app = express();

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


app.get(“/”, (req, res) => {
    contests.find({}, function (err,docs){
        if (err) {
            console.log(err);
        }
    }).then(data => {
        res.render(“index”, { todos: data });
    }).catch(err => res.status(400).json(err));
});
