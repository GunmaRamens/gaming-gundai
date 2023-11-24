// 最近が物忘れが激しい。どうしてだろうか。
// 人間は嫌なことやつらいこと、思い出さないようなことはすぐに忘れるようにできているらしい。
// なんか非同期処理が動かないとき闇雲にasync awaitをつけるのがつらい。

import Browser from "webextension-polyfill";

import IsTrue from "../../utils/isTrue";
import { StorageTool } from "..";
import { StorageIds, StorageKeys } from "./type";

export default class BrowserStorage implements StorageTool {
    id: StorageIds;
    constructor(id: StorageIds) {
        this.id = id;
    }

    static getChromeStorage() {
        return Browser.storage ? Browser.storage.sync : null;
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
