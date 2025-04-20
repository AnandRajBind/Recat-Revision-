import axios from 'axios'
import { useState } from 'react'
// import {  useEffect } from 'react'

function App() {

  const [data, setData] = useState([])

  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list')
    //  const data= response.data

    setData(response.data)
    console.log(data);

    // console.log(data[5].download_url);
  }

// if we want to automatically load the data without clicking the button then use the useEffect hook and call the getData function inside it

  // useEffect(()=>{
  //   getData()
  // },[])

  return (
    <>
      <div className='p-10 '>
        <h1 className='text-3xl font-bold text-center text-white '>Click the Get Data Button And show the all data </h1>
        <button onClick={getData} className="bg-teal-700 text-white font-semibold text-2xl px-6 py-3 rounded active:scale-90 ">GET DATA</button>
        <div className="p-5 bg-gray-950 text-white mt-5">Anand</div>
        {data.map((elem, idx) => {
          return <div key={idx} className='bg-gray-100 flex text-black item-center justify-between w-full px-full py-6 mb-3 px-5'>
            <img className='h-40' src={elem.download_url} alt="Image Not Found" />
            <h1 className='text-2xl flex p-15'>{elem.author}</h1>
          </div>
        })}
      </div>
    </>
  )
}

export default App;
