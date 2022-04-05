import React,{Component} from 'react'
// import {Container,Row} from 'react-bootstrap'
import {Container,Row,Col,Button} from 'react-bootstrap';

const bannertext = {
    fontSize:"45px",
    color:"white",


}

function Banner() {
  return (
    <>
     
        <div className="banner_background p-5" style={{height:"500px"}}>

            <Container fluid>
                <Row >
                    <Col md={5}>
                      
                          <div style={bannertext}>Find <span style={{fontStyle:"italic",fontWeight:"700"}}>Adventures</span> You want to talk About</div>
                          <br/>
                          <div className="input-group">
                        <input type="text" className="form-control" style={{padding:"25px"}} placeholder="Search Tour..."/>
                        <span className="input-group-btn">
                            <Button className="btn btn-success" type="submit">
                                <i className="fa fa-search"></i>
                            </Button>
                        </span>
                        </div>
                    </Col>

                    <Col md={7} className="float-end">
                         <Button className="btn-light ">How it works?</Button>
                    </Col>

                </Row>
            </Container>
         {/* <img  className="image_hidden" src="https://theuiaa.org/wp-content/uploads/2021/01/Dolomites-stock-UIAA.jpg" alt="image" /> */}
        </div>
      


    </>
  )
}


export default Banner