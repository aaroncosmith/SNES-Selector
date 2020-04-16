import React, { Component } from 'react';
import SingleGame from './SingleGame'

class Gamecard extends Component {
    constructor(props) {
        super(props);
        this.state = {games: []};
    }

    getRandomPage() 
    async componentDidMount() {
        try {
            const response = await fetch('https://api.rawg.io/api/games?platforms=79&page_size=20&page=30')
            const data = await response.json();
            this.setState({games: data.results})
        } catch (error) {
            console.log("Error is ", error.message)
        }
    }
    render() {
        const { games } = this.state;
        return (
            <div>

                
                    <SingleGame games={games} key={i} />
                
            </div>
        );
    }
}

export default Gamecard;