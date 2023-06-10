import React, { useContext } from 'react'
import style from '../style/contact.module.css'
import { AppTheme } from '../ThemeProvider/theme'
import emailPhoto from '../media/icons/emailI.png'
import linkdinIcon from '../media/icons/linkedin.svg'
import gitIcon from '../media/icons/github.svg'
import callIcon from '../media/icons/phone-volume-solid.svg'
import mailIcon from '../media/icons/envelope-regular.svg'
import { Fade } from 'react-reveal'


export default function Contact() {
    let { theme } = useContext(AppTheme)


    return (
        <section style={{ color: theme === 'Light' ? 'black' : 'white', backgroundColor: theme === 'Light' ? 'rgb(234, 244, 255)' : 'rgb(15, 15, 15)' }} className={style.contact_section} id='contact'>
            <h2>
                <span>Contact </span> Me
            </h2>
            <div>
                <div className={style.LeftImg_div}>
                    <img src={emailPhoto} alt="" />
                </div>

                <Fade right delay='300' >

                    <div className={style.RightForm}>
                        <h4>Get In Touch</h4>
                        <div>
                            <a href="https://www.linkedin.com/in/karan-jarwal-86b890230/">
                                <button >
                                    <img src={linkdinIcon} alt="linkdin" />
                                </button>
                            </a>
                            <a href="https://github.com/karanjarwal999">
                                <button >
                                    <img src={gitIcon} alt="git" />
                                </button>
                            </a>
                            <a href="mailto:karanjarwal999@gmail.com">
                                <button >
                                    <img src={mailIcon} alt="mail" />
                                </button>
                            </a>
                            <a href="tel:+917620943498">
                                <button >
                                    <img src={callIcon} alt="call" />
                                </button>
                            </a>
                        </div>
                        <p>or</p>
                        <form className={style.contactForm} action='https://formspree.io/f/mnqyylkd' method="POST">
                            <input name='name' type="text" placeholder='Full Name' id="ContactName" required />
                            <input name='email' type="email" placeholder='Email' id="ContactEmail" required />
                            <input name='contact' type="number" placeholder='Number' id="COntactNumber" required />
                            <textarea name='message' id="COntactDesc" placeholder='Your Message' required></textarea>
                            <div>
                                <input type="submit" value='Submit' />
                                <input type="reset" value='Clear' />
                            </div>
                        </form>
                    </div>
                </Fade>
            </div>
            <p>Desinged and developed by karan jarwal</p>
        </section>
    )
}
