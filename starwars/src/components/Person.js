import React from 'react';
import styled from 'styled-components';

const PersonCard = (props) =>{
    console.log(props.hair_color)
    return(
        <StyledCard>
            <h2>Name: {props.name}</h2>
            <p>Gender: {props.gender}</p>
            <p>Height: {props.height}</p>
            <p>Mass: {props.mass}</p>
            <p>Hair Color: {props.hari_color}</p>
        </StyledCard>
    )
}
export default PersonCard;