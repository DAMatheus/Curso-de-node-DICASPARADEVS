const path = require("path")

// Apenas o nome do arquivo atual - Basename
console.log(path.basename(__filename))

// Apenas o nome do diretorio atual - Dirname
console.log(path.dirname(__filename))

// Extensão do arquivo
console.log(path.extname(__filename))

// Criar objeto path
console.log(path.parse(__filename))

// Juntar caminho de arquivos
console.log(path.join(__dirname, `test`, `test.html`))