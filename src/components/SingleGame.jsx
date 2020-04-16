import React from 'react';
import styled from 'styled-components';

const GameBox = styled.div`
        background-color: lightgrey;
        padding: 20px;
        width: 75%;
        height: 80%;

` 
const Title = styled.h1`
        font-family: 'Press Start 2P', cursive;
        font-size: 24px;

`

const GamePicture = styled.img`
        height: 300px;
`

const SingleGame = ({game, index}) => {
        
        return (
                <GameBox>
                        <Title>{game.name}</Title>
                        <p>Release date: {game.released} </p>
                        <p>{game.rating}</p>
                        <GamePicture src={game.background_image} alt="Game Screenshot"></GamePicture>
                        <p><a href="https://www.google.com/search?q=super%20nintendo%20">Find out more...</a></p>
                </GameBox>
        
        )
}

export default SingleGame;