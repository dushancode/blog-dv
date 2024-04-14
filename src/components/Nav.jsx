import React from 'react'
import { Link } from 'react-router-dom'
const Nav = ({search,setSearch}) => {
  return (
    <div className='Nav'>
      
    <form className='searchForm'
    onSubmit={(e)=>e.preventDefault}>
    <label htmlFor='search'></label>
          <input 
              id ="search"
              type='text'
              placeholder='search post'
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
          />


    </form>
      <ul>
        <li><Link to="/">Home</Link></li>
      </ul>
    </div>
  )
}

export default Nav
