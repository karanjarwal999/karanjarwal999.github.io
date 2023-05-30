import React, { useContext } from 'react'
import style from '../style/skill.module.css'
import Cs from '../media/icons/CS.svg'
import Frontend from '../media/icons/frontend.svg'
import Node from '../media/icons/node.svg'
import Dsa from '../media/icons/dsa.svg'
import { AppTheme } from '../ThemeProvider/theme'
import Flip from 'react-reveal/Flip';



export default function Skills() {
    let { theme } = useContext(AppTheme)

    return (
        <section style={{ color: theme === 'Light' ? 'black' : 'white', backgroundColor: theme === 'Light' ? 'rgb(234, 244, 255)' : 'rgb(15, 15, 15)' }} id='skills' className={style.skill_section}>
            <h1 style={{ color: theme === 'Light' ? 'black' : 'white' }}>My <span>Skills</span></h1>
            <div className={style.main_skills}>
                <Flip left delay='500' >
                    <div className={`skills-card ${style.skillCard}`} style={{ border: theme === 'Light' ? '1px solid black' : '1px solid white' }}>
                        <img src={Frontend} alt="" />
                        <h3>Frontend Development</h3>
                        <p className='.skills-card'>Front-End Developer is responsible for developing new user-facing features, determining the structure and design of web pages, I build responsive,
                        efficient and fast loading web applications using a HTML5 | CSS | JavaScript and React.</p>
                    </div>
                </Flip>

                <Flip left delay='500'>
                    <div className={`skills-card ${style.skillCard}`} style={{ border: theme === 'Light' ? '1px solid black' : '1px solid white' }}>
                        <img src={Node} alt="" />
                        <h3>Backend Development</h3>
                        <p className='.skills-card'>I use Node.js and  it provide us a powerful runtime environment that allows to run JavaScript on the server-side and It help us to Create more efficienct websites with faster backend</p>
                    </div>
                </Flip>

                <Flip left delay='500'>
                    <div className={`skills-card ${style.skillCard}`} style={{ border: theme === 'Light' ? '1px solid black' : '1px solid white' }}>
                        <img className="skills-card-img"  src={Dsa} alt="" />
                        <h3 className="skills-card-name" >Data Structure & Algorithms</h3>
                        <p className='.skills-card'>A data structure is a named location that can be used to store and organize data. And, an algorithm is a collection of steps to solve a particular problem.Learning data structures and algorithms allow us to write efficient and optimized computer programs.</p>
                    </div>
                </Flip>

                <Flip left delay='500'>
                    <div className={`skills-card ${style.skillCard}`} style={{ border: theme === 'Light' ? '1px solid black' : '1px solid white' }}>
                        <img className="skills-card-img"  src={Cs} alt="" />
                        <h3 className="skills-card-name" >Communication </h3>
                        <p>Effective communication is the process of exchanging ideas, thoughts, opinions, knowledge, and data so that the message is received and understood with clarity and purpose. When we communicate effectively, both the sender and receiver feel satisfied..</p>
                    </div>
                </Flip>
            </div>
            <div className={style.tech_stack}>
                <div className={style.techCard}>
                    <img src="https://abhishek07788.github.io/static/media/html.8664168d5bc90b1a24396f85aadbf623.svg" alt="" />
                    <p>HTML</p>
                </div>
                <div className={style.techCard}>
                    <img src="https://abhishek07788.github.io/static/media/css.39769a8bd378bf410d6b381a8d88fa35.svg" alt="" />
                    <p>CSS</p>
                </div>
                <div className={style.techCard}>
                    <img src="https://camo.githubusercontent.com/7a2b6137fa6818b1c85f86347a6b4a75ee52681d4a190c506df972e3c5459980/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f6a6176617363726970742d6f726967696e616c2e737667" alt="" />
                    <p>JS</p>
                </div>
                <div className={style.techCard}>
                    <img src="https://abhishek07788.github.io/static/media/react.4e0c97009b885bfa75c5412262a46f5f.svg" alt="" />
                    <p>REACT</p>
                </div>
                <div className={style.techCard}>
                    <img src="https://camo.githubusercontent.com/b81456c0e15928e93c1e5f4d06b6a6938718d8f106a8169a570cd42b5e32f608/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f72656475782d6f726967696e616c2e737667" alt="" />
                    <p>REDUX</p>
                </div>
                <div className={style.techCard}>
                    <img src="https://abhishek07788.github.io/static/media/nodejs.10c9e2aa0ca7edf36fceae25fec038a1.svg" alt="" />
                    <p>NODE</p>
                </div>
                <div className={style.techCard}>
                    <img src="https://camo.githubusercontent.com/5707f6e31f0340f0f98c21f65e5d7f2eeb50d1d64b9fec28220f8fd89b9ccd36/68747470733a2f2f77372e706e6777696e672e636f6d2f706e67732f3932352f3434372f706e672d7472616e73706172656e742d657870726573732d6a732d6e6f64652d6a732d6a6176617363726970742d6d6f6e676f64622d6e6f64652d6a732d746578742d74726164656d61726b2d6c6f676f2e706e67" alt="" />
                    <p>EXPRESS</p>
                </div>
                <div className={style.techCard}>
                    <img src="https://abhishek07788.github.io/static/media/mongodb.6835c61a518a732eb8318d43dfe8f700.svg" alt="" />
                    <p>MONGO DB</p>
                </div>
                <div className={style.techCard}>
                    <img src="https://camo.githubusercontent.com/94890eb1b8c3ce19ea73189dade730fa967a8fe08899f25cab17b57a5d4339dc/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f747970657363726970742d6f726967696e616c2e737667" alt="" />
                    <p>TYPE SCRIPT</p>
                </div>
                <div className={style.techCard}>
                    <img src="https://camo.githubusercontent.com/3e3f4aeb2fa0c2d44cd94344a331bed19c5b95522e8405f160b914b0aef20340/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f6368616b726175692e706e67" alt="" />
                    <p>CHAKRA UI</p>
                </div>
                <div className={style.techCard}>
                    <img src="https://camo.githubusercontent.com/fbfcb9e3dc648adc93bef37c718db16c52f617ad055a26de6dc3c21865c3321d/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667" alt="" />
                    <p>GIT</p>
                </div>
                <div className={style.techCard}>
                    <img src="https://camo.githubusercontent.com/adb5a4ad9ef6595b2588c371f02296da3cb3533f4a7387a19f0818501e75f2ea/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6e706d2f6e706d2d6f726967696e616c2d776f72646d61726b2e737667" alt="" />
                    <p>NPM</p>
                </div>
                <div className={style.techCard}>
                    <img src="https://camo.githubusercontent.com/dd4b2422ed3bfc9da88c43d18550375c66f9584327dff7ecc19315ce50b96f07/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f66697265626173652f66697265626173652d69636f6e2e737667" alt="" />
                    <p>FIREBASE</p>
                </div>
                <div className={style.techCard}>
                    <img src="https://camo.githubusercontent.com/db639beaeee1c24ed7979a95becbfb0e8067e8e0526d7ce3a74dcb488e6d41fc/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f6669676d612d69636f6e2e737667" alt="" />
                    <p>FIGMA</p>
                </div>
            </div>
        </section>
    )
}
