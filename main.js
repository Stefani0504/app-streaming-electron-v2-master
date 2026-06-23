const { app, BrowserWindow } = require("electron")
const path = require('path')

if (process.platform === 'win32') {
    app.setAppUserModelId('com.electron.appstreaming')
}

function criarJanela() {
    

    const janela = new BrowserWindow({
        width: 1200,
        height: 800,
        icon: path.join(__dirname, 'app-imagens', 'logo.png'),
    })

    janela.loadFile("public/login.html")
}

app.whenReady().then(criarJanela)