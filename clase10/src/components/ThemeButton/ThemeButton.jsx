import { useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import './ThemeButton.css'

const ThemeButton =()=>{
    const {darkMode,lightMode}= useContext(ThemeContext)
    const [theme,setTheme] = useState('Oscuro')

    const handlerThemeChange=()=>{
        if(theme == 'Oscuro'){
            setTheme("Claro")
            darkMode("#7A6666")
        }
        else{
            setTheme("Oscuro")
            lightMode("#E8C4C4")
        }
    }

    return <button onClick={()=> handlerThemeChange()} className='theme-mode'>Modo {theme}</button>
}

export default ThemeButton;