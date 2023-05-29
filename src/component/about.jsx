import React, { useContext } from 'react'
import style from '../style/about.module.css'
import { CheckCircleIcon } from '@chakra-ui/icons'
import { AppTheme } from '../ThemeProvider/theme'
import Fade from 'react-reveal/Fade';


export default function About() {
  const { theme } = useContext(AppTheme)


  return (
    <section id='about' className={`${style.about_section} about section`} style={{ backgroundColor: theme === 'Light' ? 'rgb(234, 244, 255)' : 'rgb(15, 15, 15)' }}>
      <h1 className={style.aboutHeading} style={{ color: theme === 'Light' ? 'black' : 'white' }}><span >About</span> Me</h1>
      <div>
        <div className={style.leftImg_div}>
          <Fade left delay='500'>
            <img src="https://cdn.dribbble.com/users/1292677/screenshots/6139167/media/fcf7fd0c619bb87706533079240915f3.gif" alt="" />
          </Fade>
        </div>

        <div className={style.right_info}>
          <div id="user-detail-intro" style={{ color: theme === 'Light' ? 'black' : 'white' }}>
            <CheckCircleIcon color={'rgb(254, 145, 25)'} marginTop='5px' />
            <p>Hey, I'm  karan jarwal and I enjoy creating thing that live on the internet.</p>
            <CheckCircleIcon color={'rgb(254, 145, 25)'} marginTop='5px' />
            <p>Quick learner and an aspiring full-stack web developer with core knowledge of MERN stack.</p>
            <CheckCircleIcon color={'rgb(254, 145, 25)'} marginTop='5px' />
            <p>Full Stack Developer with hands on experience in building React Apps. Works efficiently both in frontend as well as backend and is proficient in Data Structure and Algorithms with good problem solving skills.</p>
            <CheckCircleIcon color={'rgb(254, 145, 25)'} marginTop='5px' />
            <p>I have built 4 Team and 3 Individual projects. Learned a great deal about teamwork, leadership, and communication. After months of rigorous training, and  I am looking for an opportunity as a full Stack web Developer.</p>
          </div>
          <Fade bottom delay='200'>
            <div className={style.activityInfo}>
              <div style={{ backgroundColor: theme === 'Light' ? 'rgb(225, 250, 280)' : 'black' }}>
                <p>1200+</p>
                <p style={{ color: theme === 'Light' ? 'black' : 'white' }}>Hours</p>
                <p style={{ color: theme === 'Light' ? 'black' : 'white' }}>Coding</p>
              </div>
              <div style={{ backgroundColor: theme === 'Light' ? 'rgb(225, 250, 280)' : 'black' }}>
                <p>530+</p>
                <p style={{ color: theme === 'Light' ? 'black' : 'white' }}>DSA Questions</p>
                <p style={{ color: theme === 'Light' ? 'black' : 'white' }}>Solved (OJ)</p>
              </div>
              <div style={{ backgroundColor: theme === 'Light' ? 'rgb(225, 250, 280)' : 'black' }}>
                <p>1000+</p>
                <p style={{ color: theme === 'Light' ? 'black' : 'white' }}>Hours</p>
                <p style={{ color: theme === 'Light' ? 'black' : 'white' }}>Dsa</p>
              </div>
            </div>
          </Fade>
        </div>

      </div>
    </section>
  )
}
