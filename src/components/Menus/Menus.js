import React from 'react';
import './Menus.css';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import {FcHome, FcAbout, FcPortraitMode, FcBiotech, FcReadingEbook, FcVideoProjector,  FcBusinessContact} from 'react-icons/fc';
import My_image from '../../assets/images/my6-modified.png';
import { Link} from 'react-scroll';


const Menus = ({toggle}) => {
  return (
    <>
    {toggle ? ( 
    <> 
    <Zoom>
      <div className='navbar-profile-pic'>
              <img src={My_image} alt='profile pic' />
      </div>
    </Zoom>
    <Fade left>
    <div className='nav-items'>
      <div className='nav-item'>
        <div className='nav-link'>
            <Link to='home' spy={true} smooth={true} offset={-100} duration={100}>
                  <FcHome />
                  Home
            </Link>
        </div>
        <div className='nav-link'>
            <Link to='about' spy={true} smooth={true} offset={-100} duration={100}>
              <FcAbout />
               About
            </Link>
        </div>
        <div className='nav-link'>
            <Link to='education' spy={true} smooth={true} offset={-100} duration={100}>
              <FcReadingEbook />
               Education 
            </Link>
        </div>
        <div className='nav-link'>
            <Link to='techstack' spy={true} smooth={true} offset={-100} duration={100}>
              <FcBiotech />
               Tech Stack
            </Link>
        </div>
        <div className='nav-link'>
            <Link to='project' spy={true} smooth={true} offset={-100} duration={100}>
              <FcVideoProjector />
               Projects
            </Link>
        </div>
        <div className='nav-link'>
            <Link to='workexp' spy={true} smooth={true} offset={-100} duration={100}>
              <FcPortraitMode />
               Work Experience
            </Link>
        </div>
        <div className='nav-link'>
            <Link to='contact' spy={true} smooth={true} offset={-100} duration={100}>
              <FcBusinessContact />
               Contact
            </Link>
        </div>
      </div>
    </div>
    </Fade>
    </>
     )  : (
           <>
            <div className='nav-items'>
              <div className='nav-item'>
                <div className='nav-link'>
                    <Link to='home' spy={true} smooth={true} offset={-100} duration={100}>
                          <FcHome />
                    </Link>
                </div>
                <div className='nav-link'>
                    <Link to='about' spy={true} smooth={true} offset={-100} duration={100}>
                      <FcAbout />
                    </Link>
                </div>
                <div className='nav-link'>
                    <Link to='education' spy={true} smooth={true} offset={-100} duration={100}>
                      <FcReadingEbook /> 
                    </Link>
                </div>      
                <div className='nav-link'>
                    <Link to='techstack' spy={true} smooth={true} offset={-100} duration={100}>
                      <FcBiotech />
                    </Link>
                </div>
                <div className='nav-link'>
                    <Link to='project' spy={true} smooth={true} offset={-100} duration={100}>
                      <FcVideoProjector />
                    </Link>
                </div>
                <div className='nav-link'>
                    <Link to='workexp' spy={true} smooth={true} offset={-100} duration={100}>
                      <FcPortraitMode />
                    </Link>
                </div>
                <div className='nav-link'>
                    <Link to='contact' spy={true} smooth={true} offset={-100} duration={100}>
                      <FcBusinessContact />
                    </Link>
                </div>
              </div>
            </div>
           </>
       )} 
    </>
  );
};

export default Menus