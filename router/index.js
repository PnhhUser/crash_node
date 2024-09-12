import { log } from "console";
import http from "http";
import path from "path";
import fs from "fs/promises";



const PORT = process.env.PORT;
const __filename = import.meta.filename;
const __dirname = path.dirname(__filename);




const routerApp = http.createServer(async (req, res) => {
    let filePath;
    // đường dẫn có cả tên file đang sử dụng
    // vd:
    // user
    //  |_ home.html
    //log(`__filename: ${__filename}`) // -> /user/home.html
    
    
    
    // đường dẫn chỉ tới file đang chứa nó
    // vd:
    // user
    //  |_ home.html
    //log(`__dirname: ${__dirname}`) // -> /user

    try {

        if(req.method === "GET") {

            if(req.url === '/') {
                filePath = path.join(__dirname,'pages','home.html');
            }else if(req.url === '/about') {
                filePath = path.join(__dirname,'pages','about.html');
            }
            else {
                throw {status: 404, message: "Not Found"};
            }

            const data = await fs.readFile(filePath);
            res.setHeader("content-type", "text/html")
            res.write(data);
            res.end();

        } else {
            throw {status: 500, message: "Error server"};
        }       


    }catch(e) {
        res.writeHead(e.status, {'content-type': 'text/html'})
        res.end(`<p>${e.message}</p>`);
    }

})

routerApp.listen(PORT, () => {
    log(`Server running on port ${PORT}`);
})