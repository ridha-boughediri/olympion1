import React, { useEffect, useState } from "react";
import "../Css/Account.css";
import usersAPI from '../service/usersAPI';


function Account() {

  const [details,setDetails] = useState([]);


  const refreshTaches = async () => {
    try {
        const data = await usersAPI.findAll();
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
  <>
  <div class="container background-2">
    <div class="row">
      <div class="col-12 my-auto account-title-background">
        <p>Welcome on your account</p>
        <p class="texte">It's a good start to become a green activist !</p>
      </div>
    </div>

    <div class="row account-row">
      <div class="col-6 col-sm-12 col-md-6 col-lg-6 my-auto account-col-1">
        <p class="title-profile">Your profile</p>
        <p class="info-profile">First Name : </p>
        <p class="info-profile">Last Name : </p>
        <p class="info-profile">Email : </p>
      </div>

      <div class="col-6 col-sm-12 col-md-6 col-lg-6 my-auto green-bloc">
      </div>
    </div>


    </div>



  </>
  );
}

export default Account;









