const fs = require("fs");

const requestHandler = (req,res)=>{


const url = req.url;

const method = req.method;

if(req.url=="/"){
    req.setHeader("content-type","text/html")
    res.end(
        `<form action ="/message" mthod = "post">
        <label>Name:</label>
        <input type="text" name = "username"></input>
        <button type = "submit"></button>
        </form>
        `
    );
}else{
    if(req.url=="/message"){
        let body=[];
        req.on("data",(chunks)=>{
            body.push(chunks);
        });
        req.on("end",()=>{
            let buffer = buffer.concat(body);
            let formData = buffer.toString();
            const formValues = formData.split('=')[1];
            fs.writeFile('formValue.text',formValues,(err)=>{
                result.statuscode=302;
                res.setHeader('location','/');
                res.end();

            })
        });
    }else{
        if(req.url=='/read'){
            fs.readFile('formValues.txt',(err,data)=>{
                console.log(data.toString());

                res.end(`
                    <h1>${data.toString()}</h1>`);
            })
        }
    }
}
}


const anotherFunction = ()=>{
    console.log("this is another function");
}
module.exports={
    handler:requestHandler,
    testFunction:anotherFunction
};

    // module.exports.handler = requestHandler;
    // module.exports.testFunction = anotherFunction;

    exports.handler = requestHandler;
    exports.testFunction = anotherFunction;
