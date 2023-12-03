import { WebsiteIds } from "@/data/websites";

import BrowserStorage from "./browser";

export interface UnivCommonConfig {
    rainbow?: boolean;
    dark?: boolean;
}

export type CommonConfig = Record<WebsiteIds, UnivCommonConfig>;

export const CommonStorage = new (class {
    #storage: BrowserStorage<CommonConfig>;
    constructor() {
        this.#storage = new BrowserStorage("common");
    }

    async get(id: WebsiteIds, key: keyof UnivCommonConfig) {
        const isRainbowEnabled = (await this.#storage.get(id))[key];
        return isRainbowEnabled;
    }

    async set(id: WebsiteIds, value: Partial<UnivCommonConfig>) {
        const data = await this.#storage.getAll();

        await this.#storage.set({ ...data, [id]: { ...data[id], ...value } });
    }
})();
