import React,{useState} from "react";
import Board from "./component/Board";
import { Histroy } from "./component/histroy";
import { calculateWinner } from "./helper";
import Statusmsg from "./component/Statusmsg";
import "./Style/root.scss"


const App=()=>{


  const newgame =[{board:Array(9).fill(null),xnext:true}];
  const [histroy,sethistroy]=useState(newgame);
  const [currentmove,setcurrentmove]=useState(0);
  const current=histroy[currentmove];
  
  
  const { winner, winningSquares}  = calculateWinner(current.board);
  
  const handlersquare=(position)=>{

      if(current.board[position]|| winner){
          return;
      }
      sethistroy (prev =>{
        const last=prev[prev.length-1];
         const newBoard = last.board.map((Square,pos)=>{
              if(pos === position){
                  return last.xnext ?"x":"O";
              }
              
          

          
         
              return Square;
          });
          return prev.concat({board:newBoard,xnext:!last.xnext});
      });
      
      setcurrentmove (prev =>prev+1);
     
  };
  const moveto=(move)=>{
    setcurrentmove(move);
  }

  const newstart =()=>{
    sethistroy(newgame);
    setcurrentmove(0);
  }
  return(
    <div className="app">
      <h1 >TIC <spam className="text-green">TAC</spam> TOE</h1>
      <Statusmsg winner={winner} current={current}/>
      <Board board={current.board} handlersquare={handlersquare}
       winningSquares={winningSquares}/>
       <h2 style={{ fontWeight: 'normal' }}>Current game history</h2>
      <button type="button" onClick={newstart}
       className={`btn-reset ${winner ? 'active' : ''}`}

      >New Start</button>
      <Histroy histroy={histroy} moveTo={moveto} currentmove={currentmove}/>
      <div className="bg-balls "/>
    </div>
  );
}
export default App;
