import React from 'react'
import { Link } from 'react-router-dom'
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'
 import { GrNotes } from 'react-icons/gr'
import "../../assets/css/header.css";

function Header({OpenSidebar}) {
  return (
    <header className='header'>
         <div className='sidebar-brand'>
                <GrNotes  className='icon_header'/> ResumeBulider
            </div>
        {/* <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div> */}
        <div className='n'>

        <Link>options</Link>
        
        <Link> option</Link>
        </div>
        <div className='header-left'>
            {/* <BsSearch  className='icon'/> */}
        </div>
        <div className='header-right'>
            {/* <BsFillBellFill className='icon'/> */}
            {/* <BsFillEnvelopeFill className='icon'/> */}
            <BsPersonCircle className='icon' />
        </div>
    </header>
  )
}

export default Header