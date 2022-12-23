import React from 'react'
import './searchBox.css'
export const SearchBoxComponent = (props) => {
    const { onInputChange } = props
  
    return (
    <>
        <div>
            <input 
                type="text" 
                className='search-box' 
                placeholder='Search Monsters'
                onChange={ onInputChange }
            />
        </div>
    </>
  )
}
