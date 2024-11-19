import React, { useContext } from "react"
import { ThemeContext } from "../../context/theme-context"
import { ButtonToggle } from "./buttonStyle"

export const Button = (props) => {
    const { theme } = useContext(ThemeContext)

    console.log('button theme', theme)
    return (
        <ButtonToggle {...props}
            style={{
                color: theme.color, backgroundColor: theme.background,
            }} />
    )
}



