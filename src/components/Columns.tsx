import React, { useState } from 'react'
import { Row, Form, OverlayTrigger, Tooltip, Col, Container, Table,Button } from 'react-bootstrap'
import Select from "react-select";

const Columns = () => {

  const customRenderTooltip = (content: any) => (props: any) => (
    <Tooltip id="button-tooltip" {...props}>
      {content}
    </Tooltip>
  );

  const options = [{ value: 'name', label: 'Name' },
  { value: 'email', label: 'Email' },
  { value: 'department', label: 'department' }]


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | { target: any }) => {
    const { name, value, type, checked } = e.target;

  }
  const [inputFields, setInputFields] = useState<any>([{ column: '', title: '' }]);
const addInputField = ()=>{
  setInputFields([...inputFields,{ column: '', title: '' }])
} 

const removeInputField = (index: number) => {
  const updatedInputFields = inputFields.filter(( i:number) => i !== index);
  setInputFields(updatedInputFields);
};
  return (
    <>
      <h2 className="heading">Report Setup - Columns</h2>
      <span >Use the UI below to choose which columns are available to the end user of the Report. Then, select which columns the end user has available by default. The end user will start out with the default columns shown visually, with an option to choose which of the available columns they wish to see based on their requirements at runtime.</span>
      <Row className="mb-3">
        <Form.Label style={{ display: 'flex', position: 'relative', marginTop: '20px ' }} aria-required className=" formContent">
          Available Columns
          <OverlayTrigger
            placement="right"
            delay={{ show: 250, hide: 400 }}
            overlay={customRenderTooltip('Available Columns')}
          >
            <i className="bi bi-patch-question"></i>
          </OverlayTrigger>
          <i className="ms-1" style={{ color: "red" }}>*</i>
        </Form.Label>
        <Container>
          <Table striped bordered >
            <thead>

              
                <tr>

                  <th ></th>
                  <th>Column <span style={{ color: "red" }}>*</span></th>
                  <th>Display Title
                    <OverlayTrigger
                      placement="right"
                      delay={{ show: 250, hide: 400 }}
                      overlay={customRenderTooltip('Title')}
                    >
                      <i className="bi bi-patch-question"></i>
                    </OverlayTrigger>
                  </th>
                  <th></th>
                </tr>
             


            </thead>
            <tbody>
            {inputFields.map((index:number, data:any) => {
              return(

                <tr>
                <td><i className="bi bi-list btn"></i></td>
                <td style={{ width: '30vw' }}>
                  <Select
                    styles={{
                      control: (provided, state) => ({
                        ...provided,
                        width: '100%', // Set the desired width here
                      }),
                    }}
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
                    required /></td>
                <td> <input type="text" className="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1" /></td>
                {inputFields.length > 1 &&
                <td> <i className="bi bi-x-circle-fill btn" onClick={()=>{removeInputField(index)}} style={{ marginLeft: '10px', position: 'relative', top: '5px' }}></i></td>
              }
                </tr>
            )
            })}
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
      </Row>


      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label aria-required className="mt-2 formContent">
            Default Columns
            <OverlayTrigger
              placement="right"
              delay={{ show: 250, hide: 400 }}
              overlay={customRenderTooltip('Select Default Columns')}
            >
              <i className="fa fa-question-circle ms-1"></i>
            </OverlayTrigger>
          </Form.Label>
          <Form.Control
            type="text"
            name="defaultColumns"
          />
        </Form.Group>
      </Row>
    </>
  )
}

export default Columns