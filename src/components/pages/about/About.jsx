import React from 'react'
import Nav from '../../common/navbar/Nav'
import { starter} from "../../../assets/images/image"
import './about.css'

const About = () => {
  return (
    <div className=''>
     <Nav/> 
     <div class="starter">
        <img src={starter} alt="starter" id='starter-img'/>
        <div class="text">
            <h1>Who We Are</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis 
              rem inventore totam iure. Inventore, 
              loreeaque!</p>
        </div>
    </div>
    </div>
  )
}

export default About
