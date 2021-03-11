import { ArgumentsHost, BadRequestException, Catch, ExceptionFilter, HttpException } from "@nestjs/common";
import {Request, Response} from 'express'

@Catch(HttpException)
export class MyHttpExceptionFilter implements ExceptionFilter
{
    catch(exception: HttpException, host: ArgumentsHost) {
        
        const ctx = host.switchToHttp();

        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
        const status = exception.getStatus();
       

        response
            .status(status)
            .json({
                statusCode : status,
                timestamp : new Date().toLocaleTimeString(),
                path : request.url,
                msg :  exception.message
            });

    }
    
}