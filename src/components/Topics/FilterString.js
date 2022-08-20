import React, { Component } from 'react';

export default class FilterString extends Component {
    
    constructor () {
        super();

        this.state = {
            unFilteredArray: [
                'Eggs', 'Waffles', 'Pancakes', 'French Toast', 'Cereal'
            ],
            userInput: '',
            filteredArray: []
        }
    }

    onChange(val) {
        this.setState({ userInput: val });
    }

    onClick(userInput) {
        let breakfast = this.state.unFilteredArray;
        let filteredBreakfast = [];

        for (let i = 0; i < breakfast.length; i++) {
            if (breakfast[i].includes(userInput)) {
                filteredBreakfast.push(breakfast[i]);
            }
        }
        this.setState({ filteredBreakfast: filteredBreakfast })
    }
    
    render() {
        return (
            <div className='puzzleBox filterStringPB'>
                <h4>Filter an array to see if a result is present</h4>
                <span className='puzzleText'>Breakfast: {JSON.stringify(this.state.unFilteredArray, null, 10)}</span>
                <input className='inputLine' onChange={ (e) => this.onChange(e.target.value)}></input>
                <button className='confirmationButton' onClick={() => {this.onClick(this.state.userInput)}}>Filter</button>
                <span className='resultsBox filterStringRB'>Filtered: { JSON.stringify(this.state.filteredBreakfast, null, 10) }</span>
            </div>
        )
    }
}