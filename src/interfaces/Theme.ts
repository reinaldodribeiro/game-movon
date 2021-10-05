import { ItemObstacle } from "./Obstacles";

export interface ThemeInterface {
    bg: string;
    floor: string;
    avatar: string;
    bgColor: string;
    colorShadow?: string;
    obstacles: Array<ItemObstacle>;
}