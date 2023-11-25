import { StorageIds, StorageKeys } from "./type";

export interface StorageTool {
    id: StorageIds;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    set(key: StorageKeys, value: any): Promise<void>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getBool(key: StorageKeys): Promise<boolean | undefined>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    get(key: StorageKeys): Promise<any>;
}
