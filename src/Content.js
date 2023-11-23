import React from 'react';
import { ItemsList } from './ItemsList';

function Content({items, handleCheck, handleButton}) {
    
  return (
    <>
      <div>Content</div>
      <div>
          
          { items.length !== 0 ? 
            <ItemsList 
              items = {items}
              handleCheck={handleCheck}
              handleButton={handleButton}
            />
          : <p style={{color: 'red'}} > There is no content</p> }
      </div>
    </>
  )
}

export default Content