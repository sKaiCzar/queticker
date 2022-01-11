//calling nedb
const dataStore = require('nedb');

var contests = new dataStore({filename : './src/dataStore/contests.json', autoload : true});

//document for outputing no of questions done
var cons = document.getElementsByClassName('cnt_counter');

var x = null;

contest.find({}, function (err, docs) {
    if (err) {
        console.log(err);
    }
    x = docs;
});

forEach((doc, x) => {
    var {name, date, rating, url} = doc;
    if (cons) {
        var hr = document.createElement("hr");
        hr.appendChild(document.createTextNode(""+ name + " " + date + " " + rating " " + url + "."));
        document.getElementById("container").appendChild(hr);
    }
});
