import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import {Nav,Col,Tab,Row,Button} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'font-awesome/css/font-awesome.min.css'; 
import SourceForms from './SourceForms';
import '../App.css'
import BasicSettings from './BasicSettings';
import CalculatedColumns from './CalculatedColumns';
import Aggregation from './Aggregation';
import Columns from './Columns';


function SideNavbar() {


  const [activeTab, setActiveTab] = React.useState<string | null>("basicSettings");
  const [reportTitle, setReportTitle] = React.useState<string | undefined>("");
  const [formData, setFormData] = React.useState<any>({});



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
useEffect(() => {
  console.log('Updated Form Data:', formData);
  }, [formData]);

  return (
    <div className="App" style={{fontFamily:'TimesNewRoman'}}>
    <h1 className="text-center">Reports Module</h1>
    <Container style={{}} className='border mb-2 navbar' >
      <Tab.Container id="left-tabs-example" activeKey={activeTab || "basicSettings"} onSelect={(key: string | null) => setActiveTab(key)}>
        <Row className='w-100'>
          <Col sm={3}>
            <Nav variant="" className="flex-column sticky-top">
              <Nav.Item>
                <Nav.Link eventKey="basicSettings" className="first-tab custom-nav-link">Basic Settings</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="sourceForms" className="tab custom-nav-link">Source Forms</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="calculatedForms" className="tab custom-nav-link">Calculated Columns</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="aggregation" className="tab custom-nav-link">Aggregation</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="columns" className="tab custom-nav-link">Columns</Nav.Link>
              </Nav.Item>
              {/* <Nav.Item>
                <Nav.Link eventKey="controlPanel" className="tab custom-nav-link">Control Panel</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="filters" className="tab custom-nav-link">Filters</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="controlsActions" className="tab custom-nav-link">Contols Actions</Nav.Link>
              </Nav.Item> */}
            </Nav>
            <div className="footer sticky-bottom" style={{display:'flex',left:'0'}}>
        <Button variant="dark" href="#" className="btn " >Cancel</Button>
        <Button onClick={handlePrevious} className="btn btn-success" hidden={activeTab === "basicSettings"}>Previous</Button>        
        <Button onClick={handleNext} className="btn btn-danger" hidden={activeTab === "columns"}>Next</Button>
        {activeTab === "columns" && (
          <Button type="submit" className="btn">Submit Form</Button>
        )}
      </div>
          </Col>
          <Col sm={9}>
            <div style={{background: "red", width: "100%"}}></div>
            <Tab.Content className='tabcontent'>
              <Tab.Pane eventKey="basicSettings" className="tabContent">                  
                <BasicSettings setFormData={setFormData} formData={formData}/>
              </Tab.Pane>

              <Tab.Pane eventKey="sourceForms" className="tabContent">
              <SourceForms setFormData={setFormData} formData={formData} />
               
              </Tab.Pane>

              <Tab.Pane eventKey="calculatedForms" className="tabContent">                  
              <CalculatedColumns setFormData={setFormData} formData={formData} />

              </Tab.Pane>

              <Tab.Pane eventKey="aggregation" className="tabContent">
              <Aggregation />
              </Tab.Pane>

              <Tab.Pane eventKey="columns" className="tabContent">
              <Columns/>
              </Tab.Pane>

              {/* <Tab.Pane eventKey="controlPanel" className="tabContent">
              <SourceForms/>
              </Tab.Pane>  

              <Tab.Pane eventKey="filters" className="tabContent">
              <SourceForms/>
              </Tab.Pane>

              <Tab.Pane eventKey="controlsActions" className="tabContent">
              <SourceForms/>
                                </Tab.Pane>               */}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
      
    </Container>      
  </div>
  );
}

export default SideNavbar;
