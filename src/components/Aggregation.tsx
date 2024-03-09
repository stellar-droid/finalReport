import React, { useState } from 'react'
import { Col, Container, Form, OverlayTrigger, Row, Tooltip, Table, Button } from 'react-bootstrap'
import Select from "react-select";

// interface Field {
//     id: number;
//     aggriField: any;
//   }

const Aggregation = () => {

  const [inputFields, setInputFields] = useState([{ aggriField: "" }]);




  const customRenderTooltip = (content:any) => (props:any) => (
    <Tooltip id="button-tooltip" {...props}>
      {content}
    </Tooltip>
  );


  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  const addInputField = () => {
    setInputFields([...inputFields, { aggriField: "" }]);
  };

  const removeInputField = (index:number) => {
    const updatedInputFields = inputFields.filter((_, i) => i !== index);
    setInputFields(updatedInputFields);
  };


  return (
    <>
      <Form>
        <Container>
          <h1>Report Setup - Aggregated Columns</h1>
          <p> You can create an aggregated report that groups the selected Forms• submissions by one or several fields (e.g. department ID or employee 10), Using the
            UI below, select the fields that will be used as criteria for the grouping. Then, add columns to your Reporting Grid that will calculated per group based on
            the existing selected Forms fields or the Grid Calculated Extra Fields.</p>
          <p>Please note that only Aggregated Columns will be available to display in the Reporting Grid for Aggregated Reprts,</p>

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

              {/* <Row justify-content-md-center>

                                <Col xs={10} className='border'>
                                    <Form.Control required />

                                </Col>

                                <Col className='border'>
                                    <i className="bi bi-x-circle-fill btn " style={{ marginLeft: '10px', position: 'relative', top: '5px' }}></i>
                                </Col>
                            </Row> */}
              <Table bordered hover>
                <thead>
                  {inputFields.map((field, index) => (
                    <tr>
                      <th colSpan={4}><Select name='aggriField' options={options} isClearable isSearchable required /></th>
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
                    {/* <td colSpan={5} ><Button variant="primary">Primary</Button></td> */}
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
                  <Form.Control required></Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Label style={{ display: 'flex' }}>Column Key</Form.Label>
                <Form.Control required />
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
                <Select options={options} isClearable required />
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