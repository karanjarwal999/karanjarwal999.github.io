import React, { useContext, useRef } from 'react'
import style from '../style/contact.module.css'
import { AppTheme } from '../ThemeProvider/theme'
import emailPhoto from '../media/icons/emailI.png'
import linkdinIcon from '../media/icons/linkedin.svg'
import gitIcon from '../media/icons/github.svg'
import callIcon from '../media/icons/phone-volume-solid.svg'
import mailIcon from '../media/icons/envelope-regular.svg'


export default function Contact() {
    let { theme } = useContext(AppTheme)
    let inputContact= useRef()

    function giveMessage(params) {
        alert('This function is under development, Please try other contact options ')
        inputContact.current.blur()
    }

    return (
        <section style={{ color: theme === 'Light' ? 'black' : 'white', backgroundColor: theme === 'Light' ? 'rgb(234, 244, 255)' : 'rgb(15, 15, 15)' }} className={style.contact_section} id='contact'>
            <h2><span>Contact </span> Me</h2>
            <div>
                <div className={style.LeftImg_div}>
                    <img src={emailPhoto} alt="" />
                </div>
                <div className={style.RightForm}>
                    <h4>Get In Touch</h4>
                    <div>
                        <a href="https://www.linkedin.com/in/karan-jarwal-86b890230/"><button><img src={linkdinIcon} alt="linkdin" /></button></a>
                        <a href="https://github.com/karanjarwal999"><button><img src={gitIcon} alt="git" /></button></a>
                        <a href="mailto:karanjarwal999@gmail.com"><button><img src={mailIcon} alt="mail" /></button></a>
                        <a href="tel:+917620943498"><button><img src={callIcon} alt="call" /></button></a>
                    </div>
                    <p>or</p>
                    <form  className={style.contactForm}>
                            <input onFocus={()=>{giveMessage()}} ref={inputContact} type="text" placeholder='Full Name' id="ContactName" />
                            <input type="email" placeholder='Email'  id="ContactEmail" />
                            <input type="number" placeholder='Number' id="COntactNumber" />
                            <textarea  id="COntactDesc" placeholder='Your Message' ></textarea>
                            <div>
                                <input type="submit" value='Submit'/>
                                <input type="reset" value='Clear' />
                            </div>
                    </form>
                </div>
            </div>
            <p>Desinged and developed by karan jarwal</p>
        </section>
    )
}
