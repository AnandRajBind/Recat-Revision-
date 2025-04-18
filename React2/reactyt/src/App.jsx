// *****************************************************useState***********************************************************************************
/*

import React, { useState } from 'react';
// hooks - special type of function.that are help us to optimization, side effects, and state management, life cu.
// useState - hook to manage state in functional components.and  hooks are used to lifecycle methods in functional components.
// useEffect - hook to manage side effects in functional components.
function App() {
  // let user = "Anand";// JSX variable



  // const changeUser = () => {
  //   console.log(user);
  //   user = "Anurag"
  //   console.log(user);
  // }


  const [user, setuser] = useState("Anand")
  const [num, setNum] = useState(0);
  const changeUser = () => {
    setuser("Anurag")
  }
  return (
    <div>
      <h1 className='text-2xl bg-pink-700'>Username is  {user}</h1>
      <button onClick={changeUser}>Change User </button>

      <h3>Number is {num}</h3>
      <button onClick={() => setNum(num + 10)}>Increment</button>
      <button onClick={() => setNum(num - 10)}>Decrement</button>
<h2>hello </h2>
    </div>)
}

export default App;
*/

/*************************************************************form handling ********************************************** */

// import React from 'react'

// export const App = () => {
//   const submitHandler = (e) => {
//     e.preventDefault();
//     console.log("Form submitted");

//   }

//   return (
//     <div>
//       <form onSubmit={(e) => {
//         submitHandler(e);
//       }}>

//         <h1>
//           <input 
//           className='px-4 color-red-500 bg-white  rounded py-3 text-2xl m-5' type='text' placeholder='Enter Your Name ' />
//         </h1>
//         <button className='px-4 py-3 m-5 text-white text-xl font-semibold bg-emerald-500 rounded border-2 mt-10 '>Submit</button>
//       </form>
//     </div>
//   )
// }
// export default App;


/*************************************************************Two Way Binding ********************************************** */

import React from 'react'
import { useState } from 'react';


export const App = () => {
  const [userName, setUsername] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(userName);
    
    setUsername(" ")
  }
  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e);

      }}>
        <h1>
          <input
            value={userName}

            onChange={(e) => { // two way binding means when we type in input field then it will update the state
              setUsername(e.target.value);
            }}
            className='px-4 color-red-500 bg-white 
             rounded py-3 text-2xl m-5' type='text'
            placeholder='Enter Your Name ' />
        </h1>
        <button className='px-4 py-3 m-5 text-white text-xl font-semibold bg-emerald-500 rounded border-2 mt-10 '>Submit</button>
      </form>
    </div>
  )
}
export default App;