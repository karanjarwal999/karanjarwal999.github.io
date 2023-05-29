import React, { useContext, useEffect, useState } from 'react'
import style from '../style/projects.module.css'
import { ViewIcon } from '@chakra-ui/icons'
import gitIcon from '../media/icons/github.svg'
import { AppTheme } from '../ThemeProvider/theme'

export default function Project() {



    // Project images
    let homeAndStore = ['https://user-images.githubusercontent.com/119421686/226376698-1d47f485-7b85-4aa1-9d64-568525b122c9.png', 'https://user-images.githubusercontent.com/119421686/226377637-0f50089a-add5-4de6-81a7-ae73b0934e2c.png', 'https://user-images.githubusercontent.com/119421686/226378021-85665daa-4655-4a92-9d0a-7159cb42c195.png', 'https://user-images.githubusercontent.com/119421686/226378184-69e18a2f-3476-4dc2-9acf-27a597e24d5b.png', 'https://user-images.githubusercontent.com/119421686/226378360-e82ebc91-016d-4f62-945b-1c85021bd23b.png', 'https://user-images.githubusercontent.com/119421686/226378658-ee643d74-92d3-48e8-910a-702c2c9a43b6.png', 'https://user-images.githubusercontent.com/119421686/226378831-c1645ede-f11a-4059-9097-a145e859888a.png']

    let Gulmoher = ['https://user-images.githubusercontent.com/113030961/229373643-9f50cfe7-e0c5-44ef-b22a-87a9c10a2c6d.JPG', 'https://user-images.githubusercontent.com/113030961/229373765-76e74729-1b63-4fe8-b1f3-66fa1b114313.JPG', 'https://user-images.githubusercontent.com/113030961/229374190-28286884-4ab8-4893-a21a-fd8a49f3da34.jpg', 'https://user-images.githubusercontent.com/113030961/229377894-8056d101-18c7-491e-b307-834c467b046f.JPG', 'https://user-images.githubusercontent.com/113030961/229378074-986f4911-73bb-4c66-9ac7-c6908c5fcc6f.JPG', 'https://user-images.githubusercontent.com/113030961/229378273-2d6164e0-cc47-4692-b700-4f275f707a9b.JPG', 'https://user-images.githubusercontent.com/113030961/229378973-c0deec98-e451-4f7f-883a-cda4a16aef3d.JPG']

    let bathKit = ['https://user-images.githubusercontent.com/108655504/221425405-b59c9a4c-63db-4bfc-a9d4-d0d8408adeb0.png', 'https://user-images.githubusercontent.com/108655504/221424888-a4a37067-8903-4de2-9628-629633a40e45.png', 'https://user-images.githubusercontent.com/108655504/221424974-4944ee2f-0524-41a1-b052-0f342e1cea16.png', 'https://user-images.githubusercontent.com/108655504/221425132-cdcb239a-d5d9-4ae8-9cf5-1cc12064d84f.png', 'https://user-images.githubusercontent.com/108655504/221425096-4bc46817-70c3-4897-800c-b7614a28f0e1.png', 'https://user-images.githubusercontent.com/108655504/221425187-6cb9814a-2d50-4eba-8d2f-ced81118e7d0.png', 'https://user-images.githubusercontent.com/108655504/221424888-a4a37067-8903-4de2-9628-629633a40e45.png']


    let { theme } = useContext(AppTheme)
    let [sliderbtn, setSliderBtn] = useState(1)
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
        <section id='projects' style={{ color: theme === 'Light' ? 'black' : 'white', backgroundColor: theme === 'Light' ? 'rgb(234, 244, 255)' : 'rgb(15,15,15)' }}>
            <h1 className={style.project_heading}> My <span>Projects</span> </h1>
            <div className={style.outerProjectDiv}>
                <button className="material-symbols-outlined" onClick={() => slideProjectLeft()} disabled={sliderbtn == 1 ? true : false}>arrow_back_ios_new</button>
                <div className={style.projectDiv}>
                    <div id='project_Slider'>
                        <div id='firstCard' className={style.card}>
                            <div className={`${style.conic} project-card`}>
                                <div>
                                    <div className={style.cardImgDiv}>
                                        <img src={homeAndStore[imgNum]} alt=" project img" />
                                    </div>

                                    <h2 className="project-title">Home & store</h2>
                                    <p classNmae="project-description">This project is clone of Crate & Barrel, an international destination for lasting, modern furniture, textiles, kitchen, tableware and home decorations .</p>
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
                            <div className={`${style.conic} project-card`}>
                                <div>
                                    <div className={style.cardImgDiv}>
                                        <img src={Gulmoher[imgNum]} alt=" project img" />
                                    </div>
                                    <h2 className="project-title">Gulmohar</h2>
                                    <p classNmae="project-description">Clone of 1-800 Flowers, An E-commerce website of flowers and gift delivery. It includes various categories and brands according to the needs of customers</p>
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
                            <div className={`${style.conic} project-card`}>
                                <div>

                                    <div className={style.cardImgDiv}>
                                        <img src={bathKit[imgNum]} alt=" project img" />
                                    </div>
                                    <h2 className="project-title">Bath Kit</h2>
                                    <p classNmae="project-description">Project is clone of "bedbathandbeyond.com" An E-commerce website that sells all needs and furniture of bathroom to give it a new look !</p>
                                    <p className="project-tech-stack"><b>Tech stack</b> : HTML | CSS | JS </p>
                                    <p><b>Responsibility</b> : Product page</p>
                                    <p>A <b>collaborative</b> project built by a team of 4 members within span of 5 day</p>
                                </div>
                                <div className={style.cardVeiwProjectBtn}>
                                    <a className="project-github-link" href="https://github.com/WDwithSuraj/bed-bathandbeyond-clone"><img src={gitIcon} alt="git" /></a>
                                    <a className="project-deployed-link" href="dancing-frangollo-fd368f.netlify.app/"><button><ViewIcon /></button></a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="material-symbols-outlined" onClick={() => { slideProjectRight() }} disabled={sliderbtn == 3 ? true : false}>arrow_forward_ios</button>
            </div>
        </section>
    )
}
