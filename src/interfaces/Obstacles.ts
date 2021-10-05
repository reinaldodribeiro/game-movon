import { SprintInterface } from "./Sprint";

export interface Obs {
    x: number;
    width: number;
    height: number;
    item: SprintInterface;
}

export interface ObstaclesInterface {
    _obs: Array<Obs>;
    items: Array<SprintInterface>;
    timeInsert: number;
    insert(): void;
    update(): void;
    draw(): void;
    lose(): void;
    clean(): void;
}

export interface ItemObstacle {
    width: number;
    height: number;
    obstacle: string;
}