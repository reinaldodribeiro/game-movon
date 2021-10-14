import { ItemObstacle } from "./Obstacles";

export interface ThemeInterface {
    name: string;
    bg: string;
    floor: string;
    avatar: string;
    bgColor: string;
    colorShadow?: string;
    obstacles: Array<ItemObstacle>;
}
export interface Themes {
    name: string;
    color: string;
}