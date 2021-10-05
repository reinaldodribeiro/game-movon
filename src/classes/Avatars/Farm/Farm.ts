import { ObstaclesInterface } from "../../../interfaces/Obstacles";
import Avatar from "../../Avatar";
import Sprint from "../../Sprint";
import ObstaclesFarm from "./ObstaclesFarm";
import FarmBG from '../../../assets/bg/farm.png';
import FarmAvatar from '../../../assets/avatar/farm.png';
import { makeImage } from "../../../utils/utils";
import Floor from "../../Floor";

export default class Farm extends Avatar {
    
    theme: 'farm' = 'farm';

    obstacles: ObstaclesInterface = new ObstaclesFarm(this.ctx, this.LARGURA, this);
    
    bg = new Sprint(this.ctx, {
        x: 0,
        y: 0,
        heigth: 600,
        width: 800,
        img: makeImage(FarmBG)
    });

    avatar = new Sprint(this.ctx, {
        x: 0,
        y: 0,
        heigth: 100,
        width: 100,
        img: makeImage(FarmAvatar)
    });

    floor = new Floor(this.ctx, this.LARGURA, 'farm');

    width = this.avatar.width;
    height = this.avatar.heigth;
}