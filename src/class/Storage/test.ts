import { StorageTool } from "..";
import { StorageIds } from "./type";

export class TestStorage implements StorageTool {
    id: StorageIds;
    constructor(id: StorageIds) {
        this.id = id;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async set(key: string, value: any) {
        console.log(`Set ${key} to ${value}`);
    }

    async getBool(key: string) {
        console.log(`Get ${key}`);
        return true;
    }

    async get(key: string) {
        console.log(`Get ${key}`);
        return true;
    }
}
