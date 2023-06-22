import React, { useState, useEffect } from 'react';

const App = () => {
  const [data, setData] = useState([]);
  // var [num_quest, setnextQuestion] = useState(0);
  var [INDEX, setIndex] = React.useState(1);
  var [CurentRound, setCurentRound] = React.useState(0);
  var [QuizRep, setQuizRep] = React.useState(true);

  useEffect(() => {
    fetch("https://bootcamp-production-b9a5.up.railway.app/quizz")
    .then((response) => response.json())
    .then((response) => setData(response))
    .catch((error) => console.log("Erreur"));
  }, []);

  function handleButtonClick() {
    console.log("ok");
  }

  return (
    <div className='App'>
      <h1>Quizz</h1>
      {QuizRep && data.map((ele, index)  => {
       return (
        <div>
        <button onClick={() => {
            setQuizRep(false);
            setIndex(index)}}>Quizz {index + 1}{ele.categorie}
        </button>
        </div>
       )
      })}
      {!QuizRep && (
        <div>
         <button onClick={() => {
            setQuizRep(true)
            }}>
            Retour
        </button>
        {data[INDEX]?.rounds[CurentRound].reponses.map((ele,index) => {
          return (
          <button key={ele} onClick={() => {
            if(data[INDEX].rounds[CurentRound].corrects.includes(index))
            {
              if(data[INDEX]?.rounds[CurentRound + 1])
              {
                setCurentRound(CurentRound + 1);
              }
              console.log("bon");
            }
          }}>
          {ele}
          </button>
          )}
        )}
        </div>
      )}
      {data[INDEX]?.rounds[CurentRound].questions}
    </div>
  );
  
};

// data.line
export default App;
