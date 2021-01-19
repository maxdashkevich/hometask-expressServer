export const info = (req, res, next) => {
    const date = new Date();
    console.group('Request info: ');
    console.log('Request type is: ', req.method);
    console.log('Request url is: ', req.originalUrl);
    console.log('Request time is: ', `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
    console.groupEnd();
    next();
}