import React, { useContext } from 'react'
import style from '../style/home.module.css'
import Typewriter from "typewriter-effect";
import linkdinIcon from '../media/icons/linkedin.svg'
import gitIcon from '../media/icons/github.svg'
import callIcon from '../media/icons/phone-volume-solid.svg'
import mailIcon from '../media/icons/envelope-regular.svg'
import Resume from '../media/resume/Karan_Jarwal_Resume.pdf'
import Profile from '../media/resume/myprofile.png'
import { DownloadIcon, ViewIcon } from '@chakra-ui/icons';
import { AppTheme } from '../ThemeProvider/theme';


export default function Home() {
    const { theme } = useContext(AppTheme)

    return (
        <div id='home' className={style.home_main_div} style={{backgroundColor:theme==='Light'?'rgb(234, 244, 255)':'rgb(10,10,10)',color:theme==='Light'?'black':'white'}}>
            <div>

                <div className={style.homeDiv}>
                    <div className={style.basic_info}>
                        <p> Hii <p className={style.hiiEmoji}>👋</p>, I'm </p>
                        <h1>Karan Jarwal</h1>
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
                            <a href="https://www.linkedin.com/in/karan-jarwal-86b890230/"><button><img src={linkdinIcon} alt="linkdin" /></button></a>
                            <a href="https://github.com/karanjarwal999"><button><img src={gitIcon} alt="git" /></button></a>
                            <a href="mailto:karanjarwal999@gmail.com"><button><img src={mailIcon} alt="git" /></button></a>
                            <a href="tel:+917620943498"><button><img src={callIcon} alt="git" /></button></a>
                        </div>
                        <div className={style.resume_btn}>
                            <a href={Resume}><button>Resume <ViewIcon /> </button></a>
                            <a href={Resume} download><button><DownloadIcon /> </button></a>
                        </div>
                    </div>
                </div>

                <div className={style.img_div}>
                    <div>
                        <p></p>
                        <p></p>
                        <img src={Profile} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
