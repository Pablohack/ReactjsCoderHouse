import { useContext ,useState} from 'react';
import {ThemeContext} from '../../context/ThemeContext';
import './ThemeMode.css'

const ThemeMode = () => {
  const {darkMode,ligthMode} = useContext(ThemeContext);
  const [theme,setTheme] = useState('Dark')
  const handlerThemeChange = () => {
    if (theme == "Dark") {
      setTheme("Light");
      darkMode("#7A6666");
    } else {
      setTheme("Dark");
      ligthMode("#E8C4C4");
    }
  };
  return <button onClick={() => handlerThemeChange()} className='theme-mode'>{theme} Mode</button>;
};

export default ThemeMode;