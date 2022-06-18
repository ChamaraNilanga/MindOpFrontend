import React , {useEffect,useState} from "react";
import { Card } from "react-bootstrap";
import {Button} from "react-bootstrap";
import axios from "axios";
import Progressbar from "../Progressbar/Progressbar";
import "./Subjectcard.css";
import {Link} from "react-router-dom";

function Subjectcard ({courses , role , text}){
    const setModid = (id) => {
        console.log(id);
        localStorage.setItem('id',id);
        
    }
     return(
        <div className="overflow-auto">
        <div className="subject-card">
            {courses.map(course=>{
                
                return(
                    
                    <Card style={{ width: '12rem' , height:'12rem'}} >
                    <Card.Body>
                    <Link to="/singlecourse" state={{ id: course.modid }}><Card.Title className="title" key={course.modid} onClick={()=>{setModid(course.modid)}}>{course.modname}</Card.Title></Link>
                    <Card.Text className="text" key={course.modid}>
                    {course.descrip}
                    </Card.Text>
                    
                    <Card.Text className="text" key={course.modid}>
                    Rs:{course.price}
                    </Card.Text>
                    
                    </Card.Body>
                    <Card.Footer>
                        {role==='s' ? <div><Progressbar progress={course.progress}/></div> : role==='c' ? <></>:<Button className="btn" variant="warning" key={course.modid}>{text}</Button>}
                        {/* <Button className="btn" variant="warning" key={course.modid}>Enroll</Button> */}
                    </Card.Footer>
                    </Card>
                    
                )
            })}
        </div>
        </div>
       
        
    )
}

export default Subjectcard;