import React, {useState, useEffect} from 'react';
import axios from "axios"
import PersonCard from "./components/Person.js"
import styled from "styled-components"
import './App.css';

const StyledDiv = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
`
const App = () => {
  const [persons, setPersonState] = useState([])
  useEffect(() => {
    axios
    .get("https://swapi.com/api/people/?page=2")
    .then(response => {
      console.log(response.data)
      setPersonState(response.data.results)
    })
    .catch(err => console.error(err))
  }, [])
  console.log(persons)
  
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <StyledDiv>
        {persons.map((person, index) =>{
          return(
            <PersonCard
            name={person.name}
            key={index}
            gender={person.gender}
            height={person.height}
            mass={person.mass}
            hariColor={person.hair_color}/>
          )
        })}
      </StyledDiv>
    </div>
  );
}

export default App;
