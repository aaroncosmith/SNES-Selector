import React, { Component } from 'react';

class Gamecard extends Component {
    state = {
        id: "",
        name: "",
        rating: "",


    }
    async componentDidMount() {
        try {
            const response = await fetch('https://api.rawg.io/api/games?platforms=79&developers=nintendo')
            const data = await response.json();
            console.log(data.results[0])
            // this is super mario world
            this.setState({
                id: data.results[0].id,
                name: data.results[0].name,
                rating: data.results[0].rating
            })
        } catch (error) {
            console.log("Error is ", error.message)
        }
    }
    render() {
        const { id, name, rating } = this.state;
        return (
            <div>
                <p>{id}</p>
                <p>{name}</p>
                <p>{rating}</p>
            </div>
        );
    }
}

export default Gamecard;