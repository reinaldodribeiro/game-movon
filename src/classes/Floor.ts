import { FloorInterface } from '../interfaces/Floor';
import { makeImage } from '../utils/utils';
import Sprint from './Sprint';
import FloorFarm from '../assets/body/floor_farm.png';
import { SPEED, STATE_GAME } from '../constantes/Global';

export default class Floor implements FloorInterface {
    y;
    x;
    height;
    ctx;
    sprint;
    LARGURA;

    themes: any = {
        'farm': FloorFarm
    }

    constructor(ctx: CanvasRenderingContext2D, LARGURA: number, theme: string) {
        this.y = 520;
        this.x = 0;
        this.height = 100;
        this.ctx = ctx;
        this.sprint = new Sprint(this.ctx, {
            x: 0,
            y: 0,
            heigth: this.height,
            width: 800,
            img: makeImage(this.themes[theme])
        });
        this.LARGURA = LARGURA;
    }

    update(stateGame: 0 | 1 | 2) {
        if(stateGame === STATE_GAME.PLAYING) {
            this.x -= SPEED;
            if(this.x <= -this.sprint.width) {
                this.x = 0;
            }
        }else{
            this.x = 0;
        }
    }

    draw() {
        if(this.sprint.draw) this.sprint.draw(this.x, 510);
        if(this.sprint.draw) this.sprint.draw(this.x + this.sprint.width -10, 510);
    }
}