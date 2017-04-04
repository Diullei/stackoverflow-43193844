import { ipcMain } from "electron";

ipcMain.on("rendered", (event) => {
    const sender = event.sender;
    event.sender.send("show-section", { key: "index" });
});
