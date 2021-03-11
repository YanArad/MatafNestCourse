"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerMiddleWare = void 0;
class LoggerMiddleWare {
    use(req, res, next) {
        let time = new Date().toLocaleTimeString();
        console.log('Requeset recived  to :' + req.url + ' , at : ' + time);
        next();
    }
}
exports.LoggerMiddleWare = LoggerMiddleWare;
//# sourceMappingURL=logger.middleware.js.map