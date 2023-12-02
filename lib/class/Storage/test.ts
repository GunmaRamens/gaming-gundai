import { StorageTool } from "..";
import { StorageIds } from "./type";

export class TestStorage<T extends object> implements StorageTool<T> {
    id: StorageIds;
    constructor(id: StorageIds) {
        this.id = id;
    }
    toggle(key: keyof T): Promise<void> {
        console.log(`Toggle ${String(key)}`);
        return Promise.resolve();
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async set(value: T) {
        console.log(`Set ${value} to ${value}`);
    }

    async get(key: keyof T): Promise<T[keyof T]> {
        console.log(`Get ${String(key)}`);
        return {} as T[keyof T];
    }
}
