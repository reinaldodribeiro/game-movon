import { ThemeInterface } from "../../interfaces/Theme";
import FarmBG from '../../assets/bg/farm.png';
import FarmAvatar from '../../assets/avatar/farm.png';
import FloorFarm from '../../assets/body/floor_farm.png';
import Farm1Ostacle from '../../assets/obstacles/farm/farm1.png';
import Farm2Ostacle from '../../assets/obstacles/farm/farm2.png';
import Farm3Ostacle from '../../assets/obstacles/farm/farm3.png';

import LaluAvatar from '../../assets/avatar/lalu.png';
import LaluBG from '../../assets/bg/lalu.png';
import FloorLalu from '../../assets/body/floor_lalu.png';
import Lalu1Ostacle from '../../assets/obstacles/lalu/lalu1.png';
import Lalu2Ostacle from '../../assets/obstacles/lalu/lalu2.png';
import Lalu3Ostacle from '../../assets/obstacles/lalu/lalu3.png';
import Lalu4Ostacle from '../../assets/obstacles/lalu/lalu4.png';

import NatalAvatar from '../../assets/avatar/natal.png';
import AnimaisBG from '../../assets/bg/animais.png';
import FloorAnimais from '../../assets/body/floor_animais2.png';
import AnimaisAvatar from '../../assets/avatar/animais.png';
import Animais1Obstacle from '../../assets/obstacles/animais/animais1.png';
import Animais2Obstacle from '../../assets/obstacles/animais/animais2.png';
import Animais3Obstacle from '../../assets/obstacles/animais/animais3.png';
import Animais4Obstacle from '../../assets/obstacles/animais/animais4.png';

const Themes: Array<ThemeInterface>  = [
    {
        name: 'farm',
        avatar: FarmAvatar,
        bg: FarmBG,
        bgColor: "#ffd57b",
        floor: FloorFarm,
        colorShadow: '#9c7393',
        obstacles: [
            {
                width: 60,
                height: 125,
                obstacle: Farm1Ostacle,
            },
            {
                width: 60, 
                height: 80,
                obstacle: Farm2Ostacle,
            },
            {
                width: 60,
                height: 40,
                obstacle: Farm3Ostacle,
            }
        ]
    },
    {
        name: 'laluzinha',
        avatar: LaluAvatar,
        bg: LaluBG,
        bgColor: "#9b6ca3",
        floor: FloorLalu,
        colorShadow: '#fff',
        obstacles: [
            {
                width: 60,
                height: 125,
                obstacle: Lalu1Ostacle,
            },
            {
                width: 60, 
                height: 90,
                obstacle: Lalu2Ostacle,
            },
            {
                width: 60,
                height: 45,
                obstacle: Lalu3Ostacle,
            },
            {
                width: 60,
                height: 65,
                obstacle: Lalu4Ostacle,
            }
        ]
    },
    {
        name: 'Animais',
        avatar: AnimaisAvatar,
        bg: AnimaisBG,
        bgColor: "#e9fcff",
        floor: FloorAnimais,
        colorShadow: '#e8fdd7',
        obstacles: [
            {
                width: 60,
                height: 113,
                obstacle: Animais1Obstacle,
            },
            {
                width: 60, 
                height: 79,
                obstacle: Animais2Obstacle,
            },
            {
                width: 60,
                height: 48,
                obstacle: Animais3Obstacle,
            },
            {
                width: 65,
                height: 70,
                obstacle: Animais4Obstacle,
            }
        ]
    },
]

export default Themes;