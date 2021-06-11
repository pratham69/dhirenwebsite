import React,{useEffect} from 'react'
import {
    isMobile
  } from "react-device-detect";
import 'aos/dist/aos.css'
import HomeCardImage from '../Components/HomeCardImage';
import useWindowDimensions from '../Components/ScreenWidth'
import AboutScreen from './HomeScreens/AboutScreen';
import FactScreen from './HomeScreens/FactScreen';
import SkillsScreen from './HomeScreens/SkillsScreen';
import PorfolioScreen from './HomeScreens/PorfolioScreen';
import ServicesScreen from './HomeScreens/ServicesScreen';
import ContactScreen from './HomeScreens/ContactScreen';
import Aos from 'aos';


const Main = () => {
    const { width } = useWindowDimensions();
    useEffect(() => {
        Aos.init({duration:2000})
    },[])
    return (
        <div className={isMobile || width < 1000 ? 'm-0' : 'sidebar-active mr-0' }>
        <HomeCardImage  />
        <AboutScreen  />
        <FactScreen  />
        <SkillsScreen  />
        <PorfolioScreen />
        
        <ServicesScreen  />
        <ContactScreen />
        </div>
    )
}



export default Main
