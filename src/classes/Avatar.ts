import { MAX_JUMPS, SPEED, STATE_GAME } from "../constantes/Global";
import { Avatar as AvatarInterface } from "../interfaces/Avatar";
import { ObstaclesInterface } from "../interfaces/Obstacles";
import { SprintInterface } from "../interfaces/Sprint";
import { FloorInterface } from "../interfaces/Floor";

export default class Avatar implements AvatarInterface {
  x;
  y;
  width;
  color;
  gravity;
  height;
  powerJump;
  qtdJumps;
  avatar;
  speed;
  score;
  floor;
  ctx;
  LARGURA;
  rotation;

  constructor(
    ctx: CanvasRenderingContext2D,
    LARGURA: number,
    avatar: SprintInterface,
    floor: FloorInterface
  ) {
    this.x = 50;
    this.y = 0;
    this.color = "#ff4e4e";
    this.gravity = 0.4;
    this.avatar = avatar;
    this.width = avatar.width;
    this.height = avatar.heigth;
    this.powerJump = 18;
    this.rotation = 0;
    this.qtdJumps = 0;
    this.speed = 0;
    this.score = 0;
    this.ctx = ctx;
    this.LARGURA = LARGURA;
    this.floor = floor;
  }

  update(stateGame: 0 | 1 | 2) {
    this.speed += this.gravity;
    this.y += this.speed;
    this.rotation += (Math.PI / 180) * SPEED;
    const floorWidth = this.floor.y - this.width;
    if (this.y > floorWidth && stateGame !== STATE_GAME.LOSE) {
      this.y = floorWidth;
      this.qtdJumps = 0;
      this.speed = 0;
    }
  }

  jump() {
    if (this.qtdJumps < MAX_JUMPS) {
      this.speed = -this.powerJump;
      this.qtdJumps++;
    }
  }

  draw(stateGame: 0 | 1 | 2) {
    if (this.avatar.draw) {
      this.ctx.save();
      this.ctx.translate(this.x + this.width / 2, this.y + this.height / 2);
      if (this.qtdJumps > 0) {
        this.ctx.rotate(50);
      } else {
        if (stateGame === STATE_GAME.LOSE) {
          this.ctx.rotate(10);
        } else {
          this.ctx.rotate(0);
        }
      }
      this.avatar.draw(-this.width / 2, -this.height / 2);
      this.ctx.restore();
    }
  }

  reset() {
    this.speed = 0;
    this.y = 0;
    const storageRecord = localStorage.getItem("record");
    const record = storageRecord ? storageRecord : "0";
    if (this.score > parseInt(record)) {
      localStorage.setItem("record", JSON.stringify(this.score));
    }
    this.score = 0;
  }
}
