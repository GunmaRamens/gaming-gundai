import { StorageTool } from "../class/StorageTool";
import IsTrue from "../utils/IsTrue";
import OpenOptions from "../utils/OpenOptions";

chrome.runtime.onInstalled.addListener(async () => {
    const storage = new StorageTool("other");
    const isInstalled = await storage.GetStorage("installed");
    console.log(isInstalled);
    if (isInstalled != undefined && IsTrue(isInstalled)) return;
    OpenOptions("thanks").then(() => {
        storage.UpdateStorage("installed", "true");
    });
});
