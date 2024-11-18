import { createContext, useState } from "react";


import bgDark from '../assets/bg-pkdark.webp'
import bgLugia from '../assets/bg-lugia.webp'


export const themes = {
    light: {
        color: "#000000",
        bgImage: bgLugia,
        background: '#ffffff',
    },
    dark: {
        color: "#6a5606",
        bgImage: bgDark,
        background: '#000'
    }
}

export const ThemeContext = createContext()

export const ThemeProvider = (props) => {

    const [theme, setTheme] = useState(themes.light)

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}