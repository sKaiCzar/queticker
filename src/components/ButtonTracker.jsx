import React, { Component } from 'react';
import { render } from 'react-dom';

const ar = ['#fff100', '#ff8c00', '#e81123', '#ec008c', '#68217a', '#00188f', '#00bcf2', '#00b294', '#009e49', '#bad80a'];

class ButtonTracker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numClicks: 0
        };
        document.body.style.background = ar[0];
    }

    incr = () => {
        let newCount = this.state.numClicks + 1;
        this.setState({
            numClicks: newCount,
        });
        document.getElementById("Counter").innerHTML = newCount;
        document.body.style.background = ar[newCount];
    };
    dcr = () => {
        let newCount = Math.max(0, this.state.numClicks - 1);
        this.setState({
            numClicks: newCount,
        });
        document.getElementById("Counter").innerHTML = newCount;
        document.body.style.background = ar[newCount];
    };
    render() {
        return (
            <div>
                <h1>Questions done today:</h1>
                <h2 id="Counter">0</h2>
                <button onClick={this.incr}>+</button>
                <button onClick={this.dcr}>-</button>
            </div>
        );
    };

}



export default ButtonTracker;