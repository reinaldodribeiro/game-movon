export interface FloorInterface {
    y: number;
    x: number;
    height: number;
    update(stateGame: 0 | 1 | 2): void;
    draw(): void;
}