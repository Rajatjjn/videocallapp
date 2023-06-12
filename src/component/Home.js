import React, { useState } from 'react'
import "../App.css"
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const[roomID,setroomId]=useState("");

    const navigate=useNavigate()
    function HandleJoin(){
        if(roomID){
             navigate(`/room/${roomID}`)
    }
     
    }
  return (
    <div className="App">
    <h2><i>Enter Your Name Or Id To Start Meeting</i></h2>
    <input className='input' type="text" placeholder='ENTER ROOM ID' value={roomID} onChange={(e)=>setroomId(e.target.value)}/>
    <button className="button" onClick={HandleJoin}>JOIN</button>
      
    </div>
  )
}
