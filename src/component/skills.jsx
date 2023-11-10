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
        <section id='skills' style={{ color: theme === 'Light' ? 'black' : 'white', backgroundColor: theme === 'Light' ? 'rgb(234, 244, 255)' : 'rgb(15, 15, 15)' }}  className={style.skill_section}>
            <h1 style={{ color: theme === 'Light' ? 'black' : 'white' }}>My <span>Skills</span></h1>
            <div className={style.main_skills}>
                <Flip left delay='500' >
                    <div className={style.skillCard} style={{ border: theme === 'Light' ? '1px solid black' : '1px solid white' }}>
                        <img src={Frontend} alt="" />
                        <h3>Frontend Development</h3>
                        <p>Front-End Developer is responsible for developing new user-facing features, determining the structure and design of web pages, I build responsive,
                            efficient and fast loading web applications using a HTML5 | CSS | JavaScript and React.</p>
                    </div>
                </Flip>

                <Flip left delay='500'>
                    <div className={style.skillCard} style={{ border: theme === 'Light' ? '1px solid black' : '1px solid white' }}>
                        <img src={Node} alt="" />
                        <h3>Backend Development</h3>
                        <p>I use Node.js and  it provide us a powerful runtime environment that allows to run JavaScript on the server-side and It help us to Create more efficienct websites with faster backend</p>
                    </div>
                </Flip>

                <Flip left delay='500'>
                    <div className={style.skillCard} style={{ border: theme === 'Light' ? '1px solid black' : '1px solid white' }}>
                        <img src={Dsa} alt="" />
                        <h3  >Data Structure & Algorithms</h3>
                        <p >A data structure is a named location that can be used to store and organize data. And Learning data structures and algorithms allow us to write efficient and optimized computer programs.</p>
                    </div>
                </Flip>

                <Flip left delay='500'>
                    <div className={style.skillCard} style={{ border: theme === 'Light' ? '1px solid black' : '1px solid white' }}>
                        <img src={Cs} alt="" />
                        <h3 >Communication </h3>
                        <p>Effective communication is the process of exchanging ideas, thoughts, opinions, knowledge, and data so that the message is received and understood with clarity and purpose. When we communicate effectively, both the sender and receiver feel satisfied..</p>
                    </div>
                </Flip>
            </div>
            <div  className={style.tech_stack}>
                <div className={`skills-card ${style.techCard}`}>
                    <img  className="skills-card-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8ZBJJbgPJj5Xgn-_XPcwFz2obmJcXyKGIuA" alt="" />
                    <p className="skills-card-name">REACT</p>
                </div>
                <div className={style.techCard}>
                    <img src="https://camo.githubusercontent.com/b81456c0e15928e93c1e5f4d06b6a6938718d8f106a8169a570cd42b5e32f608/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f72656475782d6f726967696e616c2e737667" alt="" />
                    <p>REDUX</p>
                </div>
                <div className={style.techCard}>
                    <img src="https://camo.githubusercontent.com/fb79ddc4f0b2f54501ae33fd4404dc4738cce19deb229745ad37fde926b3f9e3/68747470733a2f2f75692d6c69622e636f6d2f626c6f672f77702d636f6e74656e742f75706c6f6164732f323032312f31322f6e6578746a732d626f696c6572706c6174652d6c6f676f2e706e67" alt="" />
                    <p>NEXT.js</p>
                </div>
                <div className={style.techCard}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqmQvw0Jc4eiSQcQD_8qjjpiN1Lm1YugzX6A" alt="" />
                    <p>NODE</p>
                </div>
                <div className={style.techCard}>
                    <img src="https://camo.githubusercontent.com/5707f6e31f0340f0f98c21f65e5d7f2eeb50d1d64b9fec28220f8fd89b9ccd36/68747470733a2f2f77372e706e6777696e672e636f6d2f706e67732f3932352f3434372f706e672d7472616e73706172656e742d657870726573732d6a732d6e6f64652d6a732d6a6176617363726970742d6d6f6e676f64622d6e6f64652d6a732d746578742d74726164656d61726b2d6c6f676f2e706e67" alt="" />
                    <p>EXPRESS</p>
                </div>
                <div className={style.techCard}>
                    <img src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_wordmark_logo_icon_146425.png" alt="" />
                    <p>MONGO DB</p>
                </div>
                <div className={`skills-card ${style.techCard}`}>
                    <img className="skills-card-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9KZaH2At9O6ORSQrve_NBkF88i45H-0OUFA" alt="" />
                    <p className="skills-card-name">CSS</p>
                </div>
                <div className={`skills-card ${style.techCard}`}>
                    <img className="skills-card-img" src="https://camo.githubusercontent.com/7a2b6137fa6818b1c85f86347a6b4a75ee52681d4a190c506df972e3c5459980/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f6a6176617363726970742d6f726967696e616c2e737667" alt="" />
                    <p className="skills-card-name">JS</p>
                </div>
                <div className={style.techCard}>
                    <img src="https://camo.githubusercontent.com/94890eb1b8c3ce19ea73189dade730fa967a8fe08899f25cab17b57a5d4339dc/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f747970657363726970742d6f726967696e616c2e737667" alt="" />
                    <p>TYPE SCRIPT</p>
                </div>
                <div className={`skills-card ${style.techCard}`}>
                    <img className="skills-card-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVB4twv74Kv-OlgnOCa8NuMOP2DvpeK3kQcw" alt="" />
                    <p className="skills-card-name">HTML</p>
                </div>
                <div className={style.techCard}>
                    <img style={{aspectRatio:"1/1"}} src="https://imgs.search.brave.com/O_Q2U3PyXxR1qqV_0IiDDi4d_g28pU7sRha0lUjpIjQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/a2luZHBuZy5jb20v/cGljYy9tLzE4OC0x/ODgyNDE2X2ZsYXNr/LXB5dGhvbi1sb2dv/LWhkLXBuZy1kb3du/bG9hZC5wbmc" alt="" />
                    <p>FLASK</p>
                </div>
                <div className={style.techCard}>
                    <img src="https://camo.githubusercontent.com/fbfcb9e3dc648adc93bef37c718db16c52f617ad055a26de6dc3c21865c3321d/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667" alt="" />
                    <p>GIT</p>
                </div>
                <div className={`${style.techCard} ${style.cypress_logo}`}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQdxT6NhE4J2sHQBo1z-bt10cjvHjbO5ftKg" alt="" />
                    <p>Cypress</p>
                </div>
                <div className={style.techCard}>
                    <img src="https://camo.githubusercontent.com/dd4b2422ed3bfc9da88c43d18550375c66f9584327dff7ecc19315ce50b96f07/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f66697265626173652f66697265626173652d69636f6e2e737667" alt="" />
                    <p>FIREBASE</p>
                </div>
                
            </div>
        </section>
    )
}
