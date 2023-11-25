import StorageTool from "@/class/Storage/browser";
import isTrue from "@/utils/isTrue";
import OpenOptions from "@/utils/openOptions";

export default async function onInstalled() {
    const storage = new StorageTool("other");
    const isInstalled = await storage.get("installed");
    //console.log(isInstalled);
    if (isInstalled != undefined && isTrue(isInstalled)) return;
    OpenOptions("thanks")?.then(() => {
        storage.set("installed", "true");
    });
}
