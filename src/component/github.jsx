import React, { useContext } from 'react'
import style from '../style/github.module.css'
import gitIcon from '../media/icons/github.svg'
import {AppTheme} from '../ThemeProvider/theme'

export default function Github() {
  const { theme } = useContext(AppTheme)

  return (
    <div id='github' className={style.gitSection_MainDiv}>
      <h1 style={{color:theme==='Light'?'black':'white'}}>Github <span style={{color:'rgb(254, 145, 25)'}}>Overview</span><img style={{width:'30px'}} src={gitIcon} alt="" /></h1>

    </div>
  )
}
