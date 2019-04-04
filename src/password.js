import React, { Component } from 'react'
import 'random-words'
import { wordList } from 'random-words';

class Password extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            password: 'p@ssw0rd'
        }
    }

    // gets a random number from 0 to n
    random(n) {
        return Math.floor(Math.random() * n)
    }

    // gives a random charactor
    randomCharactor() {
        let str = '!@#$%^&*()_+?'
        return str[this.random(str.length)]
    }

    // generates a random password with 8 charactors
    generatePassword() {
        // generate password here
        console.log("generating password")
        // let result = ''
        // let i = 0
        // while (i < 8) {
        //     result += this.randomCharactor()
        //     i += 1
        //     if (i%3 === 0) {
        //         result += '-'
        //     }
        // }
        let index = this.random(wordList.length) 
        let result = wordList[index] + this.random(1000).toString() + this.randomCharactor()
        this.setState({password: result})
    }

    render() {
        return (
            <div className="elem">
                <div className="pass">{this.state.password}</div>
                <div>
                    <button onClick={(e) => {
                        console.log("HERE")
                        this.generatePassword()
                    }}>Generate</button>
                </div>
            </div>
        )
    }
}

export default Password