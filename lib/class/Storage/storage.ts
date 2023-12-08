import { StorageIds } from "./type";

export default interface StorageTool<T> {
    id: StorageIds;

    get(value: keyof T): Promise<T[keyof T]>;
    set(value: Partial<T>): Promise<void>;
    toggle(key: keyof T): Promise<void>;
    getAll(): Promise<T>;
}
