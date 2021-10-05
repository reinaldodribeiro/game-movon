import { FloorInterface } from "./Floor";
import { SprintInterface } from "./Sprint";

export interface Avatar {
    x: number;
    y: number;
    width: number;
    height: number;
    avatar: SprintInterface;
    gravity: number;
    speed: number;
    rotation: number;
    score: number;
    powerJump: number;
    qtdJumps: number;
    update(stateGame: 0 | 1 | 2): void;
    jump(): void;
    draw(stateGame: 0 | 1 | 2): void;
    reset(): void;
}