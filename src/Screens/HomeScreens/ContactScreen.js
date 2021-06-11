import React,{useState,useEffect} from 'react'
import { Row,Col,Button,Form, ListGroup } from 'react-bootstrap'
import {
    isMobile,
  } from "react-device-detect";
import { setTextSize } from '../../Components/ConstantFunctions';
import {AddressData} from '../../Data/AddressData'
import ShadowCardContainer from '../../Components/ShadowCardContainer'

const ContactScreen = () => {

    const [fontHeaderSize,setFontHeaderSize] =useState('5em')   


    useEffect(() => {
        const fontSize = setTextSize(isMobile)
        setFontHeaderSize(fontSize)
    }, [])

    return (
        <div className="p-3" id="contactScreen">
            <Row data-aos="fade-down">
                <Col xs="12">
                    <h1 className="headingText font-extrabold my-1" style={{fontSize:`${fontHeaderSize}`}}> Contact </h1>
                    <p className="h2 my-2" >
                    Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid 
                        fuga eum quidem. Sit sint 
                        consectetur velit. Quisquam 
                        quos quisquam cupiditate. Et nemo qui 
                        impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas., 
                    </p>
                </Col>
                

                
                <Col className="my-2 " >
                
                    <Row>
                        <Col xs="12" md="4" lg="4" xl="4">
                        <ShadowCardContainer>
                        <ListGroup variant="flush" data-aos="fade-right">
                            {
                                AddressData.map((item,index)=>{
                                    return (
                                        <ListGroup.Item  className="border-0" key={index}>
                                        <Row key={index}>
                                            <Col>
                                                <h1 className="display-3">{item.icon}</h1>
                                            </Col>
                                            <Col>
                                                <h1 className="display-5">{item.title}</h1>
                                                <p >
                                                    {item.description}
                                                </p>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                    )   
                                    
                                })
                            }
                        </ListGroup>
                        </ShadowCardContainer>
                        </Col>
                        <Col xs="12" md="8" lg="8" xl="8" data-aos="fade-left">
                            <ShadowCardContainer>
                            <Form>

                                <Row>
                                    <Col xs="12" md="6">
                                        <Form.Group className="mb-3" controlId="name">
                                        <Form.Label>Enter Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Name" />

                                    </Form.Group>
                                    </Col>
                                    <Col xs="12" md="6">
                                        <Form.Group className="mb-3" controlId="subject">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>
                                    </Col>
                                    <Col xs="12">
                                        <Form.Group className="mb-3" controlId="subject">
                                            <Form.Label>Subject</Form.Label>
                                            <Form.Control type="text" placeholder="Enter subject" />
                                        </Form.Group>
                                    </Col>
                                    <Col xs="12">
                                        <Form.Group className="mb-3" controlId="message">
                                            <Form.Label>Message</Form.Label>
                                            <Form.Control as="textarea" placeholder="Enter message" style={{ height: '200px' }} />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                

                                <div className="d-grid gap-2">
                                <Button variant="primary" type="submit" block={true}>
                                    Send Mail
                                </Button>
                                </div>
                                </Form>
                            </ShadowCardContainer>
                        </Col>
                    </Row>
                    
                </Col>
            </Row>
            <Row style={{height:'300px'}}>

            </Row>
        </div>
    )
}

export default ContactScreen
