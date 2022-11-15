import React from 'react'
import { useState ,useEffect} from 'react'

import usersAPI from '../service/usersAPI';


export default function ServiceTransport() {

const [details,setDetails] = useState([]);



const refreshTaches = async () => {
  try {
      const data = await usersAPI.findOne(2);
      setDetails(data)
      console.log(data);
  } catch (error) {
      console.log(error)
  }
}

useEffect(() => {
  refreshTaches()
}, [])





  return (
    <div>


  
     hello word
    </div>

  )
}
