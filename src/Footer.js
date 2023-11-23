import React from 'react'
import "./App.css"

const Footer = ({items}) => {
  return (
    <footer> No. of Items in list = {items.length} {items.length <= 1? "item" : "items"} 
    </footer>
  )
}
export default Footer
