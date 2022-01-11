//calling nedb
const dataStore = require('nedb');

var contests = new dataStore({filename : './src/dataStore/contests.json', autoload : true});

const formData = document.forms[0];

formData.addEventListener("submit", function(event) {
    event.preventDefault();
    const { name, date, time, rating, url } = this.elements;
    // or
    // const { name, date, rating, url } = event.target.elements;
    //console.log(name.value, date.value, rating.value, url.value);
    let data= {
        "name" : this.name,
        "date" : this.date,
        "time" : this.time,
        "rating" : this.rating,
        "url" : this.url
    };
    contests.insert(data, function(err, doc) {
        console.log('Inserted', doc.name, 'with ID', doc._id);
    });

});
