export interface SprintInterface {
    x: number;
    y: number;
    img: CanvasImageSource;
    width: number;
    heigth: number;
    draw?(xCanvas: any, yCanvas: any): void;
}