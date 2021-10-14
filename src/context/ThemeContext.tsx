import React, { createContext, useContext, useEffect, useState } from "react";
import Themes from "../classes/Themes/Themes";
import { ThemeInterface, Themes as ThemesInterface} from "../interfaces/Theme";

interface ThemeContextData {
    themeSelected: ThemeInterface;
    changeThemeSelected(theme: string): void;
    resetTheme(): void;
    themes: Array<ThemesInterface>;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);
  
const ThemeProvider: React.FC = ({ children }) => { 

    const [themeSelected, setThemeSeleted]  = useState<ThemeInterface>({} as ThemeInterface);
    const [themes, setThemes] = useState<Array<ThemesInterface>>([] as Array<ThemesInterface>);

    useEffect(() => {
        loadThemes();
        loadThemeSelected();
    }, []);

    const loadThemes = () => {
        const newThemes = Themes.map((theme) => {
            return {
                name: theme.name,
                color: theme.bgColor
            }
        });
        setThemes(newThemes);
    }

    const loadThemeSelected = () => {
        const storageTheme = localStorage.getItem("theme");
        if(storageTheme) changeThemeSelected(storageTheme);
    }

    const resetTheme = () => {
        setThemeSeleted({} as ThemeInterface);
        localStorage.removeItem('theme');
    }

    const changeThemeSelected = (theme: string) => {
        Themes.forEach(item => {
            if(item.name === theme) {
                setThemeSeleted(item);
                localStorage.setItem('theme', theme);
            }
        })
    }

    const valueData = {
        themeSelected,
        changeThemeSelected,
        themes,
        resetTheme
    }

    return (
        <ThemeContext.Provider value={valueData}>
            {children}
        </ThemeContext.Provider>
    )
    
}

function useTheme() {

    const context = useContext(ThemeContext);

    if(!context){
        throw new Error('useTheme must be used within an LoaderProvider');
    }
    
    return context;
}

export {ThemeProvider, useTheme};