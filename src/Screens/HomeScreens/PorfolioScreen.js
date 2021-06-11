import React,{useState,useEffect} from 'react'
import { Row,Col,Image } from 'react-bootstrap'
import {
    isMobile,
  } from "react-device-detect";
import { setTextSize } from '../../Components/ConstantFunctions';
import portfolioData from '../../Data/PorfolioData'
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";

const PorfolioScreen = () => {
    const [fontHeaderSize,setFontHeaderSize] =useState('5em')   
   
    const handleClick = (e) => {
        setSelectedImage(null)
    }
    useEffect(() => {
        const fontSize = setTextSize(isMobile)
        setFontHeaderSize(fontSize)
    }, [])

    const [selectedImage,setSelectedImage] = useState(null)

    return (
        <div className="p-3" id="portfolioScreen">
            <Row data-aos="fade-down">
                <Col xs="12">
                    <h1 className="headingText font-extrabold my-1" style={{fontSize:`${fontHeaderSize}`}}> Portfolio </h1>
                    <p className="h2 my-2" >
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
                            portfolioData.map((item,index)=>{
                                return(
                                    <Col xs="12" md="6"  lg="6" xl="4" key={index}  >
                                        <div onClick={(e)=>setSelectedImage(index)}>
                                        <Image src={item.url} style={{objectFit:'cover'}} className="m-1" fluid  />
                                        </div>
                                    </Col>
                                )
                            })
                        }
                    
                    
                </Row>

                
                </Col>
                
            </Row>

            {
                selectedImage &&(
                    <div onClick={handleClick}  >
                    <Lightbox startIndex={selectedImage} images={portfolioData} />
                    </div>
                ) 
            }
            
            
        </div>
    )
}

export default PorfolioScreen
