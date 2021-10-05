import { SprintInterface } from "../interfaces/Sprint";

export default class Sprint implements SprintInterface {

    x;
    y;
    img;
    width;
    heigth;
    ctx;
    
    constructor(ctx: CanvasRenderingContext2D, kwargs: SprintInterface) {
        const { x, y, width, heigth, img } = kwargs;
        this.x = x;
        this.ctx = ctx;
        this.img = img;
        this.y = y;
        this.width = width;
        this.heigth = heigth;
    }

    draw(xCanvas: number, yCanvas: number) {
        this.ctx.drawImage(this.img, this.x, this.y, this.width, this.heigth, xCanvas, yCanvas, this.width, this.heigth);
    }
}