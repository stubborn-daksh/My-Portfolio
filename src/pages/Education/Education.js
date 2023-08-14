import React from 'react';
import './Education.css';
import {MdSchool} from 'react-icons/md';
import {RiSchoolFill} from 'react-icons/ri'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Education = () => {
  return (
    <>
    <div className='education' id='education'>
    <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>Education Details</h2>
          <hr />
    <VerticalTimeline>
        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'white', color: 'black' }}
        contentArrowStyle={{ borderRight: '7px solid white' }}
        date="2019 - 2023"
        iconStyle={{ background: '#138731', color: '#fff' }}
        icon={<MdSchool />}
    >
        <h3 className="vertical-timeline-element-title">B.Tech</h3>
        <h4 className="vertical-timeline-element-subtitle">Dr. A.P.J. Abdul Kalam Technical University, Lucknow</h4>
        <h4 className="vertical-timeline-element-subtitle">Score : 8.24 CGPA</h4>
    </VerticalTimelineElement>
        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'white', color: 'black' }}
        contentArrowStyle={{ borderRight: '7px solid white' }}
        date="2017 - 2019"
        iconStyle={{ background: '#138731', color: '#fff' }}
        icon={<RiSchoolFill />}
    >
        <h3 className="vertical-timeline-element-title">12th</h3>
        <h4 className="vertical-timeline-element-subtitle">Agriculture Intermediate College, Prayagraj</h4>
        <h4 className="vertical-timeline-element-subtitle">Score : 75.6%</h4>
    </VerticalTimelineElement>
        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'white', color: 'black' }}
        contentArrowStyle={{ borderRight: '7px solid white' }}
        date="2015 - 2017"
        iconStyle={{ background: '#138731', color: '#fff' }}
        icon={<RiSchoolFill />}
    >
        <h3 className="vertical-timeline-element-title">10th</h3>
        <h4 className="vertical-timeline-element-subtitle">S.R.B. Public School, Mughalsarai, Uttar Pradesh</h4>
        <h4 className="vertical-timeline-element-subtitle">Score : 9.8CGPA</h4>
    </VerticalTimelineElement>
    </VerticalTimeline>
    </div>
  
    </>
  )
}

export default Education