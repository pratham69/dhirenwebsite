import React,{useState,useEffect} from 'react'
import { Row,Col,Image } from 'react-bootstrap'
import {
    isMobile,
  } from "react-device-detect";
import { setTextSize } from '../../Components/ConstantFunctions';
import AboutPhoto from '../../images/AboutPage/aboutPhoto.jpg'

const AboutScreen = () => {

    const [fontHeaderSize,setFontHeaderSize] =useState('5em')   


    useEffect(() => {
        const fontSize = setTextSize(isMobile)
        setFontHeaderSize(fontSize)
    }, [])


    return (
        <div className="p-3" id="aboutScreen">
            <Row>
                <Col xs="12" data-aos="fade-down">
                    <h1 className="headingText font-extrabold my-1" style={{fontSize:`${fontHeaderSize}`}}>About </h1>
                </Col>
                <Col xs="12" data-aos="fade-down">
                    <p className="h2 my-3">
                        Hi, my name is dhiren
                    </p>
                </Col>
                <Col xs="12" className="my-2">
                    <Row>
                        <Col xs="12" md="5"  className="my-2" data-aos="slide-right">
                            <Image src={AboutPhoto} rounded fluid />
                        </Col>
                        <Col xs="12" md="7" data-aos="slide-left">

                            <h1 className="headingText font-extrabold" style={{fontSize:`2.5em`}}> Nepal's Top Photographer </h1>
                            <p className="h3 my-2" >
                            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid 
                            fuga eum quidem. Sit sint 
                            consectetur velit. Quisquam 
                            quos quisquam cupiditate. Et nemo qui 
                            impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas., 
                            </p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default AboutScreen
