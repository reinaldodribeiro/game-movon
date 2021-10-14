import React from 'react'
import Game from '../components/Game';
import SelectGame from '../components/SelectTheme';
import { useTheme } from '../context/ThemeContext'

export default function Main() {
    
    const { themeSelected } = useTheme();

    return (
        themeSelected.name ? (
            <Game />
        ): <SelectGame />
    )
}
