import React from 'react'
import { Container, OverlayTrigger, Tooltip, Col, Row, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


const SourceForms = () => {
  const [isFormSubmitted, setFormSubmitted] = React.useState(false);
  

  const customRenderTooltip = (content:string) => (props:any) => (
    <Tooltip id="button-tooltip" {...props}>
      {content}
    </Tooltip>
  );

  const handleSubmit = (event: any) => {
    // Your form submission logic goes here
    // For demonstration purposes, we'll just prevent the default form submission
    event.preventDefault();

    // Set the state to true to indicate that the form is submitted
    setFormSubmitted(true);
  };



  return (
    <Form onSubmit={handleSubmit}>
      <Container className='border sourceforms'>
        <h1>Report Setup - Source Forms</h1>
        <p>A report can aggregate Submission Data submitted against one or more Forms. Many times. Reports aggregate data from multiple Forms
          which allow a singular Report IJI to visualize connected data stemming from multiple Form Sources.</p>


        <Form.Label htmlFor="basic-url" style={{ display: 'flex' }}>
          Choose from the Forms within this Project:
          <OverlayTrigger
            placement="right"
            delay={{ show: 250, hide: 400 }}
            overlay={customRenderTooltip('Choose Forms')}
          >
            <i className="bi bi-patch-question"></i>
          </OverlayTrigger>
          <span style={{ color: 'red' }}>*</span>
        </Form.Label>
        <Form.Control required id="basic-url" aria-describedby="basic-addon3" className='mb-3' />

        <Form.Label htmlFor="basic-url" style={{ display: 'flex' }}>
          Form Connections :
          <OverlayTrigger
            placement="right"
            delay={{ show: 250, hide: 400 }}
            overlay={customRenderTooltip('Choose Forms Connections')}
          >
            <i className="bi bi-patch-question"></i>
          </OverlayTrigger>
        </Form.Label>


        <Container className='border mb-2 innerform'>


          <div style={{ display: 'flex' }}>

            <Form.Label as="legend" style={{ marginLeft: '10px', fontFamily: 'TimesNewroman', fontWeight: 'bold' }}>
              Base Form
            </Form.Label>
            <Form.Label as="legend" style={{ marginLeft: '10px', fontFamily: 'TimesNewroman', fontWeight: 'bold' }}>
              Joining Form
            </Form.Label>
          </div>
          <hr style={{ border: '1px solid #ddd', margin: '10px 0' }} />
          <Row style={{
            marginTop: '20px'
          }}>

            <Col style={{ width: '50%', fontSize: '20px', fontFamily: 'TimesNewroman' }}>
              <Form.Label as="legend" className='baseformlabel1'>
                Base Form
                <OverlayTrigger
                  placement="right"
                  delay={{ show: 250, hide: 400 }}
                  overlay={customRenderTooltip('Choose Base Forms')}
                >

                  <i className="bi bi-patch-question"></i>
                </OverlayTrigger>
                <span style={{ color: 'red' }}>*</span>
              </Form.Label>
              <Form.Control required placeholder="Base Form" style={{ marginLeft: '10px', width: '90%' }} />
              <Form.Label className='baseformlabel2'>Connecting fields of base Form</Form.Label><Form.Control required style={{ marginLeft: '10px', width: '90%' }} placeholder="Connecting Fields" />
              <Form.Label className='baseformlabel3' >Base form path to connecting value</Form.Label><Form.Control required style={{ marginLeft: '10px', width: '90%' }} placeholder="Path" />
            </Col>
            <Col style={{ width: '50%', fontSize: '20px', marginTop: '7px' }}>
              <Form.Label className='joiningformlabel1' >Joining Form</Form.Label><Form.Control required style={{ marginLeft: '10px', width: '90%' }} placeholder="Joining Form " />
              <Form.Label className='joiningformlabel2'>Connecting fields of Joining Form</Form.Label><Form.Control required style={{ marginLeft: '10px', width: '90%' }} placeholder="Connecting Field" />
              <Form.Label className='joiningformlabel3'>Joining form path to connecting value</Form.Label><Form.Control required style={{ marginLeft: '10px', width: '90%' }} placeholder="Path" />
            </Col>
          </Row>
          <Button variant="success" type="submit" style={{ margin: '10px', fontFamily: 'TimesNewroman' }}>
            Save
          </Button>
          <Button variant="danger" type="submit" style={{ margin: '10px', fontFamily: 'TimesNewroman' }}>
            Cancel
          </Button>

        </Container>
      </Container>
      {isFormSubmitted && (
        <div style={{ marginTop: '20px' }}>
          <p>Form Submitted Successfully!</p>

        </div>
      )}
    </Form>
  )
}

export default SourceForms

