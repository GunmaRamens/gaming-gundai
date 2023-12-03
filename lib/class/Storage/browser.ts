import * as TypedStorage from "webext-storage";

import StorageTool from "./storage";
import { StorageIds } from "./type";

export default class BrowserStorage<T> implements StorageTool<T> {
    id: StorageIds;
    #item: TypedStorage.StorageItem<T>;

    constructor(id: StorageIds) {
        this.id = id;
        this.#item = new TypedStorage.StorageItem<T>(id);
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
        return (await this.getAll())[value];
    }

    async set(value: Partial<T>) {
        const data = await this.#item.get();

        await this.#item.set({ ...data, value });
    }
}
