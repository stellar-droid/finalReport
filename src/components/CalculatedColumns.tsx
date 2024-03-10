import React from 'react'
import { Col, Container, Form, Row, InputGroup, OverlayTrigger, Tooltip, Button, Dropdown, DropdownButton } from 'react-bootstrap';
import Select from "react-select";



interface CalculatedColumnsProps {
  setFormData: any;
  formData: any;
}


const CalculatedColumns: React.FC<CalculatedColumnsProps> = ({ setFormData, formData }) => {

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

  const initialFormData = {
    columnTitle: '',
    columnKey: '',
    operator: '',
  };

  const [calculatedColumnsData, setCalculatedColumnsData] = React.useState<any>(initialFormData);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | { target:any }) => {
    const { name, value, type, checked } = e.target;

    // If the element is a Select input, handle it separately
    if (type === 'select-one') {
      setCalculatedColumnsData((prevData: any) => ({
        ...prevData,
        [name]: value,
      }));
    } else {
      // Update the state based on the form field
      setCalculatedColumnsData((prevData: any) => ({
        ...prevData,
        [name]: type === 'checkbox' ? checked : value,
      }));
    };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Use the collected data as needed
    console.log('Form Data:', calculatedColumnsData);

    // You can pass the data to the parent component using setFormData if required
    setFormData(calculatedColumnsData);
    setCalculatedColumnsData(initialFormData);

  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
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
                  <Form.Control name='columnTitle' type='text' value={calculatedColumnsData.columnTitle} onChange={handleInputChange} required></Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Label style={{ display: 'flex' }}>Column Key</Form.Label>
                <Form.Control name='columnKey' type='text' value={calculatedColumnsData.columnKey} onChange={handleInputChange} required />
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
                <Select
                   name='operator'
                   options={options}
                   isClearable
                   onChange={(selectedOption) => handleInputChange({
                     target: {
                       name: 'operator',
                       value: selectedOption ? selectedOption.value : null,
                       type: 'select-one',
                     },
                   })}
                   required />
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
        <Button style={{ display: 'flex', position: 'relative', left: '10px', top: '10px' }}>
          <i className="bi bi-plus-circle"></i>
          Add Column
        </Button>

      </Form>
    </>
  )
}

export default CalculatedColumns