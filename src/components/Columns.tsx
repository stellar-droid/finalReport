import React from 'react'
import { Row,Form,OverlayTrigger,Tooltip,Col } from 'react-bootstrap'
const Columns = () => {

    const customRenderTooltip = (content:any) => (props:any) => (
        <Tooltip id="button-tooltip" {...props}>
          {content}
        </Tooltip>
      );

  return (
    <>
     <h2 className="heading">Report Setup - Columns</h2>
                  <span >Use the UI below to choose which columns are available to the end user of the Report. Then, select which columns the end user has available by default. The end user will start out with the default columns shown visually, with an option to choose which of the available columns they wish to see based on their requirements at runtime.</span>
                  <Row className="mb-3">                    
                    <Form.Label aria-required className="mt-2 formContent">
                      Available Columns
                      <OverlayTrigger
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={customRenderTooltip('View Available columns')}
                      >
                        <i className="fa fa-question-circle ms-1"></i>
                      </OverlayTrigger>
                      <i className="ms-1" style={{ color: "red" }}>*</i>
                    </Form.Label>
                    <Form.Group as={Col}>
                    <i className="bi bi-x-circle-fill btn" style={{ marginLeft: '10px', position: 'relative', top: '5px' }}></i>                    
                    </Form.Group>
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