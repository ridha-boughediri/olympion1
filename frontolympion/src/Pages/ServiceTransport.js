import React from 'react'
import { useState ,useEffect} from 'react'

import walletsAPI from '../service/walletsAPI';


export default function ServiceTransport() {

const [wallets,setwallets] = useState([]);



const refreshTaches = async () => {
  try {
      const data = await walletsAPI.findAll();
      setwallets(data)
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
      
      <table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Balance</th>
      <th scope="col">date</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>

      
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
    </div>

  )
}
