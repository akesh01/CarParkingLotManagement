import React from 'react'
import {useState} from 'react';
import './InputFormField.css';
import { useNavigate } from "react-router-dom";
import CarRegistration from './CarRegistration';

interface Props {
  spaces:string,
  setSpaces:React.Dispatch<React.SetStateAction<string>>
} 
const InputFormField = ({spaces,setSpaces}:Props) => {
    const [Nospace,setNospace] = useState("");
    const navigate = useNavigate();
    
    const HandleSubmit =(e:React.FormEvent)=> {
        setSpaces(Nospace);
        setNospace("");
        e.preventDefault();
        <CarRegistration spaces={spaces} setSpaces={setSpaces}/>
        }
  return (
         <div className='parking-create'>
        <form onSubmit={(e)=> HandleSubmit(e)}>
        <h2>Enter Number of Spaces in the Parking Lot</h2>
        <input id='parking-create-text-input' type="text"  value={Nospace}  placeholder='Enter a number' onChange={(e)=> setNospace(e.target.value)}/>
         <button id="parking-create-submit-button" type="submit" onClick={HandleSubmit}>Go</button>
        </form>
    </div>
  )
}

export default InputFormField;