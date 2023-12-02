import { OtherStorage } from "@/class/Storage/other";
import { WebsitesList } from "@/data/websites";
import isTrue from "@/utils/isTrue";
import OpenOptions from "@/utils/openOptions";

export default async function onInstalled() {
    await setInstalled();
    await initilizeWebsiteDb();
}

const setInstalled = async () => {
    const isInstalled = await OtherStorage.get("installed");
    //console.log(isInstalled);
    if (isInstalled != undefined && isTrue(isInstalled)) return;
    OpenOptions("thanks")?.then(() => {
        OtherStorage.set({ installed: true });
    });
};

const initilizeWebsiteDb = async () => {
    const isInstalled = await OtherStorage.get("installed");
    //console.log(isInstalled);
    if (isInstalled != undefined && isTrue(isInstalled)) return;
    WebsitesList.forEach(async (website) => {
        website.class.initilizeWebsiteDb();
    });
};
