//*******************************Props pass in the react component  ******************************************/
/*
import React from 'react'

// propes recive in the card component 
const Card = (props) => {
console.log(props.name);// here we can see the props name is Anand

  return (
    <div className='bg-amber-500 text-2xl'>User Name is:  {props.name} </div>
  )
}

 export default Card

*/
import React from 'react'

export const Card = (props) => {

    
    return (
        <div className='bg-white mr-8 mb-8 text-black inline-block p-6 text-center rounded'>
            <img  className=" ml-8 h-32 w-32 rounded-full mb-3 "
             src={props.photo} alt="Image Not Found" />
            <h1 className='text-2xl font-bold mb-4'>
                {props.user}  
            </h1>

            <h2 className='text-blue-400'>{props.Profession}</h2>
            <h2 className='text-xl'>City: {props.city} </h2>
            <h2 className='text-xl'> Age: {props.age} </h2>
            <button className=' mt-5  bg-emerald-600 text-white px-4 py-2 rounded font-medium'>Add Friend </button>
        </div>
    )
}
