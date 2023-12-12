export default interface StorageTool<T> {
    get(value: keyof T): Promise<T[keyof T]>;
    set(value: Partial<T>): Promise<void>;
    toggle(key: keyof T): Promise<void>;
    getAll(): Promise<T>;
}

export class ObjectStorage<T> implements StorageTool<T> {
    #data: T;

    constructor(data: T) {
        this.#data = data;
    }

    async get(value: keyof T) {
        return this.#data[value];
    }
    async set(value: Partial<T>) {
        this.#data = { ...this.#data, ...value };
    }
    async toggle(key: keyof T): Promise<void> {
        const data = this.#data;
        const newdata = !data[key];
        this.#data = { ...data, [key]: newdata };
    }
    async getAll(): Promise<T> {
        return this.#data;
    }
}

type ValueOf<T> = T[keyof T];
type ChildKeys<T> = keyof ValueOf<T>;
export class RecursiveStorageTool<T> implements StorageTool<ValueOf<T>> {
    #parent: StorageTool<T>;
    #key: keyof T;

    constructor(parent: StorageTool<T>, key: keyof T) {
        this.#parent = parent;
        this.#key = key;
    }
    async get(value: keyof ValueOf<T>): Promise<ValueOf<T>[ChildKeys<T>]> {
        const data = await this.#parent.get(this.#key);
        return data[value];
    }
    async getAll(): Promise<ValueOf<T>> {
        return await this.#parent.get(this.#key);
    }
    async set(value: Partial<ValueOf<T>>): Promise<void> {
        const data = await this.#parent.getAll();
        await this.#parent.set({ ...data, value });
    }
    async toggle(key: ChildKeys<T>): Promise<void> {
        const data = await this.#parent.getAll();
        const dataValue = !data[this.#key][key];
        await this.#parent.set({ ...data, [this.#key]: { ...data[this.#key], [key]: dataValue } });
    }
}
