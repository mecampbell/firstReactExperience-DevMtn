import React, { Component } from 'react';

export default class Sum extends Component {
    
    constructor () {
        super();

        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }
    
    onChangeOne(val) {
        this.setState({ number1: parseInt(val, 10) });
    }

    onChangeTwo(val) {
        this.setState({ number2: parseInt(val, 10) });
    }

    onClick(num1, num2) {
        this.setState({ sum: num1 + num2 });
    }

    render() {
        return (
            <div className='puzzleBox sumPB'>
                <h4>Sum</h4>
                <input className='inputLine' type='number' onChange={ (e) => this.onChangeOne(e.target.value)}></input>
                <input className='inputLine' type='number' onChange={ (e) => this.onChangeTwo(e.target.value)}></input>
                <button className='confirmationButton' onClick={ () => this.onClick(this.state.number1, this.state.number2) }>Add</button>
                <span className='resultsBox'>Sum: {this.state.sum}</span>
            </div>
        )
    }
}