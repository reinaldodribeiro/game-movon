import { SPEED } from "../constantes/Global";
import { Avatar } from "../interfaces/Avatar";
import { FloorInterface } from "../interfaces/Floor";
import { Obs, ObstaclesInterface } from "../interfaces/Obstacles";
import { ThemeInterface } from "../interfaces/Theme";
import { makeImage } from "../utils/utils";
import Sprint from "./Sprint";

export default class Obstacles implements ObstaclesInterface {
  _obs;
  items;
  timeInsert;
  ctx;
  floor;
  LARGURA;
  avatar;
  lose;

  constructor(
    ctx: CanvasRenderingContext2D,
    LARGURA: number,
    avatar: Avatar,
    theme: ThemeInterface,
    floor: FloorInterface
  ) {
    this._obs = [] as Array<Obs>;
    this.items = theme.obstacles.map((item) => {
      return new Sprint(ctx, {
        x: 0,
        y: 0,
        heigth: item.height,
        width: item.width,
        img: makeImage(item.obstacle),
      });
    });
    this.ctx = ctx;
    this.timeInsert = 0;
    this.LARGURA = LARGURA;
    this.avatar = avatar;
    this.floor = floor;
    this.lose = () => {};
  }

  clean() {
    this._obs = [];
  }

  insert() {
    const itemSelected =
      this.items[Math.floor(this.items.length * Math.random())];
    this._obs.push({
      x: this.LARGURA,
      item: itemSelected,
      width: itemSelected.width,
      height: itemSelected.heigth,
    });
    this.timeInsert = 200 + Math.floor(29 * Math.random());
  }

  update() {
    if (this.timeInsert === 0) this.insert();
    else this.timeInsert--;

    var size = this._obs.length;
    for (var i = 0; i < size; i++) {
      var obs: Obs = this._obs[i];
      obs.x -= SPEED;

      const cond1 = this.avatar.x < obs.x + obs.width - 50;
      const cond2 = this.avatar.x + this.avatar.width >= obs.x;
      const cond3 =
        this.avatar.y + this.avatar.height >= this.floor.y - obs.height;

      if (cond1 && cond2 && cond3) {
        this.lose();
      } else if (obs.x === 0) {
        this.avatar.score++;
      } else if (obs.x <= -obs.width) {
        this._obs.splice(i, 1);
        size--;
        i--;
      }
    }
  }

  draw() {
    const size = this._obs.length;
    for (var i = 0; i < size; i++) {
      const obs: Obs = this._obs[i];
      const floorWidth = this.floor.y - obs.height;
      if (obs.item.draw) obs.item.draw(obs.x, floorWidth);
    }
  }
}
