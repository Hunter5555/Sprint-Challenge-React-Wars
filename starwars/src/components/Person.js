import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
    background: black;
    width: 400px;
    border-radius: 10px;
    margin-bottom: 20px;
    opacity: 0.5;
    color: yellow;
    box-shadow: 0 8px 6px -6px black;
    font-size: 1.4rem;
`;

const PersonCard = (props) => {
   console.log(props.hair_color)
    return(
        <StyledCard>
            <h2>Name: {props.name}</h2>
            <p>Gender: {props.gender}</p>
            <p>Height: {props.height}cm</p>
            <p>Mass: {props.mass}kg</p>
            <p>Hair Color: {props.hair_color}</p>
        </StyledCard>
    )
} 
export default PersonCard; 