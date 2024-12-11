const http = require('http');
const routes = requires('./route')

route.anotherFunction();
route.handler();
route.testFunction();
const server = http.createServer(route);



server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
