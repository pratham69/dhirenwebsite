import React,{useState,useEffect} from 'react'
import { Row,Col } from 'react-bootstrap'
import { setTextSize } from '../../Components/ConstantFunctions';
import {
    isMobile,
  } from "react-device-detect";
import {ServicesData} from '../../Data/ServicesData'
import { IconContext } from 'react-icons';

const ServicesScreen = () => {
    const [fontHeaderSize,setFontHeaderSize] =useState('5em')   


    useEffect(() => {
        const fontSize = setTextSize(isMobile)
        setFontHeaderSize(fontSize)
    }, [])
    return (
        <div className="p-3" id="serviceScreen" >
            <Row>
                <Col xs="12" data-aos="fade-down">
                    <h1 className="headingText font-extrabold my-1" style={{fontSize:`${fontHeaderSize}`}}> Services </h1>
                    <p className="h2 my-2" >
                    I am  fortunate enough to be able to do what I am really passionate about. I really enjoying working with people and connecting with them. 
                    But one thing I have learnt as my time working , I love to learn from others. It’s so easy to photograph  wherever I go.
                    </p>
                </Col>
                <IconContext.Provider value={{color:'brown'}}>
                <Col xs="12" className="my-2" data-aos="fade-down">
                    <Row>
                        {
                            ServicesData.map((item,index)=>{
                                return (
                                    <Col  className="shadow-lg m-3 p-3" xs="11" md="5" key={index}>
                                    <Row key={index}>
                                        <Col  className="display-1 ">
                                            {item.icon}
                                        </Col>
                                        <Col >
                                            <h1 className="display-4">{item.title}</h1>
                                            <p className="h3">
                                                {item.description}
                                            </p>
                                        </Col>
                                    </Row>
                                </Col>
                                )
                                
                            })
                        }
                    </Row>
                </Col>
                </IconContext.Provider>
            </Row>
        </div>
    )
}

export default ServicesScreen
