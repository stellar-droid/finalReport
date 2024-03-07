import React from 'react'
import { Container,Row,Col, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import '../App.css';
const BasicSettings = () => {
  return (
    <>
        <Form >
            <Container className='basicsettings'>
        <h1>Report Setup - Basic Settings</h1>
        <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label style={{display:'flex'}}>Report Title </Form.Label>
          <Form.Control type="text" placeholder="Report Title" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label style={{display:'flex'}}>Report Name</Form.Label>
          <Form.Control type="text" placeholder="Report Name" />
        </Form.Group>
        <h3 style={{fontWeight:'lighter',display:"flex",marginTop:'10px'}}>Report Grid - Basic Settings</h3>

      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label style={{display:'flex'}}>Items per page</Form.Label>
        <Form.Control placeholder="10,20,30" />
      </Form.Group>

      

     

      <Form.Group className="mb-3 " id="formGridCheckbox">
        <Form.Check type="checkbox" label="Enable to Store Request Result in the Cache" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label style={{display:'flex'}}>Cell max width</Form.Label>
        <Form.Control placeholder="" />
      </Form.Group>
      {/* <Button variant="primary" type="submit">
        Submit
      </Button> */}
            </Container>

        </Form>
    
    </>
  )
}

export default BasicSettings