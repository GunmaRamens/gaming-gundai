import getIsEnabled from "./getIsEnabled";

export default async function runIfEnabled(func: () => void) {
    const isEnable = await getIsEnabled();
    if (isEnable) {
        func();
    }
}
