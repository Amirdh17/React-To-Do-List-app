import React from 'react'
import { FaPlus } from 'react-icons/fa'

const AddItems = ({newItems, setNewItems, handleSubmit}) => {
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor='addItem'>Add Items : </label>
        <input 
          id='addItem'
          autoFocus
          required    
          type='text'
          placeholder='Add Item'
          value={newItems}
          onChange={(e) => setNewItems(e.target.value)}
        />
        <button
          type='submit'
          aria-label='Add Items'
        >
            <FaPlus/>
        </button>
    </form>
  )
}

export default AddItems