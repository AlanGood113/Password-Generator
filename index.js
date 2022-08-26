//Initialize Electron and Window
const { app, BrowserWindow, Menu } = require('electron')
const path = require('path')

//Function to create main window
function createWindow() {
    //Main Window
    const win = new BrowserWindow({
        width: 820,
        height: 420,
        title: "Password Generator - by Alan Gooding",
        show: false,
        resizable: false,
        fullscreen: false,
        fullscreenable: false,
        maximizable: false,
        autoHideMenuBar: true,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });

    //Removing menu from window
    Menu.setApplicationMenu(null);

    //Load main html file
    win.loadFile('index.html');

    //Shows window when everything is initialized
    win.once('ready-to-show', () => {
        win.show()
    });

    //Prevents window from being maximized
    win.on('maximize', () => {
        win.unmaximize();
    });
}

//Starts app when everything is initialized
app.whenReady().then(() => {
    createWindow();
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    })
})

//Quits app upon closing
app.on('closed', function () {
    app.quit();
})
