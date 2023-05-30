import React, { useContext, useEffect, useState } from 'react'
import style from '../style/projects.module.css'
import { ViewIcon } from '@chakra-ui/icons'
import gitIcon from '../media/icons/github.svg'
import { AppTheme } from '../ThemeProvider/theme'
import { Toast } from '@chakra-ui/react'
import { homeAndStore,Calculator,bathKit,Gulmoher } from './projectImg'

export default function Project({ flag }) {

   
    let { theme } = useContext(AppTheme)
    let [sliderbtn, setSliderBtn] = useState(1)
    const [imgNum, setImgNum] = useState(0)
    useEffect(() => {
        let timer = setInterval(() => {
            setImgNum((prev) =>
                prev === 6 ? prev - 6 : prev + 1
            )
        }, 2000);
        
        let elements =document.getElementsByClassName('project-card')
        console.log(elements)

        return () => {
            clearInterval(timer)
        }

    }, [])

    function slideProjectRight() {
        setSliderBtn((prev) => prev + 1)
        let value = document.getElementById('secondCard').clientWidth
        document.getElementById('project_Slider').scrollLeft += value;
    }
    function slideProjectLeft() {
        setSliderBtn((prev) => prev - 1)
        let value = document.getElementById('secondCard').clientWidth
        document.getElementById('project_Slider').scrollLeft -= value;
    }

    return (
        <section id='projects' style={{backgroundColor: theme === 'Light' ? 'rgb(234, 244, 255)' : 'rgb(15,15,15)', position: 'relative' }}>
            <div className={style.projectAlert} style={{ display: flag ? 'block' : 'none' }}>
                {Toast({
                    description: "Slide to see more projects",
                    status: 'success', duration: 2000,
                })}
            </div>
            <h1 className={style.project_heading} style={{color:theme==='Light'?'black':'white'}}> My <span>Projects</span> </h1>
            <div className={style.outerProjectDiv}>
                <button className="material-symbols-outlined" onClick={() => slideProjectLeft()} disabled={sliderbtn === 1 ? true : false}>arrow_back_ios_new</button>
                <div className={style.projectDiv}>
                    <div id='project_Slider'>
                        <div id='firstCard' className={style.card}>
                            <div className={`project-card ${style.conic} `}>
                                <div>
                                    <div className={style.cardImgDiv}>
                                        <img src={homeAndStore[imgNum]} alt=" project img" />
                                    </div>

                                    <h2 className="project-title">Home & store</h2>
                                    <p className="project-description">This project is clone of Crate & Barrel, an international destination for lasting, modern furniture, textiles, kitchen, tableware and home decorations .</p>
                                    <p className="project-tech-stack"><b>Tech stack</b> : HTML | CSS | JS </p>
                                    <p>An<b> individual</b> project built in span of 5 days</p>

                                </div>
                                <div className={style.cardVeiwProjectBtn}>
                                    <a className="project-github-link" href="https://github.com/karanjarwal999/flowing-liquid-9868"><img src={gitIcon} alt="git" /></a>
                                    <a className="project-deployed-link" href=" https://flowingliquid.netlify.app/"><button><ViewIcon /></button></a>
                                </div>
                            </div>
                        </div>
                        <div id='secondCard' className={style.card}>
                            <div className={`project-card ${style.conic} `}>
                                <div>
                                    <div className={style.cardImgDiv}>
                                        <img src={Gulmoher[imgNum]} alt=" project img" />
                                    </div>
                                    <h2 className="project-title">Gulmohar</h2>
                                    <p className="project-description">Clone of 1-800 Flowers, An E-commerce website of flowers and gift delivery. It includes various categories and brands according to the needs of customers</p>
                                    <p className="project-tech-stack"><b>Tech stack</b> : HTML | CSS | JS </p>
                                    <p><b>Responsibility</b> : Admin page</p>
                                    <p>A <b>collaborative</b> project built by a team of 4 members within span of 5 day</p>
                                </div>
                                <div className={style.cardVeiwProjectBtn}>
                                    <a className="project-github-link" href="https://github.com/nikhil-pillare/groovy-airplane-6414"><img src={gitIcon} alt="git" /></a>
                                    <a className="project-deployed-link" href="https://gulmohar-the-flower-shop.netlify.app/"><button><ViewIcon /></button></a>

                                </div>
                            </div>
                        </div>
                        <div className={style.card}>
                            <div className={`project-card ${style.conic} `}>
                                <div>

                                    <div className={style.cardImgDiv}>
                                        <img src={bathKit[imgNum]} alt=" project img" />
                                    </div>
                                    <h2 className="project-title">Bath Kit</h2>
                                    <p className="project-description">Project is clone of "bedbathandbeyond.com" An E-commerce website that sells all needs and furniture of bathroom to give it a new look !</p>
                                    <p className="project-tech-stack"><b>Tech stack</b> : HTML | CSS | JS </p>
                                    <p><b>Responsibility</b> : Product page</p>
                                    <p >A <b>collaborative</b> project built by a team of 4 members within span of 5 day</p>
                                </div>
                                <div className={style.cardVeiwProjectBtn}>
                                    <a className="project-github-link" href="https://github.com/WDwithSuraj/bed-bathandbeyond-clone"><img src={gitIcon} alt="git" /></a>
                                    <a className="project-deployed-link" href="dancing-frangollo-fd368f.netlify.app/"><button><ViewIcon /></button></a>

                                </div>
                            </div>
                        </div>
                        <div className={style.card}>
                            <div className={`project-card ${style.conic} `}>
                                <div>
                                    <div className={style.cardImgDiv}>
                                        <img src={Calculator[imgNum]} alt=" project img" />
                                    </div>
                                    <h2 className="project-title">Calculator</h2>
                                    <p className="project-description">A responsive web Calculator that can perform all Mathematical operations and it also track our operations history </p>
                                    <p className="project-tech-stack"><b>Tech stack</b> : HTML | CSS | JS </p>
                                    <p >This page is build for Practicing skills and to know  more how the Calculator works </p>
                                </div>
                                <div className={style.cardVeiwProjectBtn}>
                                    <a className="project-github-link" href="https://github.com/karanjarwal999/CALCULAT0R"><img src={gitIcon} alt="git" /></a>
                                    <a className="project-deployed-link" href="https://dashing-frangollo-360334.netlify.app/"><button><ViewIcon /></button></a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="material-symbols-outlined" onClick={() => { slideProjectRight() }} disabled={sliderbtn === 4 ? true : false}>arrow_forward_ios</button>
            </div>
        </section>
    )
}
