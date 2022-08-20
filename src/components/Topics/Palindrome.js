import React, { Component } from 'react';

export default class Palindrome extends Component {
    
    constructor () {
        super();

        this.state = {
            userInput: '',
            palindrome: ''
        }
    }

    onChange(val) {
        this.setState({ userInput: val });
    }

    onClick(userInput) {
        let backwards = userInput;
        backwards = backwards.split('');
        backwards = backwards.reverse();
        backwards = backwards.join('');
    
        if (userInput === backwards) {
        this.setState({ palindrome: 'true' })
        } else {
        this.setState({ palindrome: 'false' })
        } 
    }
    
    render() {
        return (
            <div className='puzzleBox filterStringPB'>
                <h4>Palindrome: The word backwards is the word forwards</h4>
                <input className='inputLine' onChange={ (e) => this.onChange(e.target.value)}></input>
                <button className='confirmationButton' onClick={() => {this.onClick(this.state.userInput)}}>Palindrome?</button>
                <span className='resultsBox'>Palindrome: { this.state.palindrome }</span>
            </div>
        )
    }
}