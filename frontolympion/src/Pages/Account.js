import React from "react";
import "../Css/Account.css";


function Account() {
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
      <div class="col-12 col-sm-12 col-md-6 col-lg-6 my-auto account-col-1">
        <p class="title-profile">Your profile</p>
        <p class="info-profile">First Name : </p>
        <p class="info-profile">Last Name : </p>
        <p class="info-profile">Email : </p>
        <p class="info-profile">Olympions : </p>
      </div>

      <div class="col-12 col-sm-12 col-md-6 col-lg-6 my-auto green-bloc">
      </div>
    </div>


    </div>



  </>
  );
}

export default Account;









