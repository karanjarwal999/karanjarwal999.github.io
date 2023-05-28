import React, { useContext, useEffect, useState } from 'react'
import { AppTheme } from '../ThemeProvider/theme'
import style from '../style/navbar.module.css'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Drawer, DrawerCloseButton, DrawerContent, DrawerOverlay, useDisclosure} from '@chakra-ui/react'
import Resume from '../media/resume/Karan-Jarwal-Resume.pdf'


export default function Navbar() {
  const { theme, ToggleTheme } = useContext(AppTheme)
  const btnRef = React.useRef()

  // chakra hook
  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(()=>{
    
      // to close drawer on screen size change
      window.addEventListener('resize',(e)=>{
        onClose()
      })
    
  },[])



  return (

    <nav id='nav-menu' className={style.navbar} style={{ color: theme === 'Light' ? 'black' : 'white', backgroundColor: theme === 'Light' ? 'rgb(225, 250, 280)' : 'black' }}>
      <h1><span style={{ color: 'rgb(254, 145, 25)' }}>K</span>ARAN</h1>
      <div>
        <ul>
          <a href="#home" className='nav-link home'>HOME</a>
          <a href="#about" className='nav-link about'>ABOUT</a>
          <a href="#projects" className='nav-link projects'>PROJECTS</a>
          <a href="#github">GITHUB</a>
          <a href="#skills" className='nav-link skills'>SKILLS</a>
          <a href="#contact" className='nav-link contact'>CONTACT</a>
          <a style={{color:'rgb(254, 145, 25)'}} href={Resume} className='nav-link resume'>RESUME</a>
        </ul>
        <h1 className={style.themeLogo} onClick={() => { ToggleTheme() }}>{theme === 'Light' ? <MoonIcon /> : <SunIcon />}</h1>

        {/* side drawer button visible only  <= 750px */}

        <button id={style.Drawer} ref={btnRef} onClick={onOpen}>☰</button>

        {/* responsive side drawer */}
        <Drawer
          w={{md: '150px'}}
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent 
            background={theme === 'Light' ? 'rgb(213, 226, 241)' : 'black'}
            color={theme === 'Light' ? 'black' : 'white'}
            >
            <DrawerCloseButton 
              boxShadow='outline' 
              rounded='md' 
              bg='white'
              background={theme === 'Light' ? 'rgb(213, 226, 241)' : 'black'}
              color={theme === 'Light' ? 'black' : 'white'}
            />
            <ul  className={style.responsive_menu}>
              <a href="#home" className='nav-link home'>HOME</a>
              <a href="#about" className='nav-link about'>ABOUT</a>
              <a href="#projects" className='nav-link projects'>PROJECTS</a>
              <a href="#github">GITHUB</a>
              <a href="#skills" className='nav-link skills'>SKILLS</a>
              <a href="#contact" className='nav-link contact'>CONTACT</a>
              <a href={Resume} className='nav-link resume'>RESUME</a>
            </ul>
          </DrawerContent>
        </Drawer>
      </div>
    </nav>
  )
}
