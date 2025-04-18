
//*******************************Props pass in the react component  ******************************************/


// import Card from "./components/Card"
// import { Footer } from "./components/Footer"
// import { Navbar } from "./components/Navbar"

// function App() {
// const user="Anand"

//   return (
//     <>
//     <Navbar />
// { /* props/data  pass in the Card Component  from the following method*/}
//     {/* <Card a='10' />  */}
//     <Card name='Anurag' />
//     <Card name={user} />
//     <Footer />
//   </>
//   )
// }
//  export default App


import React from 'react'
import { Card } from './components/Card'
 
export const App = () => {

  const user = [
    {
      "Name": "Aarav Mehta",
      "City": "Mumbai",
      "Age": 28,
      "Profession": "Software Engineer",
      "ProfilePhoto": "https://randomuser.me/api/portraits/men/45.jpg"
    },
    {
      "Name": "Nisha Verma",
      "City": "Delhi",
      "Age": 25,
      "Profession": "Graphic Designer",
      "ProfilePhoto": "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
      "Name": "Rahul Singh",
      "City": "Bangalore",
      "Age": 32,
      "Profession": "Product Manager",
      "ProfilePhoto": "https://randomuser.me/api/portraits/men/22.jpg"
    },
    {
      "Name": "Priya Sharma",
      "City": "Jaipur",
      "Age": 29,
      "Profession": "Marketing Executive",
      "ProfilePhoto": "https://randomuser.me/api/portraits/women/30.jpg"
    },
    {
      "Name": "Karan Patel",
      "City": "Ahmedabad",
      "Age": 35,
      "Profession": "Data Analyst",
      "ProfilePhoto": "https://randomuser.me/api/portraits/men/38.jpg"
    }
  ]

  user.forEach(() => {
    console.log("sdfddsf");

  })
  return (
    <>
      <div className='p-10 '>
        {/* <Card user='Anand' age='24' city='Jaunpur' /> */}
        {user.map(function (elem, idx) {
          return <Card key={idx} user={elem.Name} age={elem.Age} city={elem.City} photo={elem.ProfilePhoto} Profession={elem.Profession}/>
        })}


      </div>
    </>
  )
}
export default App
