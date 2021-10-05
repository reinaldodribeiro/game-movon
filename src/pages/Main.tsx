import React, { useEffect } from 'react';
import { Avatar } from '../interfaces/Avatar';
import { FloorInterface } from '../interfaces/Floor';
import { ObstaclesInterface } from '../interfaces/Obstacles';
import { STATE_GAME } from '../constantes/Global';
import Sprint from '../classes/Sprint';
import PlayImage from '../assets/body/play.png';
import { makeImage } from '../utils/utils';
import { SprintInterface } from '../interfaces/Sprint';
import { CenaryInterface } from '../interfaces/Cenary';
import Cenary from '../classes/Cenary';
import Themes from '../classes/Themes/Themes';

export default function Main() {

    const theme = Themes[0];

    const PLAY = STATE_GAME.PLAY;
    const PLAYING = STATE_GAME.PLAYING;
    const LOSE = STATE_GAME.LOSE;
    
    let stateGame = PLAY;
    let canvas: any, ctx: any, ALTURA: number, LARGURA: number;
    let record: number;
    let cenary: CenaryInterface;
    let avatar: Avatar;
    let floor: FloorInterface;
    let obstacles: ObstaclesInterface;
    let playSprint: SprintInterface;
    let loseSprint: SprintInterface;

    const main = () => {
        ALTURA = window.innerHeight;
        LARGURA = window.innerWidth;

        if (LARGURA >= 500) {
            LARGURA = 800;
            ALTURA = 600;
        }

        canvas = document.createElement("canvas");
        canvas.width = LARGURA;
        canvas.height = ALTURA;
        canvas.style.backgroudnColor = "black";
        canvas.style.boxShadow = `${theme.colorShadow} 10px 20px 30px`

        ctx = canvas.getContext("2d");
        ctx.shadowColor = theme.colorShadow;
        ctx.shadowBlur = 3;
        ctx.shadowOffsetX = 3;
        ctx.shadowOffsetY = 3;
        document.body.appendChild(canvas);
        document.addEventListener("mousedown", click);

        cenary = new Cenary(ctx, LARGURA, theme);
        avatar = cenary.avatar;
        floor = cenary.floor;
        obstacles = cenary.obstacles;
        obstacles.lose =  () => {
            stateGame = LOSE
        };
        
        const storageRecord = localStorage.getItem("record");

        record = storageRecord ? parseInt(storageRecord) : 0;

        playSprint = new Sprint(ctx, {
            x: 0,
            y: 0,
            heigth: 322,
            width: 400,
            img: makeImage(PlayImage)
        });

        loseSprint = new Sprint(ctx, {
            x: 0,
            y: 0,
            heigth: 322,
            width: 400,
            img: makeImage(PlayImage)
        });

        start();

    }

    const click = (event: Event) => {
        switch(stateGame) {
            case PLAY:
                stateGame = PLAYING;
                break;
            case LOSE:
                stateGame = PLAY;
                avatar.reset();
                break;
            case PLAYING:
                avatar.jump();
                break;
            default:
                break;
        }
       
    }

    const start = () => {
        update();
        draw();
        window.requestAnimationFrame(start);
    }
    
    const drawWindow = () => {
        if(cenary.bg.draw) cenary.bg.draw(0, 0)
    }

    const drawScore = () => {
        ctx.fillStyle = "#fff";
        ctx.font = "50px Arial";
        ctx.fillText(avatar.score, 20, 60);
    }

    const drawPlay = () => {
        if(playSprint.draw) playSprint.draw(220,120);
    }

    const drawLose = () => {
        ctx.fillStyle = "red";
        ctx.fillRect(LARGURA / 2 - 50, ALTURA / 2 - 50, 100, 100);
        ctx.save();
        ctx.translate(LARGURA / 2, ALTURA / 2);
        ctx.fillStyle = "#fff";

        if(avatar.score > record) ctx.fillText("Novo record !", -150, -65)
        else ctx.fillText(`Record ${record}`, -110, -65);

        const positions = avatar.score > 10 && avatar.score < 100 ? [-26, 19] : 
        avatar.score > 100 ? [-39, 19] :  [-13, 19];

        ctx.fillText(avatar.score, positions[0], positions[1]);
        ctx.restore();
        obstacles.clean();
    }

    const draw = () => {
        drawWindow();
        drawScore();
       
        switch(stateGame) {
            case PLAY:
                drawPlay();
                break;
            case LOSE:
                drawLose();
                break;
            default:
                obstacles.draw();
                break;
        }

        floor.draw();
        avatar.draw(stateGame);
    }


    const update = () => {
        avatar.update(stateGame);
        if(stateGame === PLAYING) {
            obstacles.update();
        }
        floor.update(stateGame);
    }

    useEffect(() => {
        main();
    });

    return (
        <div style={{width: "100vw", height: "100vh", backgroundColor: theme.bgColor}} />
    );
}
