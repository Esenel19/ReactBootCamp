import React from "react";
import Button from 'react-bootstrap/Button';

const RoundQuest = ({data,ele,index,INDEX,CurentRound,setCurentRound,setScore,Score}) => {

    return (
        <div className="divbutton">
          <div className="centerbuttonquestion">
            <Button variant="outline-warning" key={ele} onClick={() => {
              // sconsole.log(data[INDEX].rounds[CurentRound].corrects.includes(index));
              if (data[INDEX]?.rounds[CurentRound + 1]) {
                setCurentRound(CurentRound + 1);
              }
              if (!data[INDEX]?.rounds[CurentRound + 1]) {
                //page score ??
              }
              if (data[INDEX].rounds[CurentRound].corrects[index] === 1) {
                if (Score <= CurentRound) {
                  setScore(Score + 1);
                }
              }
            }}>
              {ele}
            </Button>
          </div>
        </div>
      )
}

export default RoundQuest;