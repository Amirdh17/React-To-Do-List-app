import React from 'react'

const SearchItems = ({search, setSearch}) => {
  return (
    <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
        <label htmlFor='search'></label>
        <input
            id='search'
            type='text'
            role='searchbox'
            placeholder='Enter item name to search'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        >
            
        </input>
    </form>
  )
}

export default SearchItems