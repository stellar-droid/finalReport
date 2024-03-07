import React from 'react'
import { Col, Container, Form, OverlayTrigger, Row, Tooltip } from 'react-bootstrap'

const Aggregation = () => {
    const customRenderTooltip = (content: string) => (props: any) => (
        <Tooltip id="button-tooltip" {...props}>
            {content}
        </Tooltip>
    );

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
                        <Container  style={{ padding: '10px' }}>

                            <Row justify-content-md-center>

                                <Col xs={10} className='border'>
                                    <Form.Control required />

                                </Col>

                                <Col className='border'>
                                    <i className="bi bi-x-circle-fill btn " style={{ marginLeft: '10px', position: 'relative', top: '5px' }}></i>
                                </Col>
                            </Row>
                        </Container>
                    </Form.Group>
                </Container>
            </Form>
        </>
    )
}

export default Aggregation