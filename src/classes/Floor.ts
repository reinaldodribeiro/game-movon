import { FloorInterface } from '../interfaces/Floor';
import { makeImage } from '../utils/utils';
import Sprint from './Sprint';
import { SPEED, STATE_GAME } from '../constantes/Global';
import { SprintInterface } from '../interfaces/Sprint';

export default class Floor implements FloorInterface {
    y;
    x;
    height;
    ctx;
    floor;
    LARGURA;

    constructor(ctx: CanvasRenderingContext2D, LARGURA: number, floor: SprintInterface) {
        this.y = 520;
        this.x = 0;
        this.height = 100;
        this.ctx = ctx;
        this.floor = floor;
        this.LARGURA = LARGURA;
    }

    update(stateGame: 0 | 1 | 2) {
        if(stateGame === STATE_GAME.PLAYING) {
            this.x -= SPEED;
            if(this.x <= -this.floor.width) {
                this.x = 0;
            }
        }else{
            this.x = 0;
        }
    }

    draw() {
        if(this.floor.draw) this.floor.draw(this.x, 510);
        if(this.floor.draw) this.floor.draw(this.x + this.floor.width -10, 510);
    }
}