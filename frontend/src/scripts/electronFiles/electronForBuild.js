const { app, BrowserWindow } = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");
const childProcess = require("child_process");
const {killPortProcess} = require('kill-port-process');

function createWindow() {
    (async () => {
        await killPortProcess(41220);
    })();

    const jarPath = path.resolve(
        __dirname,
        "..",
        "..",
        "..",
        "public",
        "backend_jar",
        "backend-0.0.1-SNAPSHOT.jar"
    );

    console.log(jarPath)

    const child = childProcess.spawn("java", ['-jar', jarPath]);

    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
        },
        icon: __dirname + "/icon.png",
    });


    win.on("close", (e) => {
        child.kill();
    });

    win.loadURL(
        isDev
            ? "http://localhost:3000"
            : `file://${path.join(__dirname, "../build/index.html")}`
    );
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});