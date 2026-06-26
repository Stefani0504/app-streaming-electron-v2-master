const { app, BrowserWindow, ipcMain} = require("electron")
const database = require('./db')

const path = require('path')

if (process.platform === 'win32') {
    app.setAppUserModelId('com.electron.appstreaming')
}

function criarJanela() {
    

    const janela = new BrowserWindow({
        width: 1200,
        height: 800,
        icon: path.join(__dirname, 'app-imagens', 'logo.png'),
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    janela.loadFile("public/login.html")

    janela.webContents.openDevTools()
}



app.whenReady().then(criarJanela)

ipcMain.handle('login', async (event, email, password) => {
    console.log('4. Dados do formulário recebidos no main.js:', email, password);
    console.log('5. Email;', email, "Senha:", password)

    const [rows] = await database.query("select * from users WHERE email = ? AND password = ? AND is_active = 1", [email, password])
    console.log('USUARIO', rows[0])
   
})