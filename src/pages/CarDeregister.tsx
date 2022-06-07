import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './CarDeregister.css' ;
const CarDeregister = () => {
  const [CurrentTime,setCurrentTime] = useState(0)
  const [Payment,setPayment] = useState(false);
  const navigate = useNavigate();
    let today = new Date();
    let time = today.getHours() + ":" +today.getMinutes() ;
   // console.log(time)
      
    const RegistrationDetails  = {
          car_registration : "KA19EE5562",
          Charge: "150",

    }
          const GotoHomePage = ()=> {
                navigate('/')
          }

          const MakePayment =()=> {
            fetch("https://httpstat.us/200", {
              method: 'POST',
              headers: new Headers({
                 'Accept': 'application/json',
                 'Content-Type': 'application/json'
              }),
               body: JSON.stringify(RegistrationDetails)
          })
          .then(response => response.json())
          .catch(error => {
             console.error(error);
             console.log('Something went wrong, please try again later.');
            
     });
     alert("Payment Done");
     navigate('/');
   }
  
  return (
    <div>
      <h2>Total Parking Charges</h2>
      <br/>
      <br/>
      <h3>Total Amount to be paid:{}</h3>
        <button className='payment' type='submit' onClick={MakePayment}>Make Payment</button>
        <br/>
        <br/>
        <br/>
        <button onClick={GotoHomePage}>Go Back</button>
    
    </div>
  )

  }
export default CarDeregister