import React from 'react';

const dataStore = require('nedb');
var contests = new dataStore({ filename: './src/dataStore/contest.json', autoload: true });


function Contest() {
    return (
        <div>Contest</div>
    );
}

export default Contest;