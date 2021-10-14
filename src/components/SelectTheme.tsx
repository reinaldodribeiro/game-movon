import React from 'react'
import { useTheme } from '../context/ThemeContext'
import { Styles } from '../styles/Styles';
import ItemTheme from './ItemTheme';

export default function SelectTheme() {

    const { themes, changeThemeSelected } = useTheme();

    const handleTheme = (theme: string) => {
        changeThemeSelected(theme);
    }


    return (
        <div style={Styles.pageSelectTheme}>
            {
                
                themes.map(item => (
                    <div style={{marginLeft: 10}} >
                        <ItemTheme item={item} callback={handleTheme} />
                    </div>
                ))
            }
        </div>
    )
}
