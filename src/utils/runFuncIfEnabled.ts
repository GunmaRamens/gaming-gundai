import getIsEnabled from "./getIsEnabled";

export default async function runFuncIfEnabled(func: () => void) {
    const isEnable = await getIsEnabled();
    if (isEnable) {
        func();
    }
}
