import IsTrue from "../../utils/IsTrue";

export class StorageTool {
    id: string;
    constructor(id: string) {
        this.id = id;
    }

    static GetStorage() {
        return chrome.storage ? chrome.storage.sync : null;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async UpdateStorage(key: string, value: any) {
        let newData = { [key]: value };
        const storage = StorageTool.GetStorage();
        if (!storage) {
            console.error("Storage is not supported");
            return;
        }

        const currentData = await storage.get(this.id);
        if (currentData) newData = { ...currentData[this.id], ...newData };

        storage.set({ [this.id]: newData });
    }
    async GetBool(key: string) {
        const storage = StorageTool.GetStorage();
        if (!storage) {
            console.error("Storage is not supported");
            return;
        }

        const rawdata = await this.GetStorage(key);

        return IsTrue(rawdata);
    }
    async GetStorage(key: string) {
        const storage = StorageTool.GetStorage();
        if (!storage) {
            console.error("Storage is not supported");
            return;
        }

        const rawdata = (await storage.get(this.id))[this.id];

        if (rawdata === undefined) return undefined;
        return rawdata[key];
    }
}
