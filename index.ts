import figlet from "figlet";

const server = Bun.serve({
    port: 3000,
    fetch(req) {

        const url = new URL(req.url);

        if (url.pathname === "/") {
            const body = figlet.textSync("Hello from Bun, Noob!");
            return new Response(body);
        }

        if (url.pathname === "/about") {
            return new Response("About Page!");
        }

        if (url.pathname === "/contact") {
            return new Response("Contact Page!");
        }

        return new Response("404!");
        
        
    }
})

console.log(`Listening on http://localhost:${server.port}`);