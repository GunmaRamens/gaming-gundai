import StorageTool from "@/class/Storage/browser";
import { WebsitesList } from "@/data/websites";
import isTrue from "@/utils/isTrue";
import OpenOptions from "@/utils/openOptions";

export default async function onInstalled() {
    await setInstalled();
    await initilizeWebsiteDb();
}

const setInstalled = async () => {
    const storage = new StorageTool("other");
    const isInstalled = await storage.get("installed");
    //console.log(isInstalled);
    if (isInstalled != undefined && isTrue(isInstalled)) return;
    OpenOptions("thanks")?.then(() => {
        storage.set("installed", "true");
    });
};

const initilizeWebsiteDb = async () => {
    const storage = new StorageTool("other");
    const isInstalled = await storage.get("installed");
    //console.log(isInstalled);
    if (isInstalled != undefined && isTrue(isInstalled)) return;
    WebsitesList.forEach(async (website) => {
        website.class.initilizeWebsiteDb();
    });
};
