import React from 'react';
import styled from 'styled-components';

const GameBox = styled.div`
        background-color: lightgrey;
        padding: 20px;
        width: 75%;
        height: 80%;
        color: white;
        text-align: center;

` 
const Title = styled.h1`
        font-family: 'Press Start 2P', cursive;
        font-size: 24px;

`

const GamePicture = styled.img`
        height: 300px;
`
const GameContent = styled.div`
`
const TextHolder = styled.div`
`

const SingleGame = ({game, index}) => {
        
        return (
                <GameBox>
                        <Title>{game.name}</Title>
                        <GameContent>
                                <TextHolder>
                                <p>Release date: {game.released} </p>
                                <p>Rating: {game.rating}/5</p>
                                </TextHolder>
                        </GameContent>
                        <GamePicture src={game.background_image} alt="Game Screenshot"></GamePicture>
                </GameBox>
        
        )
}

export default SingleGame;