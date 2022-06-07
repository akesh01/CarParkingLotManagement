import React, { useState } from 'react'
import CarRegistration from '../components/CarRegistration';
import InputFormField from '../components/InputFormField';

const ParkingLotCreation = () => {
  const [Nospaces,setNospaces] = useState("");
  return (
    <div >
     <InputFormField spaces={Nospaces} setSpaces={setNospaces}/>
     <CarRegistration spaces={Nospaces} setSpaces={setNospaces}/>
    </div>
  )
}

export default ParkingLotCreation 