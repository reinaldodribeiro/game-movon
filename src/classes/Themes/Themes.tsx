import { ThemeInterface } from "../../interfaces/Theme";
import FarmBG from '../../assets/bg/farm.png';
import FarmAvatar from '../../assets/avatar/farm.png';
import FloorFarm from '../../assets/body/floor_farm.png';
import Farm1Ostacle from '../../assets/obstacles/farm/farm1.png';
import Farm2Ostacle from '../../assets/obstacles/farm/farm2.png';
import Farm3Ostacle from '../../assets/obstacles/farm/farm3.png';


const Themes: Array<ThemeInterface>  = [
    {
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
    }
]

export default Themes;