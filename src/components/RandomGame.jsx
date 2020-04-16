import React, { Component } from 'react';
import SingleGame from './SingleGame';
import styled from 'styled-components';

const GameWrapper = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;

`


class RandomGame extends Component {
    constructor(props) {
        super(props);
        this.state = {games: [{"slug":"romance-of-the-three-kingdoms-iii-dragon-of-destin","name":"Romance of the Three Kingdoms III: Dragon of Destiny","playtime":0,"platforms":[{"platform":{"id":4,"name":"PC","slug":"pc"}},{"platform":{"id":27,"name":"PlayStation","slug":"playstation1"}},{"platform":{"id":79,"name":"SNES","slug":"snes"}},{"platform":{"id":167,"name":"Genesis","slug":"genesis"}},{"platform":{"id":119,"name":"SEGA CD","slug":"sega-cd"}}],"stores":null,"released":"1992-02-05","tba":false,"background_image":"https://media.rawg.io/media/screenshots/3cd/3cd58e1f778558f2a5471e815a548ce6.jpg","rating":0.0,"rating_top":0,"ratings":[],"ratings_count":0,"reviews_text_count":0,"added":2,"added_by_status":{"owned":1,"toplay":1},"metacritic":null,"suggestions_count":283,"id":54302,"score":null,"clip":null,"tags":[{"id":7,"name":"Multiplayer","slug":"multiplayer","language":"eng","games_count":18978,"image_background":"https://media.rawg.io/media/games/91c/91c4f377c1e09755b60a0102c5252843.jpg"},{"id":31,"name":"Singleplayer","slug":"singleplayer","language":"eng","games_count":65290,"image_background":"https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"}],"user_game":null,"reviews_count":0,"community_rating":0,"saturated_color":"0f0f0f","dominant_color":"0f0f0f","short_screenshots":[{"id":-1,"image":"https://media.rawg.io/media/screenshots/3cd/3cd58e1f778558f2a5471e815a548ce6.jpg"},{"id":740107,"image":"https://media.rawg.io/media/screenshots/f78/f78892da5a4dcc2a741dbcdbee15ddd1.jpg"},{"id":740108,"image":"https://media.rawg.io/media/screenshots/03e/03e3c10f8d6eee49b753e39b9f61bcff.jpg"},{"id":740109,"image":"https://media.rawg.io/media/screenshots/725/725bba51c30c5801379d57677679013b.jpg"},{"id":740110,"image":"https://media.rawg.io/media/screenshots/671/671f68b33d8566bbc6c859215a03b384.jpg"},{"id":740111,"image":"https://media.rawg.io/media/screenshots/7ef/7ef4c7db9d9f002ce3ffa13992e145c5.jpg"},{"id":740112,"image":"https://media.rawg.io/media/screenshots/d0f/d0ff99f62389bf17b698d67214fb3ba7.jpg"}],"parent_platforms":[{"platform":{"id":1,"name":"PC","slug":"pc"}},{"platform":{"id":2,"name":"PlayStation","slug":"playstation"}},{"platform":{"id":7,"name":"Nintendo","slug":"nintendo"}},{"platform":{"id":11,"name":"SEGA","slug":"sega"}}],"genres":[]}]};
        this.oneGame = {oneGame: []};
    }
    
    getRandomPage = (max) => {
        return Math.floor(Math.random() * Math.floor(max))
    };

    getSingleGame = (arr) => {
        return arr[Math.floor(Math.floor(Math.random()*arr.length))]
    }
    
    
    
    // async componentDidMount() {
    //     try {
    //         const page = this.getRandomPage(40) 
    //         const response = await fetch(`https://api.rawg.io/api/games?platforms=79&page_size=20&page=${page}`)
    //         const data = await response.json();
    //         console.log(data);
    //         this.setState({games: data.results})
    //         const game = this.getSingleGame(data.results);
    //         console.log(game)
    //         this.setState({games:[game]})
    //     } catch (error) {
    //         console.log("Error is ", error.message)
    //     }
    // };


    render() {
        const { games } = this.state;
        return (
            <GameWrapper>
                {
                games.map((oneGame, i) => (
                    <SingleGame game={oneGame} key={i} />
                ))}
            </GameWrapper>
        );
    }
}

export default RandomGame;