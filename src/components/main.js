import React from 'react';
import Image from 'react-bootstrap/Image'
import {} from 'react-bootstrap'
import img from '../components/images/Img-background.jpg'
import '../components/main.css'

const Main = () => {
    return (
      <main class='strcImg'>
         <img src={img} className="strcImg bsPrefix" alt="mainImg"></img>
         
      </main>
    );
  };
  
  export default Main;