import * as TypedStorage from "webext-storage";

import StorageTool from "./storage";

export default class BrowserStorageTool<T> implements StorageTool<T> {
    #item: TypedStorage.StorageItem<T>;

    constructor(storage: TypedStorage.StorageItem<T>) {
        this.#item = storage;
    }
    async toggle(key: keyof T): Promise<void> {
        const data = await this.#item.get();
        const newdata = !data[key];
        await this.#item.set({ ...data, [key]: newdata });
    }

    async getAll() {
        return await this.#item.get();
    }

    async get(value: keyof T) {
        const data = await this.getAll();
        console.log(data);
        return data[value];
    }

    async set(value: Partial<T>) {
        const data = await this.#item.get();
        const newdata = { ...data, ...value };
        console.log(`newdata: ${newdata}`);
        await this.#item.set(newdata);
    }

    static fromId<T>(id: string, options: TypedStorage.StorageItemOptions<T & Record<string, never>> = { area: "sync" }) {
        const storage = new TypedStorage.StorageItem<T>(id, options);

        console.log(id);
        const bstorage = new BrowserStorageTool(storage);
        bstorage.set({});

        return bstorage;
    }
}
