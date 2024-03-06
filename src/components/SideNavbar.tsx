import React from 'react';
import Container from 'react-bootstrap/Container';
import {Nav,Col,Tab,Row,Button} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'font-awesome/css/font-awesome.min.css'; 
import SourceForms from './SourceForms';
import '../App.css'
function SideNavbar() {
  const [activeTab, setActiveTab] = React.useState<string | null>("basicSettings");
  const [reportTitle, setReportTitle] = React.useState<string | undefined>("");

  const handleNext = () => {    
    switch (activeTab) {
      case "basicSettings":
        setActiveTab("sourceForms");
        break;
      case "sourceForms":
        setActiveTab("calculatedForms");
        break;
      case "calculatedForms":
        setActiveTab("aggregation");
        break;
      case "aggregation":
        setActiveTab("columns");
        break;
      case "columns":
        setActiveTab("controlPanel");
        break;
      case "controlPanel":
        setActiveTab("filters");
        break;
      case "filters":
        setActiveTab("controlsActions");
        break;
      default:       
        break;
    }
  };

  const handlePrevious = () => {    
    switch (activeTab) {
      case "sourceForms":
        setActiveTab("basicSettings");
        break;
      case "calculatedForms":
        setActiveTab("sourceForms");
        break;
      case "aggregation":
        setActiveTab("calculatedForms");
        break;
      case "columns":
        setActiveTab("aggregation");
        break;
      case "controlPanel":
        setActiveTab("columns");
        break;
      case "filters":
        setActiveTab("controlPanel");
        break;
      case "controlsActions":
        setActiveTab("filters");
        break;
      default:        
        break;
    }
  };


  return (
    <div className="App">
    <h1 className="text-center">Basic Settings</h1>
    <Container style={{margin:'0',marginTop:'50px'}} className='border mb-2'>
      <Tab.Container id="left-tabs-example" activeKey={activeTab || "basicSettings"} onSelect={(key: string | null) => setActiveTab(key)}>
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column sticky-top">
              <Nav.Item>
                <Nav.Link eventKey="basicSettings" className="first-tab">Basic Settings</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="sourceForms" className="tab">Source Forms</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="calculatedForms" className="tab">Calculated Columns</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="aggregation" className="tab">Aggregation</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="columns" className="tab">Columns</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="controlPanel" className="tab">Control Panel</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="filters" className="tab">Filters</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="controlsActions" className="tab">Contols Actions</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content className='tabcontent'>
              <Tab.Pane eventKey="basicSettings" className="tabContent">                  
                <SourceForms/>
              </Tab.Pane>

              <Tab.Pane eventKey="sourceForms" className="tabContent">
              <SourceForms/>
               
              </Tab.Pane>

              <Tab.Pane eventKey="calculatedForms" className="tabContent">                  
              <SourceForms/>
                
              </Tab.Pane>

              <Tab.Pane eventKey="aggregation" className="tabContent">
              <SourceForms/>
              </Tab.Pane>

              <Tab.Pane eventKey="columns" className="tabContent">
              <SourceForms/>
              </Tab.Pane>

              <Tab.Pane eventKey="controlPanel" className="tabContent">
              <SourceForms/>
              </Tab.Pane>  

              <Tab.Pane eventKey="filters" className="tabContent">
              <SourceForms/>
              </Tab.Pane>

              <Tab.Pane eventKey="controlsActions" className="tabContent">
              <SourceForms/>
                                </Tab.Pane>              
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
      <div className="footer" style={{display:'flex',left:'0'}}>
        <Button variant="dark" href="#" className="btn" >Cancel</Button>
        <Button onClick={handlePrevious} className="btn" hidden={activeTab === "basicSettings"}>Previous</Button>        
        <Button onClick={handleNext} className="btn" hidden={activeTab === "controlsActions"}>Next</Button>
        {activeTab === "controlsActions" && (
          <Button type="submit" className="btn">Submit Form</Button>
        )}
      </div>
    </Container>      
  </div>
  );
}

export default SideNavbar;
