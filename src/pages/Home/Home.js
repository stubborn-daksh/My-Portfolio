import React from 'react';
import {useTheme } from '../../context/ThemeContext'; 
import './home.css';
import Fade from 'react-reveal/Fade';
import Typewriter from 'typewriter-effect';
import Resume from '../../assets/docs/daksh_resume.pdf';
import {BsFillMoonFill, BsFillSunFill, BsWhatsapp} from 'react-icons/bs';

const Home = () => {
  const [theme, setTheme ] = useTheme();
  //handle theme
  const handletheme = () => {
    setTheme(( prevState ) => ( prevState === 'light' ? 'dark' : 'light'))
  };
  return (
    <>
        <div className='container-fluid home-container' id='home'>
          <div className='theme-btn' onClick={handletheme}>
            {theme === 'light' ? (<BsFillMoonFill size={30} />) : (<BsFillSunFill size={30} />) }
          </div>
          <div className='container home-content'>
            <Fade right>
              <h2>Hi👋 I am Daksh Kesarwani</h2>
              <h1>
                <Typewriter 
                options={{
                  strings : ["Backend Developer !", "Nodejs Developer !", "Laravel Developer"],
                  autoStart: true,
                  loop:true
                }}
                />
              </h1>
              </Fade>
              <Fade bottom>
              <div className='home-buttons'>
                <a className='btn btn-hire' href='https://api.whatsapp.com/send?phone=6387971174' rel='noreferrer' target={'_blank'} ><BsWhatsapp/> Whatsapp Me</a>
                <a className='btn btn-cv' href={Resume} download="dakshCV.pdf">My Resume</a>
              </div>
              </Fade>
          </div>
        </div>
    </>
  )
}

export default Home