import { ButtonGroup, Col, Container, Row, Stack } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaPhoneAlt,FaAddressBook } from "react-icons/fa";

const images = ["p1.jpg","p2.png","p3.jpg","p4.jpg"];

function Profile() {
  return (
    <Container>
      <Row className='py-5 my-5'>
        <Col className='col-4'>
            <Card style={{ width: '18rem' }}>
            <div style={{display: "flex",justifyContent: "center", paddingTop:"1em"}}>
                <Card.Img variant="top" src="/404-man.png.webp" 
                style={{borderRadius:"50%",width:"50%"}}/>
            </div>    
            <Card.Body>
                <Card.Title style={{textAlign:"center"}}>John Doe</Card.Title>
                <Card.Text style={{textAlign:"center"}}>
                   Expert Plumber 
                </Card.Text>
                <Card.Text style={{textAlign:"center"}}>
                    <FaPhoneAlt/> 0311-2172777
                </Card.Text>

                <Card.Text style={{textAlign:"center"}}>
                    <FaAddressBook/> Neem ki Charhi, Sukkur 
                </Card.Text>
                

                <ButtonGroup className='d-flex justify-content-center'>
                    <Button variant="primary" size='sm'>CONTACT ME</Button>
                    <Button variant="outline-primary" size='sm'>CALL NOW</Button>
                </ButtonGroup>
            </Card.Body>
            </Card>
        </Col>
        <Col className='col-8' >
            <Stack className='d-flex flex-row gap-2' >
            
              {  ['Pipe Installation and Repair',"Fixture Installation","Reading Blueprints and Specifications","Drainage Systems"].map((_,index)=>{
                return (
                    <>
                        <Card style={{ width: '18rem',  }} key={index}>
                        <div style={{display: "flex",justifyContent: "center", paddingTop:"1em"}}>
                            <Card.Img variant="top" src={`${images[index]}`} 
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
                        </Card>
                    </>
                )
            })
            }
            </Stack>
            <Stack  className='py-3'>
                <Button className='outline' >Add Service</Button>
            </Stack>
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;