import React from 'react'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const images=["ac service.webp","carpenter.webp","furniture.webp","generator.webp","painter.webp","mason.webp"];
const services=["AC Technician","Carpenter","Carpenter","Painter","Generator","Mason"];


const Services = () => {
  return (
    <>

    <Container>
      <h1 style={{textAlign:"center"}} className=' pb-5'>OUR {" "} 
      <span style={{color:"#4bb543"}} >SERVICES</span> </h1>
       <div className='d-flex flex-row justify-content-center py-5'>
       {
           images.map((_,index)=>{
               return(
                <Link to={`/services`}>
                  <div key={index} className='mx-2'>
                    <img src={_} width={"80%"} alt='_image'></img>  
                  </div>
                </Link>
            )
        })
        } 
        </div>
    </Container>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 50 1440 320"><path fill="#4bb543" fill-opacity="1" d="M0,160L15,170.7C30,181,60,203,90,202.7C120,203,150,181,180,186.7C210,192,240,224,270,245.3C300,267,330,277,360,240C390,203,420,117,450,106.7C480,96,510,160,540,165.3C570,171,600,117,630,90.7C660,64,690,64,720,80C750,96,780,128,810,165.3C840,203,870,245,900,261.3C930,277,960,267,990,229.3C1020,192,1050,128,1080,106.7C1110,85,1140,107,1170,138.7C1200,171,1230,213,1260,229.3C1290,245,1320,235,1350,218.7C1380,203,1410,181,1425,170.7L1440,160L1440,0L1425,0C1410,0,1380,0,1350,0C1320,0,1290,0,1260,0C1230,0,1200,0,1170,0C1140,0,1110,0,1080,0C1050,0,1020,0,990,0C960,0,930,0,900,0C870,0,840,0,810,0C780,0,750,0,720,0C690,0,660,0,630,0C600,0,570,0,540,0C510,0,480,0,450,0C420,0,390,0,360,0C330,0,300,0,270,0C240,0,210,0,180,0C150,0,120,0,90,0C60,0,30,0,15,0L0,0Z"></path></svg>
    </>
  )
}

export default Services;
