import { SprintInterface } from "./Sprint";

export interface FloorInterface {
    y: number;
    x: number;
    height: number;
    sprint: SprintInterface;
    update(stateGame: 0 | 1 | 2): void;
    draw(): void;
}