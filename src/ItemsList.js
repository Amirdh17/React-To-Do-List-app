import React from 'react';
import { Linelist } from './Linelist';

export const ItemsList = ({items, handleCheck, handleButton}) => {
  return (
    <main>
        <ul>
            {items.map((item) => (

            <Linelist
                item = {item}
                key = {item.id}
                handleCheck = {handleCheck}
                handleButton = {handleButton}
            />

          ))} 
          
          </ul>
    </main>
  )
}
