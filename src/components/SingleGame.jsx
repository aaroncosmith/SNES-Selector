import React from 'react';
import styled from 'styled-components';

const GameBox = styled.div`
        background-color: black;
        padding: 20px;
        width: 75%;
        height: 80%;
        color: white;
        text-align: center;
        align-items: center;

` 
const Title = styled.h1`
        font-family: 'Press Start 2P', cursive;
        font-size: 24px;

`

const GamePicture = styled.img`
        max-height: 300px;
        width: auto;

`
const GameContent = styled.div`
`
const SystemTitle = styled.h1`
        font-family: 'Press Start 2P', cursive;
        font-size: 32px;
`
const TextHolder = styled.div``

const TryAgain = styled.a`
        cursor: pointer;
        margin-top: 10px;
        background-color: white;
        padding: 4px;
        border: 2px;
        border-radius: 5px;
        color: black;
        font-family: 'Press Start 2P', cursive;
        font-size: 24px;
`

const SingleGame = ({game, system, index}) => {
        function refreshPage() {
                window.location.reload(false);
        }
        return (
                <GameBox>
                        <SystemTitle></SystemTitle>
                        <Title>{game.name}</Title>
                        <GameContent>
                                <TextHolder>
                                <p>Release date: {game.released} </p>
                                <p>Rating: {game.rating}/5</p>
                                </TextHolder>
                        </GameContent>
                        <GamePicture src={game.background_image} alt="Game Screenshot"></GamePicture>
                        <p><TryAgain onClick={refreshPage}>Try Again!</TryAgain></p>
                </GameBox>
        
        )
}

export default SingleGame;