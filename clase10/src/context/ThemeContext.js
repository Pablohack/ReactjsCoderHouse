import {createContext, useReducer} from 'react'
import { ThemeReducer} from './ThemeReducer'

export const ThemeContext = createContext(null)

const initialState = {
    color:'#ECD1D1'
}

export const ThemeContextProvider =({children}) =>{
    const [state,dispatch] = useReducer(ThemeReducer,initialState)

    function darkMode(color){
        dispatch({
            type:"DARK_MODE",
            payload:{color}
        })
    }
    function lightMode(color){
        dispatch({
            type:"LIGHT_MODE",
            payload:{color}
        })
    }

    return(
        <ThemeContext.Provider
        value={{
            color:state.color,
            darkMode,
            lightMode
        }}
        >
            {children}
        </ThemeContext.Provider>
    )
}
