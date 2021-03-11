import { ArgumentsHost, ExceptionFilter, HttpException } from "@nestjs/common";
export declare class MyHttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost): void;
}
