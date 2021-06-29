import React,{useState,useEffect} from 'react'
import { Row,Col } from 'react-bootstrap'
import {
    isMobile,
  } from "react-device-detect";
import { setTextSize } from '../../Components/ConstantFunctions';
import { IconContext } from 'react-icons';
import {FactsData} from '../../Data/FactsData'

const FactScreen = () => {

    const [fontHeaderSize,setFontHeaderSize] =useState('5em')


    useEffect(() => {
        const fontSize = setTextSize(isMobile)
        setFontHeaderSize(fontSize)
    }, [])


    return (
        <div className="p-3" data-aos="fade-down" id="factScreen">
            <Row>
                <Col xs="12" >
                    <h1 className="headingText font-extrabold my-1" style={{fontSize:`${fontHeaderSize}`}}> Facts </h1>
                    <p className="h2 my-2" >
                    With over 3 years of professional experience, My photographic journey has assumed a rich and varied path. 
                    I have been working as a wedding photographers and I also go some freelancing gigs at bars and resturant .
                    </p>
                </Col>
                <Col xs="12" className="my-3">
                <IconContext.Provider value={{color:'brown'}}>
                <Row className="my-5">
                {
                    FactsData.map((item,index)=>{
                        return (

                            <Col xs="12" md="6" lg="6" xl="3" key={index} className="" data-aos="fade-down" >

                            <Row key={index}>
                                    <Col xs="1">

                                    </Col>
                                    <Col xs="3" className="display-2">
                                        {item.icon}
                                    </Col>
                                    <Col xs="1">

                                    </Col>
                                    <Col xs="4" >
                                        <h1 className="display-1 font-extrabold">
                                            {item.count}
                                        </h1>
                                        <p className="h5">
                                            <strong>
                                                {item.title}
                                            </strong>
                                             so far
                                        </p>
                                    </Col>
                                    <Col xs="2">

                                    </Col>
                            </Row>
                                </Col>

                        )
                    })
                }
                </Row>
                </IconContext.Provider>
                </Col>
            </Row>
        </div>
    )
}

export default FactScreen
