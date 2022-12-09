import { createContext, useReducer } from 'react';
import ThemeReducer from './ThemeReducer';

const initialState = {
    color:'#ECD1D1'
}

export const ThemeContext = createContext(null);

export const ThemeContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ThemeReducer, initialState);
  
    function darkMode(color) {
      dispatch({
        type: "DARK_MODE",
        payload: { color },
      });
    }
    
    function ligthMode(color) {
        console.log(2)
        dispatch({
          type: "LIGHT_MODE",
          payload: { color },
        });
      }
      
      console.log("color  ->" + {...state})
    return (
      <ThemeContext.Provider
        value={{
          color: state.color,
          darkMode,
          ligthMode

        }}
      >
        {children}
      </ThemeContext.Provider>
    );
  };