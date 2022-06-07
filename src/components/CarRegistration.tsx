import React, { useState } from 'react'
import SlotCards from './SlotCards';
import './InputFormField';

interface Props {
    spaces:string,
    setSpaces:React.Dispatch<React.SetStateAction<string>>
  } 

const CarRegistration = ({spaces,setSpaces}:Props) => {
    const [Regno,SetRegno] = useState("");
    const [Time,setTime] = useState("")
    const Num = Number(spaces)
    let rows=[];
   if( Num > 100) {
        alert("Enter a number less than 100")
   }
   else {
    for(var i=0;i<Num;i++ ){
            rows.push(<SlotCards />);
    }
  }
   

    function MakeRegistration(e:React.FormEvent<HTMLFormElement>) {
                  e.preventDefault();
                 
    }
    {(rows.map(row => {
      console.log(row);
      
}))}

  return (
    <div>
       <form onSubmit={(e)=> MakeRegistration(e)}>
           <h2>Enter your Car Details</h2>
           <div className='Car_details'>
           <input type="text" className='Car_no' placeholder='Enter Vehicle Registration Number' onChange={(e)=> {SetRegno(e.target.value)}} />
           <input type="time" className='Car_no' placeholder='Enter Arrival Time' onChange={(e)=> {setTime(e.target.value)}} />
           </div>
           <button type="submit" className='Registration_button'>Submit</button>
       </form>
        <div className='Box__content'>
            {rows}
        </div>
  
        
    </div>
  )
}

export default CarRegistration;