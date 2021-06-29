import React,{useState,useEffect} from 'react'
import HomeScreenImage from '../images/HomePage/homescreen.jpg'
import {
    isMobile,
  } from "react-device-detect";
import TypeWriter from './TypeWriter';
import { setTextSize } from './ConstantFunctions';


const typeWriter = ["Film Maker", "Photographer", "Dancer"];

const HomeCardImage = () => {

    const [fontHeaderSize,setFontHeaderSize] =useState('5em')   


    useEffect(() => {
        const fontSize = setTextSize(isMobile)
        setFontHeaderSize(fontSize)
    }, [])

    return (

        <div className="img-container" id="homeScreen">
        
            <img src={HomeScreenImage} alt="Snow" style={{width:'100vw',height:'100vh',objectFit: 'cover'}} />
            <div className=" centered ">
                <h1 className="h1 font-weight-bold " style={{fontSize:`${fontHeaderSize}`}}>
                    Dhiren Shrestha
                </h1>
                <p className="h2 font-weight-bold">
                I am  a<TypeWriter className="typeWriter" data={typeWriter}></TypeWriter>
                </p>
                

                
                
                
            </div>
        </div>

    )
}

export default HomeCardImage
