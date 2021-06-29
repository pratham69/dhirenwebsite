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
                        Hi, my name is Dhiren Shrestha.I am a Nepali photographer based in Kathmandu. Combining a fine art photography background with a skilled and sensitive eye for portraiture, my images garnered acclaim for their honesty, vulnerability, and unfeigned connection to its subjects.
                         I photograph wedding celebrations from large multi day events to elopements across the Nepal, always bringing a unique 
                        editorial and artistic sensibility to the wedding world.
                    </p>
                </Col>
                <Col xs="12" className="my-2">
                    <Row>
                        <Col xs="12" md="5"  className="my-2" data-aos="slide-right">
                            <Image src={AboutPhoto} rounded fluid />
                        </Col>
                        <Col xs="12" md="7" data-aos="slide-left">

                            <h1 className="headingText font-extrabold" style={{fontSize:`2.5em`}}> Hello </h1>
                            <p className="h3 my-2" >
                            I'm a passionate  personality who's main goal in life is to have as 
                            much fun as humanly possible - while simultaneously traveling the earth and creating awesome work with awesome people.

                            I am currently doing my bachelor's degree in multimedia technologies at islington college . 
                            When I'm not shooting, I'm more than likely out on our 
                            patio with friends, taking Sunny for a hike, planning our next road trip, 
                            </p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default AboutScreen
