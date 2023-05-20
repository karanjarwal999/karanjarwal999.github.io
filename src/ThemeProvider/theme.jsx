import { createContext, useState } from "react";

export let AppTheme=createContext()

export default function Theme({children}) {
    const [theme,setTheme]=useState('Dark')
    function ToggleTheme() {
        setTheme(theme==='Light'?'Dark':'Light')
    }
  return (
    <AppTheme.Provider value={{theme,ToggleTheme}}>
      {children}
    </AppTheme.Provider>
  )
}
