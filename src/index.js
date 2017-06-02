import { Application, Graphics } from 'pixi.js';

const app = new Application(334, 600, { antialias: true });
document.body.appendChild(app.view);

const graphics = new Graphics();

graphics.lineStyle(0);
graphics.beginFill(0xdd2222, 0.5);
graphics.drawCircle(334 / 2, 600 / 2, 60);
graphics.endFill();

app.stage.addChild(graphics);

