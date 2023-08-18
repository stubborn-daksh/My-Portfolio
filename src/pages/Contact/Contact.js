import React from 'react'
import './Contact.css';
import Rotate from 'react-reveal/Rotate';
import LightSpeed from 'react-reveal/LightSpeed';
import {BsLinkedin, BsGithub, BsInstagram} from 'react-icons/bs';
import {BiSolidPhoneCall, BiLogoGmail} from 'react-icons/bi';

const Contact = () => {
  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/daksh-kesarwani-9173691b0/', '_blank');
  };
  const handleGithubClick = () => {
    window.open('https://github.com/InnocentDaksh63/', '_blank');
  };
  const handleInstaClick = () => {
    window.open('https://www.instagram.com/curious_daksh_/', '_blank');
  };
  

  return (
    <>
    <div className='contact' id='contact'>
      <div className='card card0 border-0'>
        <div className='row'>
            <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12'>
              <div className='card1'>
               <div className='row border-line'>
                <LightSpeed>
                    <img src='data:image/jpeg;base64,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' alt='contact1' className='image' />
               </LightSpeed>
               </div>
              </div>
            </div>
            <div className='col-lg-6 col-md-6'>
              <Rotate>
              <div className='row'>
                <div className='card2 d-flex card border-0 px-4 py-5'>
                  <div className='row'>
                       <h6 className='con'>Contact With 
                        <BsLinkedin color='blue' size={30} className='ms-2' onClick={handleLinkedInClick} /> 
                        <BsGithub color='black' size={30} className='ms-2' onClick={handleGithubClick} /> 
                       <BsInstagram color='red' size={30} className='ms-2' onClick= {handleInstaClick} />
                       </h6>
                  </div>
                  <div className='row px-3 mb-4'>
                        <div className='line' />
                            <small className='or test-center con'>OR</small>
                        <div className='line' />
                  </div>
                  <div className='row px-3'>
                    <h4 className='con'><BiSolidPhoneCall size ={30} className='ms-2' /> 6387971174 </h4>  
                  </div>    
                  <div className='row px-3'>
                        <h6 className='con'><BiLogoGmail size ={30} className='ms-2'/> : dakshkesarwanijasra@gmail.com</h6>
                  </div>  
                </div>
              </div>
            </Rotate>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact