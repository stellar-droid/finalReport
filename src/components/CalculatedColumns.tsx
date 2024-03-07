import React from 'react'
import { Col, Container, Form, Row, InputGroup, OverlayTrigger, Tooltip, Button, Dropdown, DropdownButton } from 'react-bootstrap';
import Select from "react-select";

const CalculatedColumns = () => {

  const customRenderTooltip = (content: string) => (props: any) => (
    <Tooltip id="button-tooltip" {...props}>
      {content}
    </Tooltip>
  );

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]



  return (
    <>
      <Form>
        <Container>
          <h1>Report Setup - Calculated Columns</h1>
          <p>Here you can add additional columns to the Report Grid that do not exist in the the Data Source Forms. These columns' value(s)
            will be calculated based on the fields of the Data Source Forms.</p>

          <Container className='border  bg-light'>
            <div style={{ display: 'flex' }}>

              <Form.Label as="legend" style={{ marginLeft: '10px', fontFamily: 'TimesNewroman', fontWeight: 'bold' }}>
                Base Form
              </Form.Label>

              <Form.Label as="legend" style={{ marginLeft: '10px', fontFamily: 'TimesNewroman', fontWeight: 'bold' }}>
                Joining Form
              </Form.Label>

            </div>

            <hr style={{ border: '1px solid #ddd', margin: '10px 0' }} />
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label style={{ display: 'flex' }}>Column Title <span style={{ color: 'red' }}>*</span></Form.Label>
                  <Form.Control required></Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Label style={{ display: 'flex' }}>Column Key</Form.Label>
                <Form.Control required/> 
              </Col>


            </Row>
            <Col>
              <Form.Group>
                <Form.Label style={{ display: 'flex' }}>Opertaor
                  <OverlayTrigger
                    placement="right"
                    delay={{ show: 250, hide: 400 }}
                    overlay={customRenderTooltip('Choose Operator')}
                  >
                    <i className="bi bi-patch-question"></i>
                  </OverlayTrigger>
                  <span style={{ color: 'red' }}>*</span></Form.Label>
                <Select options={options} isClearable required/>
              </Form.Group>
            </Col>
            <Button variant="success" type="submit" style={{ margin: '10px', fontFamily: 'TimesNewroman' }}>
              Save
            </Button>
            <Button variant="danger" type="submit" style={{ margin: '10px', fontFamily: 'TimesNewroman' }}>
              Cancel
            </Button>

          </Container>
        </Container>
            <Button style={{display:'flex',position:'relative',left:'10px',top:'10px'}}>
            <i className="bi bi-plus-circle"></i> 
              Add Column 
            </Button>

      </Form>
    </>
  )
}

export default CalculatedColumns