import React, { useContext } from 'react'
import style from '../style/home.module.css'
import Typewriter from "typewriter-effect";
import linkdinIcon from '../media/icons/linkedin.svg'
import gitIcon from '../media/icons/github.svg'
import callIcon from '../media/icons/phone-volume-solid.svg'
import mailIcon from '../media/icons/envelope-regular.svg'
import Resume from '../media/resume/Karan-Jarwal-Resume.pdf'
import Profile from '../media/resume/myprofile.png'
import { DownloadIcon, ViewIcon } from '@chakra-ui/icons';
import { AppTheme } from '../ThemeProvider/theme';
import Pulse from 'react-reveal/Pulse';


export default function Home() {
    const { theme } = useContext(AppTheme)

    return (
        <section id='home' className={style.home_main_div} style={{ backgroundColor: theme === 'Light' ? 'rgb(234, 244, 255)' : 'rgb(10,10,10)', color: theme === 'Light' ? 'black' : 'white' }}>
            <div>

                <div className={style.homeDiv}>
                    <div className={style.basic_info}>
                        <p> Hii <p className={style.hiiEmoji}>👋</p>, I'm </p>
                        <h1 id="user-detail-name"><Pulse>Karan Jarwal</Pulse></h1>
                        <div className={style.autoType}>
                            <Typewriter

                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString("A  Full  Stack  Developer")
                                        .start()
                                }}
                            />
                        </div>
                        <div className={style.contactButton_div}>
                            <button id="contact-linkedin">
                                <a href="https://www.linkedin.com/in/karan-jarwal-86b890230/">
                                    <img src={linkdinIcon} alt="linkdin" />
                                </a>
                            </button>
                            <button id="contact-github" >
                                <a href="https://github.com/karanjarwal999">
                                    <img src={gitIcon} alt="git" />
                                </a>
                            </button>
                            <button >
                                <a href="mailto:karanjarwal999@gmail.com">
                                    <img src={mailIcon} alt="email" />
                                </a>
                            </button>
                            <button >
                                <a href="tel:+917620943498">
                                    <img src={callIcon} alt="call" />
                                </a>
                            </button>
                        </div>
                        <section id='resume' className={style.resume_btn}>
                            <button id="resume-button-1">
                                <a id="resume-link-1" href={Resume} target='_blank' rel='noreferrer'>Resume <ViewIcon /></a>
                            </button>
                            <button id="resume-button-2">
                                <a id="resume-link-2" href={Resume}  target='_blank'                      rel='noreferrer' download><DownloadIcon /> </a>
                            </button>
                        </section>
                    </div>
                </div>

                <div className={style.img_div}>
                    <div>
                        {/* roteteing  2 elements in back of image */}
                        <p></p>
                        <p></p>
                        <div>
                            <img className="home-img" src={Profile} alt="" />
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    )
}
