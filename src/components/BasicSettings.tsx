import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import '../App.css';

interface BasicSettingsProps {
  setFormData: any;
  formData: any;
}

const BasicSettings: React.FC<BasicSettingsProps> = ({ setFormData, formData }) => {

  const initialFormData = {
    reportTitle: '',
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

    // e.preventDefault();
    setFormData((prevData: any) => ({
     ...prevData,
      BasicSettings: [basicSettingsData],
    }));
    console.log('Form Data:', basicSettingsData);

  };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();

  //   // Use the collected data as needed
  //   console.log('Form Data:', basicSettingsData);

  //   setFormData((prevData: any) => ({
  //     ...formData,
  //     BasicSettings: [...(prevData.BasicSettings || []), basicSettingsData],
  //   }));
  //   setBasicSettingsData(initialFormData);

  // };

  return (
    <>
      <Form >
        <Container className='basicsettings'>
          <h2>Report Setup - Basic Settings</h2>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label style={{ display: 'flex' }}> Title </Form.Label>
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
              <Form.Label style={{ display: 'flex' }}> Name</Form.Label>
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
            <Form.Select aria-label="Items per page"
              name="itemsPerPage"
              value={basicSettingsData.itemsPerPage}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                handleInputChange({
                  target: { name: e.target.name, value: e.target.value },
                } as React.ChangeEvent<HTMLInputElement>)
              }>
              <option >Select a Option</option>
              <option value={1}>One</option>
              <option value={2}>Two</option>
              <option value={3}>Three</option>
            </Form.Select>
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

          <Button variant="primary" >
            Save
          </Button>
        </Container>
      </Form>
    </>
  );
};

export default BasicSettings;
