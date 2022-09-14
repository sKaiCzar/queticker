import React from 'react';
const dataStore = require('nedb');
var contests = new dataStore({ filename: './src/dataStore/contest.json', autoload: true });

function ContestAdder() {
    return (
        <div>
            <form>
                <label>Name of Contest
                    <input type="text" id="name" name="name" required />
                </label>
                <label>Date of Contest
                    <input type="date" id="date" name="date" required />
                </label>
                <label>Rating of Contest
                    <input type="text" id="rating" name="rating" required />
                </label>
                <label>URL of Contest
                    <input type="url" id="url" name="url" required />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

const formData = document.forms[0];

formData.addEventListener("submit", function (event) {
    event.preventDefault();
    const { name, date, rating, url } = this.elements;
    // or
    // const { name, description, task } = event.target.elements;
    //console.log(name.value, date.value, rating.value, url.value);
    let data = {
        "name": this.name,
        "date": this.date,
        "rating": this.rating,
        "url": this.url
    };
    contests.insert(data, function (err, doc) {
        console.log('Inserted ', doc.name, ' with ID ', doc._id);
    });

});

export default ContestAdder;