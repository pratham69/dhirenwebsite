import React,{useState,useEffect} from 'react'
import { TiThMenu } from 'react-icons/ti';
import { IconContext } from 'react-icons';
import {SidebarData} from '../../Data/SidebarData'
import {ProfileIcons} from './ProfileIcons'
import {Image,Row,Col} from 'react-bootstrap'
import './Navbar.css'
import Logo from '../../images/Navbar/dhiren.jpg'
import {
    isMobile
  } from "react-device-detect";
import useWindowDimensions from '../ScreenWidth.js'
import {Link} from 'react-scroll'
const Navbar = () => {

    const { width } = useWindowDimensions();

    
    const [sidebar,setSidebar] = useState(true)


    const showSideBar = () => {
        
        setSidebar(!sidebar)

    }


    useEffect(() => {
        if(width === 1000 ){
            setSidebar(!sidebar)

        }
    },[width, sidebar])

    
    return ( 
    <IconContext.Provider value={{color:'white'}}>
        {
            isMobile || width < 1000 ? (
                    <button onClick={showSideBar} variant="dark" className="btn fixed-button btn-circle btn-xl" style={{backgroundColor:'black'}}><TiThMenu></TiThMenu></button>
            ):(
                <div></div>
            )
            
        }

        
        <nav className={sidebar &&  (isMobile || width < 1000)? 'nav-menu ' : 'nav-menu active'}>
            <ul className="nav-menu-items">
                <li className="m-3">

                <Row className="alig" >
                <Col>
                <Image src={Logo} roundedCircle fluid style={{height:'120px',width:"auto"}} className="border border-4 border-dark"></Image>
                </Col>
                    
                </Row>
                    
                </li>
                <li style={{color:'white'}}>
                    <strong><h5 >Dhiren Man Shrestha</h5></strong>
                </li>

                <li>
                    <Row>
                        <Col xs={1}>

                        </Col>
                        {
                            ProfileIcons.map((item,index)=>{
                                return(
                                    <Col xs={2} className="h2" key={index}>

                                            <a href={item.path}>
                                                {item.icon}
                                            </a>

                                    </Col>
                                )
                            })
                        }
                        <Col xs={3}>

                        </Col>
                    </Row>
                </li>
                {SidebarData.map((item,index)=>{
                    return (
                        <li key={index} className={item.cName} style={{fontSize:'1.5rem', textAlign:"center"}}>
                            <Link to={item.path} spy={true} smooth={true}>
                                {item.icon}
                                <span className="text-light">{item.title}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    </IconContext.Provider>
    )
}

export default Navbar