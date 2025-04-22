import Footer from "./components/Footer"
import { Header } from "./components/Header"
import Section from "./components/Section"
 import {DataContext} from "./context/UserContext" 
import { useContext } from "react"

function App() {

  // jis bhi component ko data chahiye hota hai wo us component ke andar useContext ko use karke data le sakta hai
const data =useContext(DataContext)
console.log(data)
  return (
    <>
  <h1> This is App {data.username}</h1>
  <Header />
  <Footer />
  <Section />
    </>
  )
}
export default App
