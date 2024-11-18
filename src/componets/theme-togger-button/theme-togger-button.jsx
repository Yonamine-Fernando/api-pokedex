import React, { useContext } from "react"
import { Button } from "../button/button"
import { themes , ThemeContext } from "../../context/theme-context"

export const ThemeToggerButton = () => {
     
    const { theme , setTheme } = useContext(ThemeContext)

    return (
            <Button onClick={()=> setTheme(theme === themes.light ? themes.dark : themes.light)}> {theme === themes.light ? "Light" : "Dark"} </Button>
    )
}

