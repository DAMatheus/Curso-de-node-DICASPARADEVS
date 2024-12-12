const http = require(`http`)
const crypto = require('crypto');

const port = 8080

const server = http.createServer((req, res) => {
    if (req.url === "/home") {
        res.writeHead(200, { "content-type": "text/html" })
        res.end("<h1>Home page</h1>")
    }
    if (req.url === "/users") {
        const users = [
            {
              id: crypto.randomUUID(),
              nome: "Ana Souza",
              email: "ana.souza@example.com"
            },
            {
              id: crypto.randomUUID(),
              nome: "Carlos Oliveira",
              email: "carlos.oliveira@example.com"
            },
            {
              id: crypto.randomUUID(),
              nome: "Beatriz Lima",
              email: "beatriz.lima@example.com"
            }
          ];
        res.writeHead(200, { "content-type": `application/json`})
        res.end(JSON.stringify(users))

    }
})

server.listen(port, () => {
    console.log(`Server rodando em http://localhost:8080`)
})