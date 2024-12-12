const mongoose = require(`mongoose`)

const connectToDatabase = async () => {
    await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejs.uhgeh.mongodb.net/?retryWrites=true&w=majority&appName=CursoNodeJS`)
    .then(console.log("Conexão efetuada com sucesso!"))
    .catch(error => {
        console.log('Ocorreu um erro ao realizar a conexão! Erro: ', error)
    });
}
module.exports = connectToDatabase