import React from 'react';
import './Workexp.css';
import {BsPersonWorkspace} from 'react-icons/bs';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
const Workexp = () => {
  return (
    <>
    <div className='work' id='workexp'>
      <div className='container work-exp'>
      <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>Work Experience</h2>
          <hr />
        <VerticalTimeline lineColor='#138781'>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: '#1e1e2c' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="May 2022 - present"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<BsPersonWorkspace />}
        >
            <h3 className="vertical-timeline-element-title">Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Anudip Foundation</h4>
            <p>
            Developed backend using PHP, Laravel, Node.js.
            Designed RESTful APIs for frontend-backend communication.
            Collaborated cross-functionally for requirements, code reviews, project success.
            Ensured data security with strong authentication.
            Implemented tests, debugged for quality.
            Agile participant, tested software, created Google Data Studio reports.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: '#1e1e2c' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="April 2022 - May 2022"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<BsPersonWorkspace />}
        >
            <h3 className="vertical-timeline-element-title">Web Developer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Suven Technologies</h4>
            <p>
            Designed and developed four intuitive static websites employing HTML, CSS, Bootstrap, and JavaScript to enhance user experience and showcase proficiency in web development.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: '#1e1e2c' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="October 2022 - October 2022"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<BsPersonWorkspace />}
        >
            <h3 className="vertical-timeline-element-title">Open Source Contributor</h3>
            <h4 className="vertical-timeline-element-subtitle">Hacktoberfest</h4>
            <p>
            Participated in Hacktoberfest 2022, actively contributing to diverse open-source projects. Effectively merged code submissions, ensuring seamless integration. Recognized with rewards and stickers for accomplishing tasks adeptly.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>

    </>
  )
}

export default Workexp