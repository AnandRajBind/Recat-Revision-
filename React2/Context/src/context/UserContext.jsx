import React from 'react'
import { createContext } from 'react'



export const DataContext = createContext()
// children pass kiya gaya hai because yeh parent se child ko data pass karne ke liye hai.
const UserContext = ({ children }) => {

    //const username = 'Anand' // yeh data humne pass kiya hai jo child ko milega.
    const userData = {
        username: 'Anand',
        age: 23,
        city: "Jaunpur"
    }

    // console.log(props.children);
    return (
        <div>
            {/* < DataContext.Provider value={username}> */}
            < DataContext.Provider value={userData}> 
                {children}
            </DataContext.Provider>
        </div>
    )
}
export default UserContext
