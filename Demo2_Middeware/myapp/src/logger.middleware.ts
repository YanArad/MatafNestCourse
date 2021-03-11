import { NestMiddleware } from "@nestjs/common";
import {Request, Response} from 'express'

export class LoggerMiddleWare implements NestMiddleware
{
    use(req: Request, res: Response, next: () => void) {

        let time = new Date().toLocaleTimeString();

        console.log('Requeset recived  to :' + req.url + ' , at : ' + time );

        next();
    }
}