import React from 'react';
import { Themes } from '../interfaces/Theme';
import { Styles } from '../styles/Styles';

interface ItemThemeProps {
    item: Themes;
    callback(theme: string): void;
}

export default function ItemTheme(props: ItemThemeProps) {

    const { item, callback } = props;

    return (
        <div onClick={() => callback(item.name)} style={{...Styles.itemTheme, backgroundColor: item.color}}>
            {item.name.toUpperCase()}
        </div>
    )
}
