
import Square from './Square';

 const Board = ({board ,handlersquare, winningSquares}) => {

   
    const rendersquare = position =>{
        
        const iswinningSquares = winningSquares.includes(position);

        return (
        <Square 
        value={board[position]} 
        onclick={()=>handlersquare(position)}
        iswinningsquares={iswinningSquares}
        />
     );
    };
    return (
        <div className='board'>
        <div className='board-row'>
            {rendersquare (0)}
            {rendersquare (1)}
            {rendersquare (2)}
            
        </div>
        <div className='board-row'>
           {rendersquare (3)}
           {rendersquare (4)}
           {rendersquare (5)}
        </div>
        <div className='board-row'>
           {rendersquare (6)}
           {rendersquare (7)}
           {rendersquare (8)}
        </div>
           
            
        </div>
    )
}
export default Board;