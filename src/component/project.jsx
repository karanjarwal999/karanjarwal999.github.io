import React, { useContext, useEffect, useState } from 'react'
import style from '../style/projects.module.css'
import { ViewIcon } from '@chakra-ui/icons'
import gitIcon from '../media/icons/github.svg'
import { AppTheme } from '../ThemeProvider/theme'
import { Toast, theme } from '@chakra-ui/react'
import { homeAndStore, Calculator, bathKit, Gulmoher, findMyTrip, Getflix } from './projectImg'
import styled from 'styled-components'

export default function Project({ flag }) {


    let { theme } = useContext(AppTheme)
    let [sliderbtn, setSliderBtn] = useState(1)
    let [listMax, setlistMax] = useState(3)

    const [imgNum, setImgNum] = useState(0)
    useEffect(() => {
        let timer = setInterval(() => {
            setImgNum((prev) =>
                prev === 6 ? prev - 6 : prev + 1
            )
        }, 2000);

        return () => {
            clearInterval(timer)
        }
    }, [])

    useEffect(() => {
        let width = document.getElementById('projects')
        if (width.clientWidth <= 730) {
            setlistMax(6)
        } else {
            setlistMax(5)
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
        <section id='projects' style={{ backgroundColor: theme === 'Light' ? 'rgb(234, 244, 255)' : 'rgb(15,15,15)', position: 'relative' }}>
            <div className={style.projectAlert} style={{ display: flag ? 'block' : 'none' }}>
                {Toast({
                    description: "Slide to see more projects",
                    status: 'success', duration: 2000,
                })}
            </div>
            <h1 className={style.project_heading} style={{ color: theme === 'Light' ? 'black' : 'white' }}> My <span>Projects</span> </h1>
            <div className={style.outerProjectDiv}>
                <button className="material-symbols-outlined" onClick={() => slideProjectLeft()} disabled={sliderbtn === 1 ? true : false}>arrow_back_ios_new</button>
                <div id='project_Slider' className={style.projectDiv}>
                    <div style={{ color: theme === 'Light' ? 'black' : 'white' }}>
                        <div id='firstCard' className={style.card}>
                            <Conic theme={`${theme}`}>
                                <div className={`project-card ${style.conic} `}>
                                    <div>
                                        <div className={style.cardImgDiv}>
                                            <img className={style.cardImgDiv} src={Getflix[imgNum]} alt=" project img" />
                                        </div>
                                        <h2 className="project-title">Netflix Clone</h2>
                                        <p className="project-description">Experience the ultimate entertainment destination with our Netflix-inspired platform. Our cutting-edge Netflix clone offers a vast library of movies, TV shows, documentaries, and original content, all at your fingertips.</p>
                                        <p className="project-tech-stack"><b>Tech stack</b> : React | Redux </p>
                                        <p>An<b> individual</b> project </p>

                                    </div>
                                    <div className={style.cardVeiwProjectBtn}>
                                        <a target='_blank' rel='noreferrer' className="project-github-link" href="https://github.com/karanjarwal999/Getflix"><img src={gitIcon} alt="git" /></a>
                                        <a target='_blank' rel='noreferrer' className="project-deployed-link" href="https://papaya-quokka-0c2e99.netlify.app" title='Go Live'><button><ViewIcon /></button></a>
                                    </div>
                                </div>
                            </Conic>
                        </div>
                        <div className={style.card}>
                            <Conic theme={`${theme}`}>
                                <div className={`project-card ${style.conic} `}>
                                    <div>
                                        <div className={style.cardImgDiv}>
                                            <img className={style.cardImgDiv} src={findMyTrip[imgNum]} alt=" project img" />
                                        </div>

                                        <h2 className="project-title">Find My Trip</h2>
                                        <p className="project-description">User-friendly premier tour booking website. Our platform offers a diverse range of meticulously crafted tours, from exotic getaways to cultural explorations.</p>
                                        <p className="project-tech-stack"><b>Tech stack</b> : React | Redux | Typescript </p>
                                        <p><b>Responsibility</b> : Home / Landing page</p>
                                        <p>A <b>collaborative</b> project built by a team of 4 members within span of 5 day</p>
                                    </div>
                                    <div className={style.cardVeiwProjectBtn}>
                                        <a target='_blank' rel='noreferrer' className="project-github-link" href="https://github.com/karanjarwal999/find-my-trip"><img src={gitIcon} alt="git" /></a>
                                        <a target='_blank' rel='noreferrer' className="project-deployed-link" href="https://findmytrip.netlify.app/" title='Go Live'><button><ViewIcon /></button></a>
                                    </div>
                                </div>
                            </Conic>
                        </div>
                        <div className={style.card}>
                            <Conic theme={`${theme}`}>
                                <div className={`project-card ${style.conic} `}>
                                    <div>
                                        <div className={style.cardImgDiv}>
                                            <img className={style.cardImgDiv} src={homeAndStore[imgNum]} alt=" project img" />
                                        </div>

                                        <h2 className="project-title">Home & store</h2>
                                        <p className="project-description"> A user friendly E-commerce website that offers international destination for lasting, modern furniture, textiles, kitchen, tableware and home decorations at your door step. <b>[</b> Clone of Crate & Barrel website <b>]</b></p>
                                        <p className="project-tech-stack"><b>Tech stack</b> : HTML | CSS | JS </p>
                                        <p>An<b> individual</b> project built in span of 5 days</p>

                                    </div>
                                    <div className={style.cardVeiwProjectBtn}>
                                        <a target='_blank' rel='noreferrer' className="project-github-link" href="https://github.com/karanjarwal999/Home-and-store"><img src={gitIcon} alt="git" /></a>
                                        <a target='_blank' rel='noreferrer' className="project-deployed-link" href=" https://flowingliquid.netlify.app/" title='Go Live'><button><ViewIcon /></button></a>
                                    </div>
                                </div>
                            </Conic>
                        </div>
                        <div id='secondCard' className={style.card}>
                            <Conic theme={`${theme}`}>
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
                                        <a target='_blank' rel='noreferrer' className="project-github-link" href="https://github.com/karanjarwal999/Golmohar"><img src={gitIcon} alt="git" /></a>
                                        <a target='_blank' rel='noreferrer' className="project-deployed-link" href="https://kaleidoscopic-axolotl-77aca0.netlify.app/"><button><ViewIcon /></button></a>

                                    </div>
                                </div>
                            </Conic>
                        </div>
                        <div className={style.card}>
                            <Conic theme={`${theme}`}>
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
                                        <a target='_blank' rel='noreferrer' className="project-github-link" href="https://github.com/karanjarwal999/BathKit"><img src={gitIcon} alt="git" /></a>
                                        <a target='_blank' rel='noreferrer' className="project-deployed-link" href="https://dancing-frangollo-fd368f.netlify.app/"><button><ViewIcon /></button></a>

                                    </div>
                                </div>
                            </Conic>
                        </div>
                        <div className={style.card}>
                            <Conic theme={`${theme}`}>
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
                                        <a target='_blank' rel='noreferrer' className="project-github-link" href="https://github.com/karanjarwal999/CALCULAT0R"><img src={gitIcon} alt="git" /></a>
                                        <a target='_blank' rel='noreferrer' className="project-deployed-link" href="https://dashing-frangollo-360334.netlify.app/" ><button><ViewIcon /></button></a>

                                    </div>
                                </div>
                            </Conic>
                        </div>
                    </div>
                </div>
                <button className="material-symbols-outlined" onClick={() => { slideProjectRight() }} disabled={sliderbtn === listMax ? true : false}>arrow_forward_ios</button>
            </div>
        </section>
    )
}


let Conic = styled.div`
@keyframes rotate {
    100% {
        transform: rotate(1turn);
    }
}

    position: relative;
    z-index: 0;
    border-radius: 10px;
    height: 100%;
    overflow: hidden;
    padding: 20px;

::before {
    content: '';
    position: absolute;
    z-index: -2;
    left: -50%;
    top: -50%;
    width: 200%;
    height: 200%;
    background-repeat: no-repeat;
    background-position: 0 0;
    background-color: ${({ theme }) => theme === 'Light' ? 'white' : 'black'};
    background-image: conic-gradient(transparent, ${({ theme }) => theme === 'Dark' ? 'rgb(153,235,254)' : 'rgb(254, 145, 25)'} 100%, rgb(254, 145, 25) 50%);
    animation: rotate 4s linear infinite;
}

::after {
    content: '';
    position: absolute;
    z-index: -1;
    left: 6px;
    top: 6px;
    background-color: ${({ theme }) => theme === 'Light' ? 'white' : 'black'};
    width: calc(100% - 10px);
    height: calc(100% - 10px);
    border-radius: 5px;
}
`