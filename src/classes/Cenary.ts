import { getTextOfJSDocComment } from "typescript";
import { CenaryInterface } from "../interfaces/Cenary";
import { FloorInterface } from "../interfaces/Floor";
import { ThemeInterface } from "../interfaces/Theme";
import { makeImage } from "../utils/utils";
import Avatar from "./Avatar";
import Floor from "./Floor";
import Obstacles from "./Obstacles";
import Sprint from "./Sprint";

export default class Cenary implements CenaryInterface {
    
    theme;
    colorShadow: string;
    bgColor;
    floor;
    bg;
    obstacles;
    avatar;
  
    constructor(ctx: CanvasRenderingContext2D, LARGURA: number, theme: ThemeInterface) {
      this.theme = theme;
      this.colorShadow = theme.colorShadow ? theme.colorShadow : "#fff";
      this.bgColor = theme.bgColor;
      this.floor = new Floor(ctx, LARGURA , new Sprint(ctx, {
        x: 0,
        y: 0,
        heigth: 100,
        width: 800,
        img: makeImage(theme.floor)
      }));
      
      this.avatar = new Avatar(ctx, LARGURA, 
        new Sprint(ctx, {
            x: 0,
            y: 0,
            heigth: 100,
            width: 100,
            img: makeImage(theme.avatar)
        }), this.floor);

      this.obstacles = new Obstacles(ctx, LARGURA, this.avatar, theme, this.floor);
      this.bg = new Sprint(ctx,  {
          x: 0, 
          y: 0,
          width: 800,
          heigth: 600,
          img: makeImage(theme.bg)
      });
    }

}
