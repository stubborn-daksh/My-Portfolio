import React from 'react';
import './Techstack.css';
import RubberBand from 'react-reveal/RubberBand';
import Fade from 'react-reveal/Fade';
import { TechstackList } from '../../utils/TechstackList';

const Techstack = () => {
  return (
    <>
      <div className='container techstack' id='techstack'>
        <RubberBand>
          <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>Technology Stack</h2>
          <hr />
          <p className='pb-3 text-center'>👉 including programming languages, frameworks , databases, front-end and backend Tools 
            and APIs
          </p>
        </RubberBand>
       
      <div className='row'>
              {TechstackList.map(techstack => (
                 <Fade left>
                 <div key={techstack._id} className='col-md-3'>
                    <div className='card m-2'>
                        <div className='card-content'>
                             <div className='card-body'>
                                <div className='media d-flex justify-content-center'>
                                    <div className='align-self-center'>
                                    <techstack.icon className='tech-icon' />
                                    </div>
                                    <div className='media-body'>
                                    <h5> {techstack.name}</h5>
                                    </div>
                                </div>
                             </div>
                        </div>
                    </div>
                 </div>
                 </Fade>
              ))}
      </div>
      </div>
    </>
  )
}

export default Techstack