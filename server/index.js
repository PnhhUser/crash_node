import { log } from "console";
import http from "http";

const server = http.createServer((req, res) => {
    // res.setHeader("content-type", "text/html"); Thiết lập từng tiêu đề một và có thể gọi nhiều lần
    // res.statusCode = 404;

    
    // res.writeHead gửi tất cả các tiêu đề cùng một lúc và đảm bảo chúng được gửi trước dữ liệu.
    res.writeHead(200, {'content-type': 'application/json'}); 
    
    // yêu cầu của phía client gửi về server
    log(`Req: ${req}`);

    // phương thức gửi về
    log(`Method: ${req.method}`);
    
    // đường dẫn gửi
    log(`Url: ${req.url}`);

    res.end(JSON.stringify({message: "ok"}));
})

server.listen(process.env.PORT, () => {
    log("Server running on port " + process.env.PORT);
})