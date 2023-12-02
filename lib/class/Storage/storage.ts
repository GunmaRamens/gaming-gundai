import { StorageIds } from "./type";
/*
export interface StorageTool {
    id: StorageIds;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    set(key: StorageKeys, value: any): Promise<void>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getBool(key: StorageKeys): Promise<boolean | undefined>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    get(key: StorageKeys): Promise<any>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    toggle(key: StorageKeys): Promise<void>;
}
*/

export default interface StorageTool<T> {
    id: StorageIds;

    get(value: keyof T): Promise<T[keyof T]>;
    set(value: T): Promise<void>;
    toggle(key: keyof T): Promise<void>;
}
