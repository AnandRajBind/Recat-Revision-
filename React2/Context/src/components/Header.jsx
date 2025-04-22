// import React from 'react'
import { useContext } from 'react'
import { DataContext } from '../context/UserContext' // import the context


export const Header = () => {

  const data= useContext(DataContext)

  return (
    <div>
        <h1>
        Header {data.age}
        </h1>
    </div>
  )
}
