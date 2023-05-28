import React, { useContext } from 'react'
import style from '../style/github.module.css'
import gitIcon from '../media/icons/github.svg'
import { AppTheme } from '../ThemeProvider/theme'
import GitHubCalendar from 'react-github-calendar';

export default function Github() {
  
  const { theme } = useContext(AppTheme)

  return (
    <section id='github' className={style.gitSection_MainDiv} style={{backgroundColor:theme==='Light'?'rgb(234, 244, 255)':'rgb(15,15,15)'}}>
      <h1 style={{ color: theme === 'Light' ? 'black' : 'white' }}>Github <span style={{ color: 'rgb(254, 145, 25)' }}>Overview</span><img style={{ width: '30px' }} src={gitIcon} alt="" /></h1>
      <div>
        <div>
          {theme==='Light'?<img src="https://github-readme-streak-stats.herokuapp.com/?user=karanjarwal999&theme=flag-india&" alt="karanjarwal999" />:
          <img src="https://github-readme-streak-stats.herokuapp.com/?user=karanjarwal999&theme=tokyonight&" alt="karanjarwal999" />}
        </div>
        <div style={{color:theme==='Light'?'Black':'white',backgroundColor:theme==='Light'?'white':'black',border:theme==='Light'?'1px solid lightgray':'1px solid white'}}>
        <GitHubCalendar username="karanjarwal999"  />
        </div>
        <div>
          {theme==='Light'?<img src="https://github-readme-stats.vercel.app/api?username=karanjarwal999&theme=flag-india&show_icons=true&locale=en" alt="karanjarwal999" />:
            <img src="https://github-readme-stats.vercel.app/api?username=karanjarwal999&theme=tokyonight&show_icons=true&locale=en" alt="karanjarwal999" />}
        </div>
        <div>
          {theme==='Light'?<img src="https://github-readme-stats.vercel.app/api/top-langs?username=karanjarwal999&theme=flag-india&show_icons=true&locale=en&layout=compact" alt="karanjarwal999" />:
            <img src="https://github-readme-stats.vercel.app/api/top-langs?username=karanjarwal999&theme=tokyonight&show_icons=true&locale=en&layout=compact" alt="karanjarwal999" />}
        </div>

      </div>
    </section>
  )
}
