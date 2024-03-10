import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import '../App.css';

interface BasicSettingsProps {
  setFormData: any;
  formData: any;
}

const BasicSettings: React.FC<BasicSettingsProps> = ({ setFormData,formData }) => {

  const initialFormData = {
    reportTitle: 's',
    reportName: '',
    itemsPerPage: '',
    enableCache: false,
    cellMaxWidth: '',
  };
  const [basicSettingsData, setBasicSettingsData] = React.useState<any>(initialFormData);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    // Update the state based on the form field
    setBasicSettingsData((prevData: any) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Use the collected data as needed
    console.log('Form Data:', basicSettingsData);

    // You can pass the data to the parent component using setFormData if required
    setFormData(basicSettingsData);
    setBasicSettingsData(initialFormData);
    
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Container className='basicsettings'>
          <h1>Report Setup - Basic Settings</h1>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label style={{ display: 'flex' }}>Report Title </Form.Label>
              <Form.Control
                name='reportTitle'
                required
                type="text"
                placeholder="Report Title"
                value={basicSettingsData.reportTitle}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label style={{ display: 'flex' }}>Report Name</Form.Label>
              <Form.Control
                name='reportName'
                required
                type="text"
                placeholder="Report Name"
                value={basicSettingsData.reportName}
                onChange={handleInputChange}
              />
            </Form.Group>
            <h3 style={{ fontWeight: 'lighter', display: "flex", marginTop: '10px' }}>Report Grid - Basic Settings</h3>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label style={{ display: 'flex' }}>Items per page</Form.Label>
            <Form.Control
              name='itemsPerPage'
              required
              placeholder="10,20,30"
              value={basicSettingsData.itemsPerPage}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group className="mb-3 " id="formGridCheckbox">
            <Form.Check
              type="checkbox"
              label="Enable to Store Request Result in the Cache"
              name="enableCache"
              checked={basicSettingsData.enableCache}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label style={{ display: 'flex' }}>Cell max width</Form.Label>
            <Form.Control
              name='cellMaxWidth'
              required
              placeholder=""
              value={basicSettingsData.cellMaxWidth}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Save
          </Button>
        </Container>
      </Form>
    </>
  );
};

export default BasicSettings;
