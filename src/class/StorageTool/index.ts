import IsTrue from "../../utils/isTrue";

export class StorageTool {
    id: string;
    constructor(id: string) {
        this.id = id;
    }

    static getChromeStorage() {
        return chrome.storage ? chrome.storage.sync : null;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async set(key: string, value: any) {
        let newData = { [key]: value };
        const storage = StorageTool.getChromeStorage();
        if (!storage) {
            console.error("Storage is not supported");
            return;
        }

        const currentData = await storage.get(this.id);
        if (currentData) newData = { ...currentData[this.id], ...newData };

        storage.set({ [this.id]: newData });
    }
    async getBool(key: string) {
        const storage = StorageTool.getChromeStorage();
        if (!storage) {
            console.error("Storage is not supported");
            return;
        }

        const rawdata = await this.get(key);

        return IsTrue(rawdata);
    }
    async get(key: string) {
        const storage = StorageTool.getChromeStorage();
        if (!storage) {
            console.error("Storage is not supported");
            return;
        }

        const rawdata = (await storage.get(this.id))[this.id];

        if (rawdata === undefined) return undefined;
        return rawdata[key];
    }
}
