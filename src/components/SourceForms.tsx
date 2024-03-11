import React from 'react'
import { Container, OverlayTrigger, Tooltip, Col, Row, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Select from "react-select";


interface SourceFormsProps {
  setFormData: any;
  formData: any;

}

const SourceForms: React.FC<SourceFormsProps> = ({ setFormData, formData }) => {
  const [isFormSubmitted, setFormSubmitted] = React.useState(false);
  const initialFormData = {
    selectedForm: '',
    baseform: '',
    baseFormFields: '',
    baseFormPath: '',
    joiningForm: '',
    joiningFormFields: '',
    joiningFormPath: ''
  };
  const [sourceFormsData, setSourceFormsData] = React.useState<any>(initialFormData)

  const customRenderTooltip = (content: string) => (props: any) => (
    <Tooltip id="button-tooltip" {...props}>
      {content}
    </Tooltip>
  );

  const options = [
    { value: 'form1', label: 'Form1' },
    { value: 'form2', label: 'Form2' },
    { value: 'form3', label: 'Form3' }
  ]


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target || e;


    if (type === 'select-one' || type === 'select-multi') {
      // Handle both single and multi-select
      setSourceFormsData((prevData: any) => ({
        ...prevData,
        [name]: value,
      }));
    } else {
      // Update the state based on other form fields
      setSourceFormsData((prevData: any) => ({
        ...prevData,
        [name]: type === 'checkbox' ? checked : value,
      }));
    };





    setFormData((prevData: any) => ({
      ...prevData,
      SourceForms: [sourceFormsData],
    }));

    console.log('Source Form Form Data:', sourceFormsData);

  };


  // const handleSubmit = (event: any) => {
  //   event.preventDefault();


  //   console.log('Source Form Form Data:', sourceFormsData);


  //   setFormData((prevData: any) => ({
  //     ...formData,
  //     SourceForms: [...(prevData.SourceForms || []), sourceFormsData],
  //   }));




  //   setSourceFormsData(initialFormData);
  //   setFormSubmitted(true);




  // };



  return (
    <Form >
      <Container className=''>
        <h2>Report Setup - Source Forms</h2>
        <p className=' text-start'>A report can aggregate Submission Data submitted against one or more Forms. Many times Reports aggregate data from multiple Forms which allow a singular Report IJI to visualize connected data stemming from multiple Form Sources.</p>


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
        <Select
          name='selectedForm'
          className='mb-3'
          options={options}
          isClearable
          isMulti
          onChange={(selectedOptions) => handleInputChange({
            target: {
              name: 'selectedForm',
              value: selectedOptions ? selectedOptions.map(option => option.value) : [],
              type: selectedOptions && selectedOptions.length > 1 ? 'select-multi' : 'select-one',
            },
          })}
          required
        />
        

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
              <Form.Control

                required
                type="text"
                value={sourceFormsData.baseform}
                onChange={handleInputChange} name='baseform' placeholder="Base Form" style={{ marginLeft: '10px', width: '90%' }} />
              <Form.Label className='baseformlabel2'>Connecting fields of base Form</Form.Label><Form.Control type='text' value={sourceFormsData.baseFormFields} onChange={handleInputChange} name='baseFormFields' required style={{ marginLeft: '10px', width: '90%' }} placeholder="Connecting Fields" />
              <Form.Label className='baseformlabel3' >Base form path to connecting value</Form.Label><Form.Control onChange={handleInputChange} type='text' value={sourceFormsData.baseFormPath} name='baseFormPath' required style={{ marginLeft: '10px', width: '90%' }} placeholder="Path" />
            </Col>
            <Col style={{ width: '50%', fontSize: '20px', marginTop: '7px' }}>
              <Form.Label className='joiningformlabel1' >Joining Form</Form.Label><Form.Control onChange={handleInputChange} name='joiningForm' value={sourceFormsData.joiningForm} type='text' required style={{ marginLeft: '10px', width: '90%' }} placeholder="Joining Form " />
              <Form.Label className='joiningformlabel2'>Connecting fields of Joining Form</Form.Label><Form.Control onChange={handleInputChange} value={sourceFormsData.joiningFormFields} type='text' name='joiningFormFields' required style={{ marginLeft: '10px', width: '90%' }} placeholder="Connecting Field" />
              <Form.Label className='joiningformlabel3'>Joining form path to connecting value</Form.Label><Form.Control onChange={handleInputChange} value={sourceFormsData.joiningFormPath} type='text' name='joiningFormPath' required style={{ marginLeft: '10px', width: '90%' }} placeholder="Path" />
            </Col>
          </Row>
          <Button variant="success" style={{ margin: '10px', fontFamily: 'TimesNewroman' }}>
            Save
          </Button>
          <Button variant="danger" style={{ margin: '10px', fontFamily: 'TimesNewroman' }}>
            Cancel
          </Button>

        </Container>
      </Container>
      {/* {isFormSubmitted && (
        <div style={{ marginTop: '20px' }}>
          <p>Form Submitted Successfully!</p>

        </div>
      )} */}
    </Form>
  )
}

export default SourceForms

