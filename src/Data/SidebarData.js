import React from 'react'
import { GiDwarfFace,GiElvenCastle,GiBroadheadArrow,GiCutDiamond,GiPhone } from 'react-icons/gi'

export const SidebarData = [
    {
        title: 'Home',
        path :'homeScreen',
        icon : <GiElvenCastle />,
        cName : 'nav-text'
    },
    {
        title: 'About',
        path :'aboutScreen',
        icon : <GiDwarfFace />,
        cName : 'nav-text'
    },
    {
        title: 'Porfolio',
        path :'portfolioScreen',
        icon : <GiCutDiamond />,
        cName : 'nav-text'
    },
    {
        title: 'Services',
        path :'serviceScreen',
        icon : <GiBroadheadArrow />,
        cName : 'nav-text'
    },
    {
        title: 'Contact',
        path :'contactScreen',
        icon : <GiPhone />,
        cName : 'nav-text'
    },

]