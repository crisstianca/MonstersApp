import React from 'react'
import './cardList.css'
export const CardListComponents = (props) => {
   const { name, id, email } = props.monster 
    console.log( props )

  return (
    <>
        <div className='card-container'>
           <img src={`https://robohash.org/${ id }?set=set2&size=180x180`} alt="Imagen" />
           <h2> { name } </h2>
           <p> { email } </p>
        </div>
    
    </>
  )
}
