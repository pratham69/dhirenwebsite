import React,{useState,useEffect} from 'react'
import { Row,Col } from 'react-bootstrap'
import {
    isMobile,
  } from "react-device-detect";
import CardContainer from '../../Components/CardContainer';
import { setTextSize } from '../../Components/ConstantFunctions';
import { CardData } from '../../Data/CardData';
import Aos from 'aos'

const SkillsScreen = () => {
    const [fontHeaderSize,setFontHeaderSize] =useState('5em')   


    useEffect(() => {
        const fontSize = setTextSize(isMobile)
        setFontHeaderSize(fontSize)
        Aos.init({duration:2000})
    }, [])

    return (
        <div className="p-3" data-aos="fade-down" id='skillScreen'>
            <Row>
                <Col xs="12">
                    <h1 className="headingText font-extrabold my-1" style={{fontSize:`${fontHeaderSize}`}}>Skills </h1>

                    <p className="h2 my-3">
                    Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid 
                        fuga eum quidem. Sit sint 
                        consectetur velit. Quisquam 
                        quos quisquam cupiditate. Et nemo qui 
                        impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas., 
                    </p>
                </Col>
                <Col xs="12">
                    <Row>
                    {
                       CardData.map((item,index)=>{
                           return(
                               <Col xs="11" md="6" lg="6" xl="3" className="p-2" key={index}>
                                    <CardContainer card={item}>

                                    </CardContainer>
                               </Col>
                           )
                       })
                    }
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default SkillsScreen
