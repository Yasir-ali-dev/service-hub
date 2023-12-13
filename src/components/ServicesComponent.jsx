import React from 'react';
import  {Card, Container, Stack } from 'react-bootstrap';


const ServicesComponent = ({ServiceArray}) => {
    console.log(ServiceArray);
  return (
    <Container>
         <Stack className='d-flex flex-column gap-2 py-1' >
             
            {  ServiceArray.map((_,index)=>{
              return (
                  <Stack className='py-3'>
                    <h1 stye={{textTransform:"uppercase", color:"#4bb543"}}>{_.job}</h1>
                    <Stack className='d-flex flex-row gap-2 py-1' >
                    {
                        _.service.map((e,index)=>{
                            return(
                                <Card style={{ width: '18rem',  }} key={index}>
                                <div style={{display: "flex",justifyContent: "center", paddingTop:"1em"}}>
                                    <Card.Img variant="top" src={`${_.images[index]}`} 
                                    style={{width:"170px", height:"150px"}}/>
                                </div>    
                                <Card.Body>
                                    <Card.Title style={{textAlign:"center"}}>{e}</Card.Title>
                                </Card.Body>

                                </Card>
                            )
                        })
                    }
                    </Stack>
{/*                     
                    <Card style={{ width: '18rem',  }} key={index}>
                      <div style={{display: "flex",justifyContent: "center", paddingTop:"1em"}}>
                          <Card.Img variant="top" src={`${[index]}`} 
                          style={{width:"170px", height:"150px"}}/>
                      </div>    
                      <Card.Body>
                          <Card.Title style={{textAlign:"center"}}>{_}</Card.Title>
                      </Card.Body>
                      <Card.Footer>

                      <ButtonGroup className='d-flex justify-content-center'>
                              <Button variant="outline-primary" size='sm'>BUY NOW</Button>
                          </ButtonGroup>
                      </Card.Footer>
                      </Card> */}
                  </Stack>
              )
          })
          }
          </Stack>

    </Container>
  )
}

export default ServicesComponent
 