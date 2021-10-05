import Obstacles from "../../Obstacles";
import Sprint from "../../Sprint";
import Farm1Ostacle from '../../../assets/obstacles/farm/farm1.png';
import Farm2Ostacle from '../../../assets/obstacles/farm/farm2.png';
import Farm3Ostacle from '../../../assets/obstacles/farm/farm3.png';
import { makeImage } from "../../../utils/utils";

export default class ObstaclesFarm extends Obstacles {
    lose() {};

    farm1 = new Sprint(this.ctx, {
        x: 0,
        y: 0,
        heigth: 120,
        width: 60,
        img: makeImage(Farm1Ostacle)
    });

    farm2 = new Sprint(this.ctx, {
        x: 0,
        y: 0,
        heigth: 80,
        width: 60,
        img: makeImage(Farm2Ostacle)
    });

    farm3 = new Sprint(this.ctx, {
        x: 0,
        y: 0,
        heigth: 40,
        width: 60,
        img: makeImage(Farm3Ostacle)
    });
    

    items = [this.farm1, this.farm2, this.farm3];
}