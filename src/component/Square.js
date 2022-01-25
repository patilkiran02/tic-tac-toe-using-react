import React from 'react'

 const Square = ({value,onclick,iswinningsquares}) => {
    return (
   
      <button
      type="button"
      onClick={onclick}
      className={`square ${iswinningsquares ? 'winning' : ''} ${
        value === 'X' ? 'text-green' : 'text-orange'
      }`}
    >
      {value}
    </button>
                
    

    )
}
export default Square;
