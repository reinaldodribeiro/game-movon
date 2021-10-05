import { Avatar } from "./Avatar";
import { FloorInterface } from "./Floor";
import { ObstaclesInterface } from "./Obstacles";
import { SprintInterface } from "./Sprint";
import { ThemeInterface } from "./Theme";

export interface CenaryInterface {
    theme: ThemeInterface;
    colorShadow: string;
    bgColor: string;
    floor: FloorInterface;
    bg: SprintInterface;
    obstacles: ObstaclesInterface;
    avatar: Avatar;

}
