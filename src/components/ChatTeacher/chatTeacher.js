import React, { Component, useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'
import { Link, useSearchParams } from 'react-router-dom'
import Navbar from "../Navbar/Navbar";
import './chatteacher.css'
import axios from "axios";
import Model from './model';




export default function ChatTeacher() {

    const [message,setMessage] = useState([]);
   

    

    function getMessages(){
      axios.get(`http://localhost:8052/message/chat/2`).then((res)=>{
          console.log(res);
          setMessage(res.data);
      }).catch((err)=>{
          alert(err.message);
      })
  }
  useEffect(()=>{
    getMessages();
},[])




const sendreply=async ()=>{
  if(window.prompt('Send a reply')){
      await axios.post(`http://localhost:8052/message/4`)
      .then((res)=>{
          console.log(res.data);
          alert(res.data);
          getMessages();
      })
  }
 
}

  return (
    <div>
        <Navbar/>

        <div className='teacherchatbox'>

   
      <table className="table">
               <thead>
                 <tr>
                   <th>Sender</th>
                   <th scope="col">Message</th>
                   <th scope="col">Time</th>
                   <th scope="col"> </th>
                  </tr>
               </thead> 
               
      <tbody>
        {message.map(chat=>{
          return(
            <Model
              chatid={chat.chatid}
              senderid={chat.senderid}
              messagebody={chat.messagebody}
              chattime={chat.chattime}
              receiverid={chat.receiverid}
              onfresh={getMessages}
              />
          )

        })}
              
      </tbody>
    </table>
  </div>
 
  </div>

  )
 
}