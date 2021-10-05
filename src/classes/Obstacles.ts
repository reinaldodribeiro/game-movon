import {  SPEED } from '../constantes/Global';
import { Avatar } from '../interfaces/Avatar';
import { Obs, ObstaclesInterface } from '../interfaces/Obstacles';
import { SprintInterface } from '../interfaces/Sprint';

export default abstract class Obstacles implements ObstaclesInterface {

    _obs;
    items;
    timeInsert;
    ctx;
    LARGURA;
    avatar;

    constructor(ctx: CanvasRenderingContext2D, LARGURA: number, avatar: Avatar) {
        this._obs = [] as Array<Obs>;
        this.items = [] as Array<SprintInterface>;
        this.ctx = ctx;
        this.timeInsert = 0;
        this.LARGURA = LARGURA; 
        this.avatar = avatar;
    }

    clean() {
        this._obs = [];
    }

    insert() {
        const itemSelected =  this.items[Math.floor(this.items.length * Math.random())];
        this._obs.push({
            x: this.LARGURA,
            item: itemSelected,
            width: itemSelected.width,
            height: itemSelected.heigth,
        });
        this.timeInsert = 40 + Math.floor(29 * Math.random());
    }

    update () {
        if(this.timeInsert === 0) 
            this.insert();
        else
            this.timeInsert--;

        var size = this._obs.length;
        for(var i = 0; i < size; i++) {
            var obs: Obs = this._obs[i];
            obs.x -= SPEED;

            const cond1 = this.avatar.x < obs.x + obs.width;
            const cond2 = this.avatar.x + this.avatar.width >= obs.x;
            const cond3 = this.avatar.y + this.avatar.height >=  this.avatar.floor.y - obs.height;

            if(cond1 && cond2 && cond3) {
                this.lose();
            }else if (obs.x === 0){
                this.avatar.score++;
            }else if (obs.x <= -obs.width) {
                this._obs.splice(i, 1);
                size --;
                i--;
            }
        }
    }

    draw() {
        const size = this._obs.length;
        for(var i = 0;  i < size; i++) {
            const obs: Obs = this._obs[i];
            const floorWidth = this.avatar.floor.y - obs.height;
            if(obs.item.draw) obs.item.draw(obs.x, floorWidth);
        }
    }

    abstract lose(): void;
    
}