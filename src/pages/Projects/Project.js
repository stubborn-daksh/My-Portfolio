import React from 'react';
import './Project.css';
import Spin from 'react-reveal/Spin';
import My_images from '../../assets/images/profilePicture.png';
import chat_app from '../../assets/images/chat.png';

const Project = () => {
  return (
    <>
      <div className='container project' id='project'>
      <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>TOP RECENT PROJECTS</h2>
          <hr />
          <p className='pb-3 text-center'>👉 Here Are My Top 3 Recent Projects with Github Link and Source Code.
          </p>
          <div className='row' id='ads'>
            <Spin>
             <div className='col-md-4'>
                 <div className='card rounded'> 
                    <div className='card-image'>
                      <span className='card-notify-badge'>Full Stack</span>
                      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR496ndSHiGmT3Ykb8TQIoSCvXM7R1ZKw80vg&usqp=CAU' alt='project1' />
                    </div>
                    <div className='card-image-overly m-auto mt-3'>
                      <span className='card-detail-badge'>Nodejs</span>
                      <span className='card-detail-badge'>Expressjs</span>
                      <span className='card-detail-badge'>MongoDB</span>
                      <span className='card-detail-badge'>Reactjs</span>
                    </div>
                    <div className='card-body text-center'>
                      <div className='ad-title m-auto'>
                        <h5 className='text-uppercase'>Expense Tracker App</h5>
                      </div>
                      <a href='https://github.com/stubborn-daksh/Expense-Management-App' className='ad-btn' target={'blank'} >View</a>
                    </div>
                 </div>
             </div>
             <div className='col-md-4'>
                 <div className='card rounded'> 
                    <div className='card-image'>
                      <span className='card-notify-badge'>Static Web Application</span>
                      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgnX-EhrjX-7pyLL-Btd29hC5NvugSNbJptg&usqp=CAU' alt='project2' />
                    </div>
                    <div className='card-image-overly m-auto mt-3'>
                      <span className='card-detail-badge'>Javascript</span>
                      <span className='card-detail-badge'>HTML</span>
                      <span className='card-detail-badge'>CSS</span>
                    </div>
                    <div className='card-body text-center'>
                      <div className='ad-title m-auto'>
                        <h5 className='text-uppercase'>Javascript Calculator</h5>
                      </div>
                      <a href='https://innocentdaksh63.github.io/Javascript-Simple-Calculator/' className='ad-btn' target={'blank'} >View</a>
                    </div>
                 </div>
             </div>
             <div className='col-md-4'>
                 <div className='card rounded'> 
                    <div className='card-image'>
                      <span className='card-notify-badge'>Static Web Application</span>
                      <img src='data:image/png;base64,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' alt='project3' />
                    </div>
                    <div className='card-image-overly m-auto mt-3'>
                      <span className='card-detail-badge'>Javascript</span>
                      <span className='card-detail-badge'>HTML</span>
                      <span className='card-detail-badge'>CSS</span>
                    </div>
                    <div className='card-body text-center'>
                      <div className='ad-title m-auto'>
                        <h5 className='text-uppercase'>Google Clone</h5>
                      </div>
                      <a href='https://gilded-scone-2daf43.netlify.app/' target={'blank'}  className='ad-btn'>View</a>
                    </div>
                 </div>
             </div>
             </Spin>
          </div>
          <div className='row' id='ads'>
            <Spin>
             <div className='col-md-4'>
                 <div className='card rounded'> 
                    <div className='card-image'>
                      <span className='card-notify-badge'>Frontend</span>
                      <img src='https://apptraitsolutions.com/wp-content/uploads/2021/01/C88IZyEo7g-1.jpg' alt='project1' />
                    </div>
                    <div className='card-image-overly m-auto mt-3'>
                      <span className='card-detail-badge'>React.js</span>
                    </div>
                    <div className='card-body text-center'>
                      <div className='ad-title m-auto'>
                        <h5 className='text-uppercase'>Quiz App</h5>
                      </div>
                      <a href='https://github.com/stubborn-daksh/Quiz-App' className='ad-btn' target={'blank'} >View</a>
                    </div>
                 </div>
             </div>
             <div className='col-md-4'>
                 <div className='card rounded'> 
                    <div className='card-image'>
                      <span className='card-notify-badge'>Frontend</span>
                      <img src={My_images} alt='project5' />
                    </div>
                    <div className='card-image-overly m-auto mt-3'>
                      <span className='card-detail-badge'>React.js</span>
                    </div>
                    <div className='card-body text-center'>
                      <div className='ad-title m-auto'>
                        <h5 className='text-uppercase'>Portfolio</h5>
                      </div>
                      <a href='https://github.com/stubborn-daksh/My-Portfolio/tree/master' className='ad-btn' target={'blank'} >View</a>
                    </div>
                 </div>
             </div>
             <div className='col-md-4'>
                 <div className='card rounded'> 
                    <div className='card-image'>
                      <span className='card-notify-badge'>Backend</span>
                      <img src={chat_app} alt='project3' />
                    </div>
                    <div className='card-image-overly m-auto mt-3'>
                      <span className='card-detail-badge'>Node.js</span>
                      <span className='card-detail-badge'>Express.js</span>
                    </div>
                    <div className='card-body text-center'>
                      <div className='ad-title m-auto'>
                        <h5 className='text-uppercase'>Static Group Chat Application</h5>
                      </div>
                      <a href='https://github.com/stubborn-daksh/static-group-chat-application' target={'blank'}  className='ad-btn'>View</a>
                    </div>
                 </div>
             </div>
             </Spin>
          </div>
      </div>
    </>
  )
}

export default Project