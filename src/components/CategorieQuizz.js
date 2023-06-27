import React from "react";
import Button from 'react-bootstrap/Button';

const CategorieQuizz = ({ele,index,setIndex, setQuizRep}) => {

        return (
          <div className="divbutton">
            <div className="centerbutton">
              <Button variant="outline-info" onClick={() => {
                setQuizRep(false);
                setIndex(index)
              }}>Quizz {index + 1}: {ele.categorie}
              </Button>
            </div>
          </div>
        )
      }
export default CategorieQuizz;