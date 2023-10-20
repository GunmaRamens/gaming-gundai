import Storage from "../../utils/Storage";

export class StorageTool {
    id: string;
    constructor(id: string) {
        this.id = id;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async UpdateStorage(key: string, value: any) {
        let newData = { [key]: value };
        const currentData = Storage.get(this.id);
        if (currentData) newData = { ...currentData, ...newData };

        Storage.set({ [this.id]: newData });
    }
    async GetStorage(key: string) {
        const data = await Storage.get(this.id).then((data) => JSON.parse(data[this.id]));
        console.log(data[key]);
        return data[key];
    }
}
