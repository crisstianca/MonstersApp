import React, { useEffect, useState } from 'react'
import { CardListComponents } from './components/card-list/CardListComponents'
import { SearchBoxComponent } from './components/search-box/SearchBoxComponent'
import './PrincipalPage.css'

export const PrincipalPage = () => {

    let initialState = []
    let initialStateFiltered = []

    //He creado 3 estados:
    //1, monsters para poder guardar la data que obtenga de la Api
    //2, filtered es la misma data de los monsters pero este servira para no estar renderizando la de los monsters y solo obterla una sola vez
    //3, formState donde se guarda el valor del input
    const [ monsters, setMonsters ] = useState( initialState)
    const [ filtered, setFiltered ] = useState(initialStateFiltered)
    const [ formState, setFormState ] = useState("")

    const getFetch = async() => {
        const url = 'https://jsonplaceholder.typicode.com/users'
        const resp = await fetch( url )
        const data = await resp.json()
        setMonsters( data )
        setFiltered( data )
        console.log( data )
    }
    
    const onInputChange = ({ target }) => {
       setFormState(target.value.toLocaleLowerCase())
    }

    const seacrhEffect = () => {
        const filteredMonsters = filtered.filter( monster => {
            return monster.name.toLocaleLowerCase().includes( formState )
        })
        setMonsters( filteredMonsters )
    }
    
    useEffect( () => {
        getFetch()
    },[])

    useEffect( () => {
        seacrhEffect()
    },[formState])

    // const pintar = () => {
    //     return monsters.map( personaje => {
    //         return (
    //             <div key={personaje.id}>
    //                 {
    //                     <h3>
    //                         {
    //                             personaje.name
    //                         }
    //                     </h3>
    //                 }
    //             </div>
    //         )
    //     })
    // }
 
    return (
        <>
            <h1> Monsters </h1>

            {
                <SearchBoxComponent onInputChange={onInputChange}/>
            }
            <div className='card-list'>
                {
                    monsters.map( monster => {
                        return  <CardListComponents monster={ monster } />
                    })
                }
            </div>
        </>
    )
}
