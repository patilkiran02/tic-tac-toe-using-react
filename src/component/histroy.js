import React from 'react'

export const Histroy = ({histroy,moveTo,currentmove}) => {
    return (
        <div className='history-wrapper'>
        <ul className='histroy'>
        {
            histroy.map((_,move)=>{
                return(
                <li key={move}>
                <button 
                 className={`btn-move ${move === currentmove ?'active': " "}`}
                 type='button'onClick={()=>{
                    moveTo(move)
                }}>{
                    move===0?"Go to start":`Move to next ${move}`
                }</button></li>
   

                );
            })

        }
       

        </ul>
        </div>
    )
}
export default History;
