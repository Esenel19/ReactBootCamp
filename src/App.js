import React, { useState, useEffect } from 'react';
// import { BrowserRouter, Routes, Route } from "react-router-dom";

import './darkMode.css';

import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CategorieQuizz from './components/CategorieQuizz';
import RoundQuest from './components/RoundQuest';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// import Score from "./pages/Score";

const App = () => {

  // Fonction changement theme page
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const [data, setData] = useState([]);
  // var [num_quest, setnextQuestion] = useState(0);
  var [INDEX, setIndex] = React.useState(1);
  var [CurentRound, setCurentRound] = React.useState(0);
  var [QuizRep, setQuizRep] = React.useState(true);
  var [Score, setScore] = React.useState(0);

  useEffect(() => {
    fetch("https://bootcamp-production-b9a5.up.railway.app/quizz")
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((error) => console.log("Erreur"));
  }, []);

  return (
    <div className={`.App ${theme}`}>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Quizz</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Button variant="light" onClick={toggleTheme}>Changer Theme</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <h1>Bienvenue, sélectionner l'un des quizz</h1>
      {QuizRep && data.map((ele, index) => {
        return <CategorieQuizz  ele={ele} index={index} setIndex={setIndex} setQuizRep={setQuizRep}></CategorieQuizz>
        })}
     
      {!QuizRep && (
        <div>

          <Button className='buttonreturn' variant="secondary" onClick={() => {
            setQuizRep(true)
            setScore(Score = 0)
          }}>Retour
          </Button>

          <div className="divquestion">
            <h2 className="centertext">Choissisez la réponse que vous voulez</h2>
            <p className="centerquestion">Question : {data[INDEX]?.rounds[CurentRound].questions}</p>
          </div>

          {data[INDEX]?.rounds[CurentRound].reponses.map((ele, index) => {
            return <RoundQuest data={data} ele={ele} index={index} INDEX={INDEX} CurentRound={CurentRound} setCurentRound={setCurentRound} setScore={setScore} Score={Score}> </RoundQuest>
          }
          )}
          <p className='score'>Voici votre score : {Score}</p>
        </div>
      )}
    </div>
  );

};
// data.line
export default App;
