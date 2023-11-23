import React from 'react';
import { FaTrashAlt } from "react-icons/fa";

export const Linelist = ({item, handleCheck, handleButton}) => {
  return (
    <li className='item' >
        <input type="checkbox" checked = {item.checker} onChange={() => handleCheck(item.id)}></input>
        <label style={(item.checker)? {textDecoration: 'line-through'} : null}>{item.item}</label>
        <FaTrashAlt 
          onClick={() => handleButton(item.id) } 
          role='button'
          aria-label={`Delete ${item.item}`}
          />
    </li>
  )
}

export default Linelist