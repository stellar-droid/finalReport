import React, { useState } from 'react'
import { Col, Container, Form, OverlayTrigger, Row, Tooltip, Table, Button } from 'react-bootstrap'
import Select from "react-select";

interface AggregationProps {
  setFormData: any;
  formData: any;
}

const Aggregation: React.FC<AggregationProps> = ({ setFormData, formData }) => {

  const customRenderTooltip = (content: any) => (props: any) => (
    <Tooltip id="button-tooltip" {...props}>
      {content}
    </Tooltip>
  );


  const options = [
    { value: 'email@email.com', label: 'Email' },
    { value: 'name', label: 'Name' },
    { value: 'address', label: 'Address' }
  ]

  const options1 = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  const [inputFields, setInputFields] = useState([{ aggriField: "" }]);

  const initialFormData = {
    aggriField: "",
    operator: "",
    columnKey: '',
    columnTitle: ''
  }
  const [aggregationData, setAggregationData] = React.useState<any>(initialFormData);





  const addInputField = () => {
    setInputFields([...inputFields, { aggriField: "" }]);
  };

  const removeInputField = (index: number) => {
    const updatedInputFields = inputFields.filter((_, i) => i !== index);
    setInputFields(updatedInputFields);
  };


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | { target: any }) => {
    const { name, value, type, checked } = e.target;
    console.log('Input Change:', { name, value, type });
    if (type === 'select-one') {
      setAggregationData((prevData: any) => ({
        ...prevData,
        [name]: value,
      }));
    } else {
      // Update the state based on the form field
      setAggregationData((prevData: any) => ({
        ...prevData,
        [name]: type === 'checkbox' ? checked : value,
      }));
      console.log('FormData', aggregationData);

      setFormData((prevData: any) => ({
        ...prevData,
        Aggregation: [aggregationData],
      }));
    };

  }

  return (
    <>
      <Form>
        <Container>
          <h1>Report Setup - Aggregated Columns</h1>
          <p style={{ display: "flex", textAlign: "left", margin: "15px" }}>You can create an aggregated report that groups the selected Forms' submissions by one or several fields e.g. department ID or employee It. Using the Ul select the fields that will be used as criteria for the grouping. Then, add columns to your Reporting Grid that will be calculated per group based on the existing selected Forms fields or the Grid Calculated Extra Fields.</p>
          <Form.Group>
            <Form.Label style={{ display: 'flex', position: 'relative', left: '15px' }}>Fields to group by
              <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 400 }}
                overlay={customRenderTooltip('Choose Fields to group by')}
              >
                <i className="bi bi-patch-question"></i>
              </OverlayTrigger>
            </Form.Label>
            <Container style={{ padding: '10px' }}>


              <Table bordered hover>
                <thead>
                  {inputFields.map((field, index) => (
                    <tr >
                      <th className='col-11'>
                        <Select
                           name='aggriField' options={options} isClearable isSearchable required
                          onChange={(selectedOption) => handleInputChange({
                            target: {
                              name: 'aggriField',
                              value: selectedOption ? selectedOption.value : null,
                              type: 'select-one',
                            },
                          })}
                          />
                      </th>
                      {inputFields.length > 1 &&
                        <th>
                          <i className="bi bi-x-circle-fill btn" onClick={() => removeInputField(index)} style={{ marginLeft: '10px', position: 'relative', top: '5px' }}></i>
                        </th>
                      }

                    </tr>
                  ))}
                </thead>
                <tbody>
                  <tr>
                    <td colSpan={5}>
                      <Button style={{ display: 'flex', }} onClick={addInputField}>
                        <i className="bi bi-plus-circle"></i>
                        Add Column
                      </Button>
                    </td>
                  </tr>

                </tbody>
              </Table>




            </Container>
          </Form.Group>
        </Container>

        <Container>
          <Form.Label style={{ display: 'flex', position: 'relative', left: '15px' }}>Calculated Aggregation Columns
            <OverlayTrigger
              placement="right"
              delay={{ show: 250, hide: 400 }}
              overlay={customRenderTooltip('Calculated Aggregation Columns')}
            >
              <i className="bi bi-patch-question"></i>
            </OverlayTrigger>
          </Form.Label>

          <Container className='border  bg-light'>
            <div style={{ display: 'flex' }}>

              <Form.Label as="legend" style={{ marginLeft: '10px', fontFamily: 'TimesNewroman', fontWeight: 'bold' }}>
                Column Title
              </Form.Label>

              <Form.Label as="legend" style={{ marginLeft: '10px', fontFamily: 'TimesNewroman', fontWeight: 'bold' }}>
                Operator
              </Form.Label>

            </div>

            <hr style={{ border: '1px solid #ddd', margin: '10px 0' }} />
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label style={{ display: 'flex' }}>Column Title <span style={{ color: 'red' }}>*</span></Form.Label>
                  <Form.Control
                    name='columnTitle'
                    required
                    type="text"
                    placeholder="Column Title"
                    value={aggregationData.columnTitle}
                    onChange={handleInputChange}>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Label style={{ display: 'flex' }}>Column Key</Form.Label>
                <Form.Control
                  name='columnKey'
                  required
                  type="text"
                  placeholder="Column Key"
                  value={aggregationData.columnKey}
                  onChange={handleInputChange}
                />
              </Col>


            </Row>
            <Col>
              <Form.Group>
                <Form.Label style={{ display: 'flex' }}>Operator
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
                  options={options1}
                  isClearable
                  onChange={(selectedOption) => handleInputChange({
                    target: {
                      name: 'operator',
                      value: selectedOption ? selectedOption.value : null,
                      type: 'select-one',
                    },
                  })}
                  required
                />
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

      </Form>
    </>
  )
}

export default Aggregation