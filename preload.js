const { contextBridge, ipcRenderer } = require("electron")

contextBridge.exposeInMainWorld("api", {

    login: function(email, password) {
        console.log('3. Dados do formulário recebidos no preload.js:')

        return ipcRenderer.invoke('login', email, password)


    }

})



    