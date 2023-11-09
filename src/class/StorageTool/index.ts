// 最近が物忘れが激しい。どうしてだろうか。
// 人間は嫌なことやつらいこと、思い出さないようなことはすぐに忘れるようにできているらしい。
// なんか非同期処理が動かないとき闇雲にasync awaitをつけるのがつらい。

import Browser from "webextension-polyfill";

import { WebsiteIds, Websites } from "@/data/websites";

import IsTrue from "../../utils/isTrue";

export type StorageKeys =
    | "dark"
    | "rainbow"
    | "enabled-hidden"
    | "show-hidden-option"
    | "installed"
    | "auto-2fa"
    | "quick-switch";
export type StorageIds = WebsiteIds | "other";

export default class StorageTool {
    id: string;
    constructor(id: string) {
        this.id = id;
    }

    static getChromeStorage() {
        return Browser.storage ? Browser.storage.sync : null;
    }

    static getStorage(id: StorageIds) {
        if (id == "other") return new StorageTool(id);
        return Websites.get(id)?.class.storage;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async set(key: StorageKeys, value: any) {
        let newData = { [key]: value };
        const storage = StorageTool.getChromeStorage();
        if (!storage) {
            console.error("Storage is not supported");
            return;
        }

        const currentData = await storage.get(this.id);
        if (currentData) newData = { ...currentData[this.id], ...newData };

        storage.set({ [this.id]: newData });
    }
    async getBool(key: StorageKeys) {
        const storage = StorageTool.getChromeStorage();
        if (!storage) {
            console.error("Storage is not supported");
            return;
        }

        const rawdata = await this.get(key);

        return IsTrue(rawdata);
    }
    async get(key: StorageKeys) {
        const storage = StorageTool.getChromeStorage();
        if (!storage) {
            console.error("Storage is not supported");
            return;
        }

        const rawdata = (await storage.get(this.id))[this.id];

        if (rawdata === undefined) return undefined;
        return rawdata[key];
    }
}
